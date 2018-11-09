import {
    DCTERMS,
    DCATAP,
    FOAF,
    VCARD,
    SCHEMA,
    PU,
    CREATIVE_COMMONS,
    NKOD
} from "@/app-service/vocabulary";

export function exportToJsonLd(dataset, distributions) {
    const output = {
        "@id": dataset.iri,
        "@type": [DCATAP.Dataset, NKOD.Formular],
        [DCTERMS.title]: asLangString(dataset.title),
        [DCTERMS.description]: asLangString(dataset.description),
        [DCATAP.keyword]: dataset.keywords.map(
            (keyword) => asLangString(keyword)),
        [DCATAP.distribution]: distributions.map(
            (distribution) => exportDistribution(distribution))
    };

    if (dataset.accrual_periodicity !== "") {
        const url = dataset.accrual_periodicity;
        output[DCTERMS.accrualPeriodicity] = asIri(url);
    }
    if (dataset.ruian !== null) {
        output[DCTERMS.spatial] = asIri(dataset.ruian);
    }
    if (dataset.documentation !== "") {
        output[FOAF.page] = asIri(dataset.documentation);
    }

    const themes = [dataset.dataset_theme, ...dataset.themes];
    output[DCATAP.theme] = themes.map((t) => asIri(t));

    const temporal = exportTemporal(dataset);
    if (temporal !== undefined) {
        output[DCTERMS.temporal] = temporal;
    }
    const contactPoint = exportContactPoint(dataset);
    if (contactPoint !== undefined) {
        output[DCATAP.contactPoint] = contactPoint;
    }

    return output;
}

function asLangString(value) {
    return {
        "@language": "cs",
        "@value": value
    }
}

function asIri(value) {
    return {
        "@id": value
    }
}

function asValue(value) {
    return {
        "@value": value
    }
}

function exportTemporal(dataset) {
    if (dataset.temporal_start === "" &&
        dataset.temporal_end === "") {
        return undefined;
    }
    const output = {
        "@type": [DCTERMS.PeriodOfTime]
    };
    if (dataset.temporal_start !== undefined) {
        output[SCHEMA.startDate] = {
            "@type": "http://www.w3.org/2001/XMLSchema#date",
            "@value": dataset.temporal_start
        };
    }
    if (dataset.temporal_end !== undefined) {
        output[SCHEMA.endDate] = {
            "@type": "http://www.w3.org/2001/XMLSchema#date",
            "@value": dataset.temporal_end
        };
    }
    return output;
}

function exportContactPoint(dataset) {
    const output = {
        "@type": [VCARD.Organization]
    };
    if (dataset.contact_point_name === "" &&
        dataset.contact_point_email === "") {
        return undefined;
    }
    if (dataset.contact_point_name !== "") {
        output[VCARD.fn] = asLangString(dataset.contact_point_name);
    }
    if (dataset.contact_point_email !== "") {
        output[VCARD.hasEmail] = dataset.contact_point_email;
    }
    return output;
}

function exportDistribution(distribution) {

    const output = {
        "@type": [DCATAP.Distribution],
        [DCATAP.downloadURL]: asIri(distribution.url),
        [DCATAP.mediaType]: asIri(distribution.media_type),
        [DCTERMS.format]: asIri(distribution.format),
        [PU.specifikace]: license(distribution)
    };

    if (distribution.schema !== "") {
        output[DCTERMS.conformsTo] = asIri(distribution.schema);
    }

    if (distribution.title !== "") {
        output[DCTERMS.title] = asLangString(distribution.title);
    }

    return output;
}

function license(distribution) {
    const output = {
        "@type": PU.Specifikace
    };

    switch (distribution.license_author_type) {
        case "MULTI":
            output[PU.autorskeDilo] = asIri(PU.obsahujeViceAutorskychDel);
            break;
        case "CC BY":
            output[PU.autorskeDilo] = asIri(CREATIVE_COMMONS.BY_40);
            output[PU.autor] = asLangString(distribution.license_author_name);
            break;
        case "NO":
            output[PU.autorskeDilo] = asIri(PU.neobsahujeAutorskaDila);
            break;
        case "CUSTOM":
            output[PU.autorskeDilo] = asIri(distribution.license_author_custom);
            break;
        default:
            console.error("Unexpected license_author_type value:",
                distribution.license_author_type);
            break;
    }

    switch (distribution.license_db_type) {
        case "CC BY":
            output[PU.databazeJakoAutorskeDilo] = asIri(CREATIVE_COMMONS.BY_40);
            output[PU.autorDatabaze] = asLangString(distribution.license_db_name);
            break;
        case "NO":
            output[PU.databazeJakoAutorskeDilo] =
                asIri(PU.neniAutorskopravneChranenouDatabazi);
            break;
        case "CUSTOM":
            output[PU.databazeJakoAutorskeDilo] =
                asIri(distribution.license_db_custom);
            break;
        default:
            console.error("Unexpected license_db_type value:",
                distribution.license_db_type);
            break;
    }

    switch (distribution.license_specialdb_type) {
        case "CC0":
            output[PU.databazeChranenaZvlastnimiPravy] =
                asIri(CREATIVE_COMMONS.PUBLIC_ZERO_10);
            break;
        case "NO":
            output[PU.databazeChranenaZvlastnimiPravy] =
                asIri(PU.neniChranenazvlastnimPravemPorizovateleDatabaze);
            break;
        case "CUSTOM":
            output[PU.databazeChranenaZvlastnimiPravy] =
                asIri(distribution.license_specialdb_custom);
            break;
        default:
            console.error("Unexpected license_specialdb_type value:",
                distribution.license_specialdb_type);
            break;
    }

    switch (distribution.license_personal_type) {
        case "YES":
            output[PU.osobniUdaje] = asIri(PU.obsahujeOsobniUdaje);
            break;
        case "NO":
            output[PU.osobniUdaje] = asIri(PU.neobsahujeOsobniUdaje);
            break;
        default:
            console.error("Unexpected license_personal_type value:",
                distribution.license_personal_type);
            break;
    }

    return output;
}
