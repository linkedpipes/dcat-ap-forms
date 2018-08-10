export default [
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/SP",
        "cs": "Správní obvod v hlavním městě Praze"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/OB",
        "cs": "Území obce, území vojenského újezdu"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/MP",
        "cs": "Území městského obvodu v hlavním městě Praze"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/MC",
        "cs": "Území městského obvodu nebo městské části územně členěného statutárního města"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/KU",
        "cs": "Katastrální území"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/CO",
        "cs": "Část obce"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/UL",
        "cs": "Ulice nebo jiné veřejné prostranství"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/PU",
        "cs": "Správní obvod obce s pověřeným obecním úřadem"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/OK",
        "cs": "Území okresu"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ZJ",
        "cs": "Území základní sídelní jednotky"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/VC",
        "cs": "Území vyššího územně samosprávného celku"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/KR",
        "cs": "Území kraje"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/RS",
        "cs": "Území regionu soudržnosti"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
        "cs": "Území státu"
    },
    {
        "value": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/OP",
        "cs": "Správní obvod obce s rozšířenou působností"
    }
];

export function typeFromUrl(url) {
    if (url.indexOf("adresni-misto") !== -1) {

    } else if (url.indexOf("/cast-obce/") !== -1) {
        return "https://linked.cuzk.cz/ontology/ruian/TypPrvku/CO";
    } else if (url.indexOf("/katastralni-uzemi/") !== -1) {

    } else if (url.indexOf("/kraj-1960/") !== -1) {

    } else if (url.indexOf("/momc/") !== -1) {

    } else if (url.indexOf("/mop/") !== -1) {

    } else if (url.indexOf("/obec/") !== -1) {

    } else if (url.indexOf("/okres/") !== -1) {
        return "https://linked.cuzk.cz/ontology/ruian/TypPrvku/OK";
    } else if (url.indexOf("/orp/") !== -1) {

    } else if (url.indexOf("/parcela/") !== -1) {

    } else if (url.indexOf("/pou/") !== -1) {

    } else if (url.indexOf("/region-soudrznosti/") !== -1) {
        return "https://linked.cuzk.cz/ontology/ruian/TypPrvku/RS";
    } else if (url.indexOf("/zjs/") !== -1) {

    } else if (url.indexOf("/stat/") !== -1) {
        return "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST";
    } else if (url.indexOf("/stavebni-objekt/") !== -1) {

    } else if (url.indexOf("/ulice/") !== -1) {
        return "https://linked.cuzk.cz/ontology/ruian/TypPrvku/UL";
    } else if (url.indexOf("/volebni-okrsek/") !== -1) {

    } else if (url.indexOf("/vusc/") !== -1) {

    }
}
