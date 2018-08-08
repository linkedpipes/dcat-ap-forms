import {getRemoteJson} from "@/app-service/http";
import {
    normalize,
    getDefaultGraphData,
    getByType,
    getValue,
    getValues,
    getByIri
} from "@/app-service/jsonld";
import {
    DCTERMS,
    DCATAP,
    FOAF,
    VCARD,
    SCHEMA,
    PU,
    SKOS
} from "@/app-service/vocabulary";
import {typeFromUrl} from "./codelists/ruian-type";

console.error("Using predefined URL as a data source.");

function UPDATE_URL(url) {
    // const query = encodeURIComponent("define sql:describe-mode \"CBD\"  DESCRIBE <" + url + ">");
    // return "https://dev.nkod.opendata.cz/sparql?query=" + query + "&output=application%2Fld%2Bjson";
    return url;
}

export function importFromUrl(url) {
    return getRemoteJson(UPDATE_URL(url), "application/ld+json").then((response) => {

        const graphData = getDefaultGraphData(normalize(response.json));
        const dataset = getByType(graphData, DCATAP.Dataset)[0];
        if (dataset === undefined) {
            throw {"error": "FETCH"};
        }

        const temporalIri = getValue(dataset, DCTERMS.temporal);
        const contactPointIri = getValue(dataset, DCATAP.contactPoint);
        const distributionsIri = getValues(dataset, DCATAP.distribution);
        const themesIri = getValues(dataset, DCATAP.theme);

        const toFetch = [
            temporalIri,
            contactPointIri,
            ...distributionsIri,
            ...themesIri
        ];

        return fetchResources(toFetch).then((responses) => {
            const datasetModel = {
                ...parseDataset(dataset),
                //
                "temporal_start": "",
                "temporal_end": "",
                "contact_point_name": "",
                "contact_point_email": "",
                "dataset_theme": "",
                "themes": [],
                //
                ...parseThemes(themesIri, responses),
                ...parseContactPoint(contactPointIri, responses[contactPointIri]),
                ...parseTemporal(temporalIri, responses[temporalIri])
            };

            return parseDistributions(distributionsIri, responses)
                .then((distributionsModel) => {
                    return {
                        "dataset": datasetModel,
                        "distributions": distributionsModel
                    }
                });
        });
    });
}

function fetchResources(data) {
    return mapPromises(
        data, (url) => getRemoteJson(UPDATE_URL(url), "application/ld+json"));
}

function mapPromises(keys, func) {
    return keys.reduce((promise, key) => promise.then(
        (output) => func(key)
            .then(response => {
                output[key] = response;
                return output;
            })
            .catch(response => {
                output[key] = response;
                return output;
            })
        )
        , Promise.resolve([]));
}

function parseDataset(dataset) {
    return {
        "title": getValue(dataset, DCTERMS.title),
        "description": getValue(dataset, DCTERMS.description),
        "accrual_periodicity": getValue(dataset, DCTERMS.accrualPeriodicity),
        "documentation": getValue(dataset, FOAF.page),
        "keywords": getValues(dataset, DCATAP.keyword),
        //
        "ruian_type": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
        "ruian": "",
        //
        ...parseSpatial(getValues(dataset, DCTERMS.spatial))
    }
}

function parseSpatial(values) {
    // https://linked.cuzk.cz/resource/ruian/stat/1
    let url = undefined;
    for (let index in values) {
        if (!values.hasOwnProperty(index)) {
            continue;
        }
        // We can not dereference, so we manually parse instead.
        if (!values[index].startsWith("https://linked.cuzk.cz/resource/ruian")) {
            continue;
        }
        url = values[index];
        break;
    }
    if (url === undefined) {
        return {};
    }
    let type = typeFromUrl(url);
    if (type === undefined) {
        console.warn("Can't resolve type for:", url);
    }
    return {
        "ruian": url,
        "ruian_type": type
    };
}

function parseThemes(iris, responses) {
    const output = {
        "dataset_theme": "",
        "themes": []
    };
    iris.forEach((iri) => {
        const response = responses[iri];
        if (response.error || response.json === undefined) {
            return;
        }
        const graphData = getDefaultGraphData(normalize(response.json));
        const entity = getByIri(graphData, iri);
        if (entity === undefined) {
            return;
        }
        const inScheme = getValues(entity, SKOS.inScheme);
        if (inScheme.indexOf("http://publications.europa.eu/resource/authority/data-theme") !== -1) {
            output["dataset_theme"] = iri;
        } else {
            output["themes"].push(iri);
        }
    });
    return output;
}

