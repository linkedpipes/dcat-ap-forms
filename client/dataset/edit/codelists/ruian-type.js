const prefix = "https://linked.cuzk.cz/ontology/ruian/TypPrvku/";

export default [
    {
        "value": prefix + "SP",
        "cs": "Správní obvod v hlavním městě Praze",
        "en": "Správní obvod v hlavním městě Praze"
    },
    {
        "value": prefix + "OB",
        "cs": "Území obce, území vojenského újezdu",
        "en": "Území obce, území vojenského újezdu"
    },
    {
        "value": prefix + "MP",
        "cs": "Území městského obvodu v hlavním městě Praze",
        "en": "Území městského obvodu v hlavním městě Praze"
    },
    {
        "value": prefix + "MC",
        "cs": "Území městského obvodu nebo městské části územně členěného statutárního města",
        "en": "Území městského obvodu nebo městské části územně členěného statutárního města"
    },
    {
        "value": prefix + "KU",
        "cs": "Katastrální území",
        "en": "Katastrální území"
    },
    {
        "value": prefix + "CO",
        "cs": "Část obce",
        "en": "Část obce"
    },
    {
        "value": prefix + "UL",
        "cs": "Ulice nebo jiné veřejné prostranství",
        "en": "Ulice nebo jiné veřejné prostranství"
    },
    {
        "value": prefix + "PU",
        "cs": "Správní obvod obce s pověřeným obecním úřadem",
        "en": "Správní obvod obce s pověřeným obecním úřadem"
    },
    {
        "value": prefix + "OK",
        "cs": "Území okresu",
        "en": "Území okresu"
    },
    {
        "value": prefix + "ZJ",
        "cs": "Území základní sídelní jednotky",
        "en": "Území základní sídelní jednotky"
    },
    {
        "value": prefix + "VC",
        "cs": "Území vyššího územně samosprávného celku",
        "en": "Území vyššího územně samosprávného celku"
    },
    {
        "value": prefix + "KR",
        "cs": "Území kraje",
        "en": "Území kraje"
    },
    {
        "value": prefix + "RS",
        "cs": "Území regionu soudržnosti",
        "en": "Území regionu soudržnosti"
    },
    {
        "value": prefix + "ST",
        "cs": "Území státu",
        "en": "Území státu"
    },
    {
        "value": prefix + "OP",
        "cs": "Správní obvod obce s rozšířenou působností",
        "en": "Správní obvod obce s rozšířenou působností"
    }
];

export function typeFromUrl(url) {
    if (url.indexOf("adresni-misto") !== -1) {

    } else if (url.indexOf("/cast-obce/") !== -1) {
        return prefix + "CO";
    } else if (url.indexOf("/katastralni-uzemi/") !== -1) {

    } else if (url.indexOf("/kraj-1960/") !== -1) {

    } else if (url.indexOf("/momc/") !== -1) {

    } else if (url.indexOf("/mop/") !== -1) {

    } else if (url.indexOf("/obec/") !== -1) {

    } else if (url.indexOf("/okres/") !== -1) {
        return prefix + "OK";
    } else if (url.indexOf("/orp/") !== -1) {

    } else if (url.indexOf("/parcela/") !== -1) {

    } else if (url.indexOf("/pou/") !== -1) {

    } else if (url.indexOf("/region-soudrznosti/") !== -1) {
        return prefix + "RS";
    } else if (url.indexOf("/zjs/") !== -1) {

    } else if (url.indexOf("/stat/") !== -1) {
        return prefix + "ST";
    } else if (url.indexOf("/stavebni-objekt/") !== -1) {

    } else if (url.indexOf("/ulice/") !== -1) {
        return prefix + "UL";
    } else if (url.indexOf("/volebni-okrsek/") !== -1) {

    } else if (url.indexOf("/vusc/") !== -1) {

    }
}
