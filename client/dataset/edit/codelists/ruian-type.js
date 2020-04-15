const prefix = "https://linked.cuzk.cz/ontology/ruian/TypPrvku/";

export default [
  {
    "value": prefix + "SP",
    "cs": "Správní obvod v hlavním městě Praze",
    "en": "Administrative district of Prague"
  },
  {
    "value": prefix + "OB",
    "cs": "Území obce, území vojenského újezdu",
    "en": "Municipality, military area"
  },
  {
    "value": prefix + "MP",
    "cs": "Území městského obvodu v hlavním městě Praze",
    "en": "City district of Prague"
  },
  {
    "value": prefix + "MC",
    "cs": "Území městského obvodu nebo městské části územně členěného "
      + "statutárního města",
    "en": "City district of territorially structured statutory city"
  },
  {
    "value": prefix + "KU",
    "cs": "Katastrální území",
    "en": "Cadastral territory"
  },
  {
    "value": prefix + "CO",
    "cs": "Část obce",
    "en": "Part of a municipality"
  },
  {
    "value": prefix + "UL",
    "cs": "Ulice nebo jiné veřejné prostranství",
    "en": "Streets or other public areas"
  },
  {
    "value": prefix + "PU",
    "cs": "Správní obvod obce s pověřeným obecním úřadem",
    "en": "Administrative district of a municipality with an authorized "
      + "municipal office"
  },
  {
    "value": prefix + "OK",
    "cs": "Území okresu",
    "en": "Territory of a district"
  },
  {
    "value": prefix + "ZJ",
    "cs": "Území základní sídelní jednotky",
    "en": "Territory of a basic settlement unit"
  },
  {
    "value": prefix + "VC",
    "cs": "Území vyššího územně samosprávného celku",
    "en": "Territory of a higher territorial self-governing unit"
  },
  {
    "value": prefix + "KR",
    "cs": "Území kraje",
    "en": "Territory of a region"
  },
  {
    "value": prefix + "RS",
    "cs": "Území regionu soudržnosti",
    "en": "Territory of a region of cohesion"
  },
  {
    "value": prefix + "ST",
    "cs": "Území státu",
    "en": "State territory"
  },
  {
    "value": prefix + "OP",
    "cs": "Správní obvod obce s rozšířenou působností",
    "en": "Administrative district of a municipality with extended competence"
  }
];

export function typeFromUrl(url) {
  if (url.indexOf("adresni-misto") !== -1) {
    return prefix + "AD";
  } else if (url.indexOf("/cast-obce/") !== -1) {
    return prefix + "CO";
  } else if (url.indexOf("/katastralni-uzemi/") !== -1) {
    return prefix + "KU";
  } else if (url.indexOf("/kraj-1960/") !== -1) {
    return prefix + "KR";
  } else if (url.indexOf("/momc/") !== -1) {
    return prefix + "MC";
  } else if (url.indexOf("/mop/") !== -1) {
    return prefix + "MP";
  } else if (url.indexOf("/obec/") !== -1) {
    return prefix + "OB";
  } else if (url.indexOf("/okres/") !== -1) {
    return prefix + "OK";
  } else if (url.indexOf("/orp/") !== -1) {
    return prefix + "OP";
  } else if (url.indexOf("/parcela/") !== -1) {
    return prefix + "PA";
  } else if (url.indexOf("/pou/") !== -1) {
    return prefix + "PU";
  } else if (url.indexOf("/region-soudrznosti/") !== -1) {
    return prefix + "RS";
  } else if (url.indexOf("/zjs/") !== -1) {
    return prefix + "ZJ";
  } else if (url.indexOf("/stat/") !== -1) {
    return prefix + "ST";
  } else if (url.indexOf("/stavebni-objekt/") !== -1) {
    return prefix + "SO";
  } else if (url.indexOf("/ulice/") !== -1) {
    return prefix + "UL";
  } else if (url.indexOf("/volebni-okrsek/") !== -1) {
    return prefix + "VO";
  } else if (url.indexOf("/vusc/") !== -1) {
    return prefix + "VC";
  } else if (url.indexOf("/spravni-obvod/") !== -1) {
    return prefix + "SP";
  }
}