function parseContactPoint(iri, response) {
    if (response.error || response.json === undefined) {
        return {};
    }
    const graphData = getDefaultGraphData(normalize(response.json));
    const entity = getByIri(graphData, iri);
    if (entity === undefined) {
        return {};
    }
    return {
        "contact_point_name": getValue(entity, VCARD.fn),
        "contact_point_email": getValue(entity, VCARD.hasEmail)
    }
}

function parseTemporal(iri, response) {
    if (response.error || response.json === undefined) {
        return {};
    }
    const graphData = getDefaultGraphData(normalize(response.json));
    const entity = getByIri(graphData, iri);
    if (entity === undefined) {
        return {}
    }
    return {
        "temporal_start": getValue(entity, SCHEMA.endDate),
        "temporal_end": getValue(entity, SCHEMA.startDate)
    }
}

function parseDistributions(iris, responses) {
    return mapPromises(
        iris, (iri) => parseDistribution(iri, responses[iri]));
}

function parseDistribution(iri, response) {
    if (response.error || response.json === undefined) {
        return {};
    }
    const graphData = getDefaultGraphData(normalize(response.json));
    const distribution = getByIri(graphData, iri);
    const termsOfUseIri = getValue(distribution, PU.specifikace);

    const conformsTo = getValue(distribution, DCTERMS.conformsTo);
    const title = getValue(distribution, DCTERMS.title);

    return getRemoteJson(UPDATE_URL(termsOfUseIri), "application/ld+json")
        .then((response) => ({
            "url": getValue(distribution, DCATAP.downloadURL),
            "format": getValue(distribution, DCTERMS.format),
            "media_type": getValue(distribution, DCATAP.mediaType),
            "schema": undefinedToEmpty(conformsTo),
            "title": undefinedToEmpty(title),
            //
            "license_author_type": "NO",
            "license_author_name": "",
            "license_author_custom": "",
            "license_db_type": "NO",
            "license_db_name": "",
            "license_db_custom": "",
            "license_specialdb_type": "NO",
            "license_specialdb_custom": "",
            "license_personal_type": "NO",
            //
            ...parseTermsOfUse(termsOfUseIri, response)
        }));
}

function parseTermsOfUse(iri, response) {
    if (response.error || response.json === undefined) {
        return {};
    }
    const graphData = getDefaultGraphData(normalize(response.json));
    const termsOfUse = getByIri(graphData, iri);

    const author = getValue(termsOfUse, PU.autorskeDilo);
    const authorName = getValue(termsOfUse, PU.autor);
    const authorType = mapLicenseIriToValue(author);
    const authorCustom = authorType === "CUSTOM" ? author : "";

    const db = getValue(termsOfUse, PU.databazeJakoAutorskeDilo);
    const dbName = getValue(termsOfUse, PU.autorDatabaze);
    const dbType = mapLicenseIriToValue(db);
    const dbCustom = dbType === "CUSTOM" ? db : "";

    const specialDb = getValue(termsOfUse, PU.databazeChranenaZvlastnimiPravy);
    const specialDbType = mapLicenseIriToValue(specialDb);
    const specialDbCustom = specialDbType === "CUSTOM" ? specialDb : "";

    return {
        "license_author_type": authorType,
        "license_author_name": undefinedToEmpty(authorName),
        "license_author_custom": authorCustom,
        "license_db_type": dbType,
        "license_db_name": undefinedToEmpty(dbName),
        "license_db_custom": dbCustom,
        "license_specialdb_type": specialDbType,
        "license_specialdb_custom": specialDbCustom,
        "license_personal_type": parsePersonalData(termsOfUse)
    };
}

function mapLicenseIriToValue(iri) {
    const mapping = {
        "https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/": "MULTI",
        "https://creativecommons.org/licenses/by/4.0/": "CC BY",
        "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/": "NO",
        "https://creativecommons.org/publicdomain/zero/1.0/": "CC0",
        "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/": "NO",
        "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/": "NO"
    };
    const value = mapping[iri];
    if (value === undefined) {
        return "CUSTOM";
    } else {
        return value;
    }
}

function undefinedToEmpty(value) {
    return value === undefined ? "" : value;
}

function parsePersonalData(termsOfUse) {
    const iri = getValue(termsOfUse, PU.osobniUdaje);
    if ("https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/" === iri) {
        return "YES";
    } else {
        return "NO";
    }
}
