export const prefix = "http://publications.europa.eu/resource/authority/place/";

const codelist = [
  {
    "value": prefix + "AND_ALV",
    "cs": "Andorra la Vella",
    "en": "Andorra la Vella",
  },
  {
    "value": prefix + "ALB_TIA",
    "cs": "Tirana",
    "en": "Tirana",
  },
  {
    "value": prefix + "AGO_LAD",
    "cs": "Luanda",
    "en": "Luanda",
  },
  {
    "value": prefix + "AUT_BRZ",
    "cs": "Bregenz",
    "en": "Bregenz",
  },
  {
    "value": prefix + "AUT_EIT",
    "cs": "Eisenstadt",
    "en": "Eisenstadt",
  },
  {
    "value": prefix + "AUT_GRZ",
    "cs": "Štýrský Hradec",
    "en": "Graz",
  },
  {
    "value": prefix + "AUT_INN",
    "cs": "Innsbruck",
    "en": "Innsbruck",
  },
  {
    "value": prefix + "AUT_KLU",
    "cs": "Klagenfurt am Wörthersee",
    "en": "Klagenfurt am Wörthersee",
  },
  {
    "value": prefix + "AUT_LNZ",
    "cs": "Linec",
    "en": "Linz",
  },
  {
    "value": prefix + "AUT_SZG",
    "cs": "Salcburk",
    "en": "Salzburg",
  },
  {
    "value": prefix + "AUT_PLT",
    "cs": "Sankt Pölten",
    "en": "Sankt Pölten",
  },
  {
    "value": prefix + "AUT_VIE",
    "cs": "Vídeň",
    "en": "Vienna",
  },
  {
    "value": prefix + "AZE_BAK",
    "cs": "Baku",
    "en": "Baku",
  },
  {
    "value": prefix + "BEL_AAB",
    "cs": "Aalst",
    "en": "Aalst",
  },
  {
    "value": prefix + "BEL_ANR",
    "cs": "Antverpy",
    "en": "Antwerp",
  },
  {
    "value": prefix + "BEL_ARL",
    "cs": "Arlon",
    "en": "Arlon",
  },
  {
    "value": prefix + "BEL_ATH",
    "cs": "Ath",
    "en": "Ath",
  },
  {
    "value": prefix + "BEL_BSG",
    "cs": "Bastogne",
    "en": "Bastogne",
  },
  {
    "value": prefix + "NOR_BGN",
    "cs": "Bergen",
    "en": "Bergen",
  },
  {
    "value": prefix + "BEL_BGS",
    "cs": "Bruggy",
    "en": "Bruges",
  },
  {
    "value": prefix + "BEL_BRU",
    "cs": "Brusel",
    "en": "Brussels",
  },
  {
    "value": prefix + "BEL_CRL",
    "cs": "Charleroi",
    "en": "Charleroi",
  },
  {
    "value": prefix + "BEL_DDR",
    "en": "Dendermonde",
  },
  {
    "value": prefix + "BEL_DIK",
    "en": "Diksmuide",
  },
  {
    "value": prefix + "BEL_DIA",
    "en": "Dinant",
  },
  {
    "value": prefix + "BEL_TRN",
    "cs": "Tournai",
    "en": "Tournai",
  },
  {
    "value": prefix + "BEL_ESE",
    "cs": "Ixelles",
    "en": "Ixelles",
  },
  {
    "value": prefix + "BEL_EGI",
    "cs": "Enghien",
    "en": "Enghien",
  },
  {
    "value": prefix + "DEU_ESS",
    "cs": "Essen",
    "en": "Essen",
  },
  {
    "value": prefix + "BEL_VOS",
    "cs": "Forest",
    "en": "Forest",
  },
  {
    "value": prefix + "BEL_GEL",
    "en": "Geel",
  },
  {
    "value": prefix + "BEL_GNE",
    "cs": "Gent",
    "en": "Ghent",
  },
  {
    "value": prefix + "BEL_GEA",
    "cs": "Grammont",
    "en": "Geraardsbergen",
  },
  {
    "value": prefix + "BEL_HSS",
    "en": "Hasselt",
  },
  {
    "value": prefix + "BEL_HUY",
    "en": "Huy",
  },
  {
    "value": prefix + "BEL_IPR",
    "cs": "Ypry",
    "en": "Ypres",
  },
  {
    "value": prefix + "BEL_KJK",
    "cs": "Courtrai",
    "en": "Courtrai",
  },
  {
    "value": prefix + "BEL_LPG",
    "cs": "Leopoldsburg",
    "en": "Leopoldsburg",
  },
  {
    "value": prefix + "BEL_LEU",
    "cs": "Louvain",
    "en": "Louvain",
  },
  {
    "value": prefix + "BEL_LGG",
    "cs": "Lutych",
    "en": "Liège",
  },
  {
    "value": prefix + "BEL_MSK",
    "en": "Maaseik",
  },
  {
    "value": prefix + "BEL_MEF",
    "en": "Marche-en-Famenne",
  },
  {
    "value": prefix + "BEL_ECH",
    "cs": "Malines",
    "en": "Mechelen",
  },
  {
    "value": prefix + "BEL_MOS",
    "en": "Mouscron",
  },
  {
    "value": prefix + "BEL_MQS",
    "cs": "Mons",
    "en": "Mons",
  },
  {
    "value": prefix + "BEL_NAM",
    "cs": "Namur",
    "en": "Namur",
  },
  {
    "value": prefix + "BEL_NCA",
    "en": "Neufchâteau",
  },
  {
    "value": prefix + "BEL_NIV",
    "cs": "Nivelles",
    "en": "Nivelles",
  },
  {
    "value": prefix + "BEL_OST",
    "cs": "Ostende",
    "en": "Ostend",
  },
  {
    "value": prefix + "BEL_OUD",
    "en": "Oudenaarde",
  },
  {
    "value": prefix + "BEL_PHI",
    "en": "Philippeville",
  },
  {
    "value": prefix + "BEL_ROE",
    "cs": "Roulers",
    "en": "Roeselare",
  },
  {
    "value": prefix + "BEL_SGI",
    "cs": "Saint-Gilles",
    "en": "Saint-Gilles",
  },
  {
    "value": prefix + "BEL_SBK",
    "en": "Schaerbeek",
  },
  {
    "value": prefix + "BEL_SLW",
    "cs": "Woluwe-Saint-Lambert",
    "en": "Woluwe-Saint-Lambert",
  },
  {
    "value": prefix + "BEL_SPO",
    "cs": "Woluwe-Saint-Pierre",
    "en": "Woluwe-Saint-Pierre",
  },
  {
    "value": prefix + "BEL_SOI",
    "en": "Soignies",
  },
  {
    "value": prefix + "BEL_SNK",
    "en": "Sint-Niklaas",
  },
  {
    "value": prefix + "BEL_STR",
    "cs": "Saint Trond",
    "en": "Sint-Truiden",
  },
  {
    "value": prefix + "BEL_SVH",
    "en": "St. Vith",
  },
  {
    "value": prefix + "BEL_THU",
    "cs": "Thuin",
    "en": "Thuin",
  },
  {
    "value": prefix + "BEL_TLT",
    "en": "Tielt",
  },
  {
    "value": prefix + "BEL_TON",
    "cs": "Tongres",
    "en": "Tongeren",
  },
  {
    "value": prefix + "BEL_TUR",
    "en": "Turnhout",
  },
  {
    "value": prefix + "BEL_UKE",
    "cs": "Uccle",
    "en": "Uccle",
  },
  {
    "value": prefix + "BEL_VIR",
    "en": "Virton",
  },
  {
    "value": prefix + "BEL_WRE",
    "en": "Waremme",
  },
  {
    "value": prefix + "BEL_WBV",
    "cs": "Watermael-Boisfort",
    "en": "Watermael-Boitsfort",
  },
  {
    "value": prefix + "BEL_ZEE",
    "cs": "Zeebrugge",
    "en": "Zeebrugge",
  },
  {
    "value": prefix + "BFA_OUA",
    "cs": "Ouagadougou",
    "en": "Ouagadougou",
  },
  {
    "value": prefix + "BGR_BLN",
    "en": "Blagoevgrad",
  },
  {
    "value": prefix + "BGR_BOJ",
    "cs": "Burgas",
    "en": "Burgas",
  },
  {
    "value": prefix + "BGR_DOD",
    "en": "Dobrich",
  },
  {
    "value": prefix + "BGR_GAV",
    "en": "Gabrovo",
  },
  {
    "value": prefix + "BGR_HKV",
    "en": "Haskovo",
  },
  {
    "value": prefix + "BGR_KRM",
    "en": "Kardzhali",
  },
  {
    "value": prefix + "BGR_KYS",
    "en": "Kyustendil",
  },
  {
    "value": prefix + "BGR_LVP",
    "en": "Lovech",
  },
  {
    "value": prefix + "BGR_OZA",
    "en": "Montana",
  },
  {
    "value": prefix + "BGR_PZA",
    "en": "Pazardzhik",
  },
  {
    "value": prefix + "BGR_PNZ",
    "en": "Pernik",
  },
  {
    "value": prefix + "BGR_PVN",
    "cs": "Pleven",
    "en": "Pleven",
  },
  {
    "value": prefix + "BGR_PDV",
    "cs": "Plovdiv",
    "en": "Plovdiv",
  },
  {
    "value": prefix + "BGR_RGL",
    "en": "Razgrad",
  },
  {
    "value": prefix + "BGR_RDU",
    "en": "Ruse",
  },
  {
    "value": prefix + "BGR_SMN",
    "en": "Shumen",
  },
  {
    "value": prefix + "BGR_SLS",
    "en": "Silistra",
  },
  {
    "value": prefix + "BGR_SLP",
    "en": "Sliven",
  },
  {
    "value": prefix + "BGR_SML",
    "en": "Smolyan",
  },
  {
    "value": prefix + "BGR_SOF",
    "cs": "Sofie",
    "en": "Sofia",
  },
  {
    "value": prefix + "BGR_SZR",
    "en": "Stara Zagora",
  },
  {
    "value": prefix + "BGR_TGV",
    "en": "Targovishte",
  },
  {
    "value": prefix + "BGR_VAR",
    "cs": "Varna",
    "en": "Varna",
  },
  {
    "value": prefix + "BGR_VTT",
    "en": "Veliko Tarnovo",
  },
  {
    "value": prefix + "BGR_VID",
    "en": "Vidin",
  },
  {
    "value": prefix + "BGR_VRA",
    "en": "Vratsa",
  },
  {
    "value": prefix + "BGR_YAM",
    "en": "Yàmbol",
  },
  {
    "value": prefix + "BDI_BJM",
    "cs": "Bujumbura",
    "en": "Bujumbura",
  },
  {
    "value": prefix + "BHS_FPO",
    "cs": "Freeport",
    "en": "Freeport",
  },
  {
    "value": prefix + "GBR_BRS",
    "cs": "Bristol",
    "en": "Bristol",
  },
  {
    "value": prefix + "CAN_MTR",
    "cs": "Montreal",
    "en": "Montreal",
  },
  {
    "value": prefix + "CAN_NOL",
    "cs": "Niagara-on-the-Lake",
    "en": "Niagara-on-the-Lake",
  },
  {
    "value": prefix + "CAN_OTT",
    "cs": "Ottawa",
    "en": "Ottawa",
  },
  {
    "value": prefix + "CAN_TOR",
    "cs": "Toronto",
    "en": "Toronto",
  },
  {
    "value": prefix + "FRA_DUN",
    "cs": "Verdun",
    "en": "Verdun",
  },
  {
    "value": prefix + "CHE_BSL",
    "cs": "Basilej",
    "en": "Basel",
  },
  {
    "value": prefix + "CHE_BRN",
    "cs": "Bern",
    "en": "Berne",
  },
  {
    "value": prefix + "CHE_CHR",
    "cs": "Chur",
    "en": "Chur",
  },
  {
    "value": prefix + "CHE_GVA",
    "cs": "Ženeva",
    "en": "Geneva",
  },
  {
    "value": prefix + "CHE_INT",
    "cs": "Interlaken",
    "en": "Interlaken",
  },
  {
    "value": prefix + "CHE_LAU",
    "cs": "Lausanne",
    "en": "Lausanne",
  },
  {
    "value": prefix + "CHE_LUG",
    "cs": "Lugano",
    "en": "Lugano",
  },
  {
    "value": prefix + "CHE_LZN",
    "cs": "Luzern",
    "en": "Lucerne",
  },
  {
    "value": prefix + "CHE_QGL",
    "cs": "St Gall",
    "en": "St Gall",
  },
  {
    "value": prefix + "CHE_THU",
    "cs": "Thoune",
    "en": "Thun",
  },
  {
    "value": prefix + "CHE_ZRH",
    "cs": "Curych",
    "en": "Zurich",
  },
  {
    "value": prefix + "CIV_ABJ",
    "cs": "Abidžen",
    "en": "Abidjan",
  },
  {
    "value": prefix + "CHL_CGN",
    "cs": "Cartagena",
    "en": "Cartagena",
  },
  {
    "value": prefix + "CHL_SCL",
    "cs": "Santiago de Chile",
    "en": "Santiago",
  },
  {
    "value": prefix + "CMR_YAO",
    "cs": "Yaoundé",
    "en": "Yaoundé",
  },
  {
    "value": prefix + "CRI_BAI",
    "cs": "Buenos Aires",
    "en": "Buenos Aires",
  },
  {
    "value": prefix + "CYP_NFA",
    "cs": "Nikósie",
    "en": "Nicosia",
  },
  {
    "value": prefix + "CZE_PRG",
    "cs": "Praha",
    "en": "Prague",
  },
  {
    "value": prefix + "DEU_AAH",
    "cs": "Aachen",
    "en": "Aachen",
  },
  {
    "value": prefix + "DEU_AGB",
    "cs": "Augšpurk",
    "en": "Augsburg",
  },
  {
    "value": prefix + "DEU_BAM",
    "cs": "Bamberg",
    "en": "Bamberg",
  },
  {
    "value": prefix + "DEU_BER",
    "cs": "Berlín",
    "en": "Berlin",
  },
  {
    "value": prefix + "DEU_BON",
    "cs": "Bonn",
    "en": "Bonn",
  },
  {
    "value": prefix + "DEU_BBG",
    "cs": "Brandenburg",
    "en": "Brandenburg",
  },
  {
    "value": prefix + "DEU_BWE",
    "cs": "Brunšvik",
    "en": "Brunswick",
  },
  {
    "value": prefix + "DEU_BRE",
    "cs": "Brémy",
    "en": "Bremen",
  },
  {
    "value": prefix + "DEU_COB",
    "cs": "Coburg",
    "en": "Coburg",
  },
  {
    "value": prefix + "DEU_DRS",
    "cs": "Drážďany",
    "en": "Dresden",
  },
  {
    "value": prefix + "DEU_DUI",
    "cs": "Duisburg",
    "en": "Duisburg",
  },
  {
    "value": prefix + "DEU_DUS",
    "cs": "Düsseldorf",
    "en": "Düsseldorf",
  },
  {
    "value": prefix + "DEU_ERF",
    "cs": "Erfurt",
    "en": "Erfurt",
  },
  {
    "value": prefix + "DEU_FRA",
    "cs": "Frankfurt nad Mohanem",
    "en": "Frankfurt am Main",
  },
  {
    "value": prefix + "DEU_FFO",
    "cs": "Frankfurt nad Odrou",
    "en": "Frankfurt (Oder)",
  },
  {
    "value": prefix + "DEU_FBG",
    "cs": "Freiburg im Breisgau",
    "en": "Freiburg im Breisgau",
  },
  {
    "value": prefix + "DEU_GOE",
    "cs": "Göttingen",
    "en": "Göttingen",
  },
  {
    "value": prefix + "DEU_HAM",
    "cs": "Hamburk",
    "en": "Hamburg",
  },
  {
    "value": prefix + "DEU_HAJ",
    "cs": "Hanover",
    "en": "Hanover",
  },
  {
    "value": prefix + "DEU_HEI",
    "cs": "Heidelberg",
    "en": "Heidelberg",
  },
  {
    "value": prefix + "DEU_JEN",
    "cs": "Jena",
    "en": "Jena",
  },
  {
    "value": prefix + "DEU_KLT",
    "cs": "Kaiserslautern",
    "en": "Kaiserslautern",
  },
  {
    "value": prefix + "DEU_KAE",
    "cs": "Karlsruhe",
    "en": "Karlsruhe",
  },
  {
    "value": prefix + "DEU_KLE",
    "cs": "Kleve",
    "en": "Cleves",
  },
  {
    "value": prefix + "DEU_KOB",
    "cs": "Koblenz",
    "en": "Coblenz",
  },
  {
    "value": prefix + "DEU_CGN",
    "cs": "Kolín",
    "en": "Cologne",
  },
  {
    "value": prefix + "DEU_KON",
    "cs": "Kostnice",
    "en": "Konstanz",
  },
  {
    "value": prefix + "DEU_LEJ",
    "cs": "Lipsko",
    "en": "Leipzig",
  },
  {
    "value": prefix + "DEU_LEV",
    "cs": "Leverkusen",
    "en": "Leverkusen",
  },
  {
    "value": prefix + "DEU_LIM",
    "cs": "Limbursko",
    "en": "Limburg",
  },
  {
    "value": prefix + "DEU_LBC",
    "cs": "Lübeck",
    "en": "Lübeck",
  },
  {
    "value": prefix + "DEU_ZAX",
    "cs": "Wittenberg",
    "en": "Wittenberg",
  },
  {
    "value": prefix + "DEU_MAG",
    "cs": "Magdeburg",
    "en": "Magdeburg",
  },
  {
    "value": prefix + "DEU_MAI",
    "cs": "Mainz",
    "en": "Mainz",
  },
  {
    "value": prefix + "DEU_MHG",
    "cs": "Mannheim",
    "en": "Mannheim",
  },
  {
    "value": prefix + "DEU_MAR",
    "cs": "Marburg",
    "en": "Marburg",
  },
  {
    "value": prefix + "DEU_MUC",
    "cs": "Mnichov",
    "en": "Munich",
  },
  {
    "value": prefix + "DEU_NEB",
    "cs": "Neubrandenburg",
    "en": "Neubrandenburg",
  },
  {
    "value": prefix + "DEU_NUE",
    "cs": "Norimberk",
    "en": "Nuremberg",
  },
  {
    "value": prefix + "DEU_POT",
    "cs": "Postupim",
    "en": "Potsdam",
  },
  {
    "value": prefix + "DEU_REG",
    "cs": "Řezno",
    "en": "Regensburg",
  },
  {
    "value": prefix + "DEU_SCN",
    "cs": "Saarbrücken",
    "en": "Saarbrücken",
  },
  {
    "value": prefix + "DEU_SPE",
    "cs": "Špýr",
    "en": "Speyer",
  },
  {
    "value": prefix + "DEU_STR",
    "cs": "Stuttgart",
    "en": "Stuttgart",
  },
  {
    "value": prefix + "DEU_TRI",
    "cs": "Trevír",
    "en": "Trier",
  },
  {
    "value": prefix + "DEU_TUE",
    "cs": "Tübingen",
    "en": "Tübingen",
  },
  {
    "value": prefix + "DEU_WMR",
    "cs": "Výmar",
    "en": "Weimar",
  },
  {
    "value": prefix + "DEU_WUE",
    "cs": "Würzburg",
    "en": "Würzburg",
  },
  {
    "value": prefix + "DJI_JIB",
    "cs": "Džibuti",
    "en": "Djibouti",
  },
  {
    "value": prefix + "DNK_AAR",
    "cs": "Århus",
    "en": "Aarhus",
  },
  {
    "value": prefix + "DNK_HLS",
    "cs": "Helsingør",
    "en": "Helsingør",
  },
  {
    "value": prefix + "DNK_CPH",
    "cs": "Kodaň",
    "en": "Copenhagen",
  },
  {
    "value": prefix + "DZA_ALG",
    "cs": "Alžír",
    "en": "Algiers",
  },
  {
    "value": prefix + "DZA_ORN",
    "cs": "Oran",
    "en": "Oran",
  },
  {
    "value": prefix + "EST_TLL",
    "cs": "Tallin",
    "en": "Tallinn",
  },
  {
    "value": prefix + "EGY_CAI",
    "cs": "Káhira",
    "en": "Cairo",
  },
  {
    "value": prefix + "ESP_ALC",
    "cs": "Alicante",
    "en": "Alicante",
  },
  {
    "value": prefix + "ESP_LEI",
    "cs": "Almería",
    "en": "Almería",
  },
  {
    "value": prefix + "ESP_BCN",
    "cs": "Barcelona",
    "en": "Barcelona",
  },
  {
    "value": prefix + "ESP_BIO",
    "cs": "Bilbao",
    "en": "Bilbao",
  },
  {
    "value": prefix + "ESP_CCS",
    "cs": "Cáceres",
    "en": "Cáceres",
  },
  {
    "value": prefix + "ESP_CAD",
    "cs": "Cádiz",
    "en": "Cádiz",
  },
  {
    "value": prefix + "ESP_CAR",
    "cs": "Cartagena",
    "en": "Cartagena",
  },
  {
    "value": prefix + "ESP_ODB",
    "cs": "Córdoba",
    "en": "Córdoba",
  },
  {
    "value": prefix + "ESP_GRO",
    "cs": "Gerona",
    "en": "Gerona",
  },
  {
    "value": prefix + "ESP_GRX",
    "cs": "Granada",
    "en": "Granada",
  },
  {
    "value": prefix + "ESP_LCG",
    "cs": "La Coruña",
    "en": "Corunna",
  },
  {
    "value": prefix + "ESP_LEN",
    "cs": "León",
    "en": "León",
  },
  {
    "value": prefix + "ESP_LGR",
    "cs": "Logroño",
    "en": "Logroño",
  },
  {
    "value": prefix + "ESP_MAD",
    "cs": "Madrid",
    "en": "Madrid",
  },
  {
    "value": prefix + "ESP_AGP",
    "cs": "Málaga",
    "en": "Malaga",
  },
  {
    "value": prefix + "ESP_MEA",
    "cs": "Mérida",
    "en": "Mérida",
  },
  {
    "value": prefix + "ESP_MJV",
    "cs": "Murcia",
    "en": "Murcia",
  },
  {
    "value": prefix + "ESP_PMI",
    "cs": "Palma de Mallorca",
    "en": "Palma de Mallorca",
  },
  {
    "value": prefix + "ESP_PNA",
    "cs": "Pamplona",
    "en": "Pamplona",
  },
  {
    "value": prefix + "ESP_SLM",
    "cs": "Salamanca",
    "en": "Salamanca",
  },
  {
    "value": prefix + "ESP_EAS",
    "cs": "San Sebastián",
    "en": "San Sebastián",
  },
  {
    "value": prefix + "ESP_SCQ",
    "cs": "Santiago de Compostela",
    "en": "Santiago de Compostela",
  },
  {
    "value": prefix + "ESP_SEG",
    "cs": "Segovia",
    "en": "Segovia",
  },
  {
    "value": prefix + "ESP_SVQ",
    "cs": "Sevilla",
    "en": "Seville",
  },
  {
    "value": prefix + "ESP_TAR",
    "cs": "Tarragona",
    "en": "Tarragona",
  },
  {
    "value": prefix + "ESP_TOL",
    "cs": "Toledo",
    "en": "Toledo",
  },
  {
    "value": prefix + "ESP_TRJ",
    "cs": "Torrejón de Ardoz",
    "en": "Torrejón de Ardoz",
  },
  {
    "value": prefix + "ESP_VLC",
    "cs": "Valencie",
    "en": "Valencia",
  },
  {
    "value": prefix + "ESP_VGO",
    "cs": "Vigo",
    "en": "Vigo",
  },
  {
    "value": prefix + "ESP_ZAZ",
    "cs": "Zaragoza",
    "en": "Saragossa",
  },
  {
    "value": prefix + "ETH_ADD",
    "cs": "Addis Abeba",
    "en": "Addis Ababa",
  },
  {
    "value": prefix + "FIN_TKU",
    "cs": "Turku",
    "en": "Turku",
  },
  {
    "value": prefix + "FIN_POR",
    "cs": "Pori",
    "en": "Pori",
  },
  {
    "value": prefix + "FIN_PRV",
    "cs": "Porvoo",
    "en": "Porvoo",
  },
  {
    "value": prefix + "FIN_ESP",
    "cs": "Espoo",
    "en": "Espoo",
  },
  {
    "value": prefix + "FIN_HMN",
    "cs": "Hamina",
    "en": "Hamina",
  },
  {
    "value": prefix + "FIN_HMY",
    "cs": "Hämeenlinna",
    "en": "Hämeenlinna",
  },
  {
    "value": prefix + "FIN_HEL",
    "cs": "Helsinky",
    "en": "Helsinki",
  },
  {
    "value": prefix + "FIN_HYV",
    "cs": "Hyvinkää",
    "en": "Hyvinkää",
  },
  {
    "value": prefix + "FIN_KAA",
    "cs": "Kaarina",
    "en": "Kaarina",
  },
  {
    "value": prefix + "FIN_KAJ",
    "cs": "Kajaani",
    "en": "Kajaani",
  },
  {
    "value": prefix + "FIN_KKI",
    "cs": "Kirkkonummi",
    "en": "Kirkkonummi",
  },
  {
    "value": prefix + "FIN_KOK",
    "cs": "Koivulahti",
    "en": "Kvevlax",
  },
  {
    "value": prefix + "FIN_KHO",
    "cs": "Mustasaari",
    "en": "Korsholm",
  },
  {
    "value": prefix + "FIN_LHI",
    "cs": "Lahti",
    "en": "Lahti",
  },
  {
    "value": prefix + "FIN_LPP",
    "cs": "Lappeenranta",
    "en": "Lappeenranta",
  },
  {
    "value": prefix + "FIN_LHJ",
    "cs": "Lohja",
    "en": "Lohja",
  },
  {
    "value": prefix + "FIN_MHQ",
    "cs": "Mariehamn",
    "en": "Mariehamn",
  },
  {
    "value": prefix + "FIN_MIK",
    "cs": "Mikkeli",
    "en": "Mikkeli",
  },
  {
    "value": prefix + "FIN_SVL",
    "cs": "Sipoo",
    "en": "Sipoo",
  },
  {
    "value": prefix + "FIN_UKI",
    "cs": "Uusikaupunki",
    "en": "Uusikaupunki",
  },
  {
    "value": prefix + "FIN_OLU",
    "cs": "Oulu",
    "en": "Oulu",
  },
  {
    "value": prefix + "FIN_SIP",
    "cs": "Savonlinna",
    "en": "Savonlinna",
  },
  {
    "value": prefix + "FIN_TMP",
    "cs": "Tampere",
    "en": "Tampere",
  },
  {
    "value": prefix + "FIN_TAI",
    "cs": "Tammisaari",
    "en": "Ekenäs",
  },
  {
    "value": prefix + "FIN_TUU",
    "cs": "Tuusula",
    "en": "Tuusula",
  },
  {
    "value": prefix + "FIN_VAA",
    "cs": "Vaasa",
    "en": "Vaasa",
  },
  {
    "value": prefix + "FIN_VAT",
    "cs": "Vantaa",
    "en": "Vantaa",
  },
  {
    "value": prefix + "FJI_SUV",
    "cs": "Suva",
    "en": "Suva",
  },
  {
    "value": prefix + "FSM_PNI",
    "cs": "Pohnpei",
    "en": "Pohnpei",
  },
  {
    "value": prefix + "FRO_TOR",
    "cs": "Thorshaven",
    "en": "Tórshavn",
  },
  {
    "value": prefix + "FRA_AJA",
    "cs": "Ajaccio",
    "en": "Ajaccio",
  },
  {
    "value": prefix + "FRA_ANE",
    "cs": "Angers",
    "en": "Angers",
  },
  {
    "value": prefix + "FRA_ANG",
    "cs": "Angoulême",
    "en": "Angoulême",
  },
  {
    "value": prefix + "FRA_ARR",
    "cs": "Arras",
    "en": "Arras",
  },
  {
    "value": prefix + "FRA_AVN",
    "cs": "Avignon",
    "en": "Avignon",
  },
  {
    "value": prefix + "FRA_BAY",
    "cs": "Bayonne",
    "en": "Bayonne",
  },
  {
    "value": prefix + "FRA_BSN",
    "cs": "Besançon",
    "en": "Besançon",
  },
  {
    "value": prefix + "FRA_BOD",
    "cs": "Bordeaux",
    "en": "Bordeaux",
  },
  {
    "value": prefix + "FRA_BOU",
    "cs": "Bourges",
    "en": "Bourges",
  },
  {
    "value": prefix + "FRA_CEQ",
    "cs": "Cannes",
    "en": "Cannes",
  },
  {
    "value": prefix + "FRA_CCF",
    "cs": "Carcassonne",
    "en": "Carcassonne",
  },
  {
    "value": prefix + "FRA_CMF",
    "cs": "Chambéry",
    "en": "Chambéry",
  },
  {
    "value": prefix + "FRA_CER",
    "cs": "Cherbourg",
    "en": "Cherbourg",
  },
  {
    "value": prefix + "FRA_CNG",
    "cs": "Cognac",
    "en": "Cognac",
  },
  {
    "value": prefix + "FRA_QCR",
    "cs": "Corte",
    "en": "Corte",
  },
  {
    "value": prefix + "FRA_DIJ",
    "cs": "Dijon",
    "en": "Dijon",
  },
  {
    "value": prefix + "FRA_DKK",
    "cs": "Dunkerque",
    "en": "Dunkirk",
  },
  {
    "value": prefix + "FRA_LEH",
    "cs": "Le Havre",
    "en": "Le Havre",
  },
  {
    "value": prefix + "FRA_LLE",
    "cs": "Lille",
    "en": "Lille",
  },
  {
    "value": prefix + "FRA_LIO",
    "cs": "Lyon",
    "en": "Lyon",
  },
  {
    "value": prefix + "FRA_MRS",
    "cs": "Marseilles",
    "en": "Marseille",
  },
  {
    "value": prefix + "FRA_MZM",
    "cs": "Mety",
    "en": "Metz",
  },
  {
    "value": prefix + "FRA_MLH",
    "cs": "Mylhúzy",
    "en": "Mulhouse",
  },
  {
    "value": prefix + "FRA_NAR",
    "cs": "Narbonne",
    "en": "Narbonne",
  },
  {
    "value": prefix + "FRA_NCE",
    "cs": "Nice",
    "en": "Nice",
  },
  {
    "value": prefix + "FRA_FNI",
    "cs": "Nîmes",
    "en": "Nîmes",
  },
  {
    "value": prefix + "FRA_ORR",
    "cs": "Orléans",
    "en": "Orléans",
  },
  {
    "value": prefix + "FRA_PAR",
    "cs": "Paříž",
    "en": "Paris",
  },
  {
    "value": prefix + "FRA_PGF",
    "cs": "Perpignan",
    "en": "Perpignan",
  },
  {
    "value": prefix + "FRA_RHE",
    "cs": "Remeš",
    "en": "Reims",
  },
  {
    "value": prefix + "FRA_URO",
    "cs": "Rouen",
    "en": "Rouen",
  },
  {
    "value": prefix + "FRA_ZJZ",
    "cs": "Saint-Jean-de-Luz",
    "en": "Saint-Jean-de-Luz",
  },
  {
    "value": prefix + "FRA_SXB",
    "cs": "Štrasburk",
    "en": "Strasbourg",
  },
  {
    "value": prefix + "FRA_TLN",
    "cs": "Toulon",
    "en": "Toulon",
  },
  {
    "value": prefix + "FRA_TLS",
    "cs": "Toulouse",
    "en": "Toulouse",
  },
  {
    "value": prefix + "FRA_VAL",
    "cs": "Valenciennes",
    "en": "Valenciennes",
  },
  {
    "value": prefix + "FRA_VIE",
    "cs": "Vienne",
    "en": "Vienne",
  },
  {
    "value": prefix + "GAB_LBV",
    "cs": "Libreville",
    "en": "Libreville",
  },
  {
    "value": prefix + "GBR_ABD",
    "cs": "Aberdeen",
    "en": "Aberdeen",
  },
  {
    "value": prefix + "GBR_BEL",
    "cs": "Belfast",
    "en": "Belfast",
  },
  {
    "value": prefix + "GBR_BHM",
    "cs": "Birmingham",
    "en": "Birmingham",
  },
  {
    "value": prefix + "GBR_BLK",
    "cs": "Blackpool",
    "en": "Blackpool",
  },
  {
    "value": prefix + "GBR_CMG",
    "cs": "Cambridge",
    "en": "Cambridge",
  },
  {
    "value": prefix + "GBR_CNB",
    "cs": "Canterbury",
    "en": "Canterbury",
  },
  {
    "value": prefix + "GBR_CDF",
    "cs": "Cardiff",
    "en": "Cardiff",
  },
  {
    "value": prefix + "GBR_DVR",
    "cs": "Dover",
    "en": "Dover",
  },
  {
    "value": prefix + "GBR_EDI",
    "cs": "Edinburgh",
    "en": "Edinburgh",
  },
  {
    "value": prefix + "GBR_GLW",
    "cs": "Glasgow",
    "en": "Glasgow",
  },
  {
    "value": prefix + "GBR_HFX",
    "cs": "Halifax",
    "en": "Halifax",
  },
  {
    "value": prefix + "GBR_LIV",
    "cs": "Liverpool",
    "en": "Liverpool",
  },
  {
    "value": prefix + "GBR_LON",
    "cs": "Londýn",
    "en": "London",
  },
  {
    "value": prefix + "GBR_MNC",
    "cs": "Manchester",
    "en": "Manchester",
  },
  {
    "value": prefix + "GBR_NTG",
    "cs": "Nottingham",
    "en": "Nottingham",
  },
  {
    "value": prefix + "GBR_OXF",
    "cs": "Oxford",
    "en": "Oxford",
  },
  {
    "value": prefix + "GBR_SLS",
    "cs": "Salisbury",
    "en": "Salisbury",
  },
  {
    "value": prefix + "GBR_SOU",
    "cs": "Southampton",
    "en": "Southampton",
  },
  {
    "value": prefix + "GBR_WHG",
    "cs": "Washington",
    "en": "Washington",
  },
  {
    "value": prefix + "GBR_YRK",
    "cs": "York",
    "en": "York",
  },
  {
    "value": prefix + "GEO_TBS",
    "cs": "Tbilisi",
    "en": "Tbilisi",
  },
  {
    "value": prefix + "GUF_CAY",
    "cs": "Cayenne",
    "en": "Cayenne",
  },
  {
    "value": prefix + "GHA_ACC",
    "cs": "Accra",
    "en": "Accra",
  },
  {
    "value": prefix + "GIB_GIB",
    "cs": "Gibraltar",
    "en": "Gibraltar",
  },
  {
    "value": prefix + "GIN_CKY",
    "cs": "Conakry",
    "en": "Conakry",
  },
  {
    "value": prefix + "GNQ_SSG",
    "cs": "Malabo",
    "en": "Malabo",
  },
  {
    "value": prefix + "GRC_GAH",
    "cs": "Aigaleo",
    "en": "Aigaleo",
  },
  {
    "value": prefix + "GRC_ANI",
    "cs": "Agios Nikolaos",
    "en": "Agios Nikolaos",
  },
  {
    "value": prefix + "GRC_AGQ",
    "cs": "Agrinio",
    "en": "Agrinio",
  },
  {
    "value": prefix + "GRC_AXD",
    "cs": "Alexandroupolis",
    "en": "Alexandroupoli",
  },
  {
    "value": prefix + "GRC_ASI",
    "cs": "Marousi",
    "en": "Marousi",
  },
  {
    "value": prefix + "GRC_ABO",
    "cs": "Ampelokipoi",
    "en": "Ampelokipoi",
  },
  {
    "value": prefix + "GRC_ARG",
    "en": "Argos",
  },
  {
    "value": prefix + "GRC_ARM",
    "cs": "Argostoli",
    "en": "Argostoli",
  },
  {
    "value": prefix + "GRC_ART",
    "cs": "Arta",
    "en": "Arta",
  },
  {
    "value": prefix + "GRC_ATH",
    "cs": "Atény",
    "en": "Athens",
  },
  {
    "value": prefix + "GRC_CHQ",
    "cs": "Chania",
    "en": "Chania",
  },
  {
    "value": prefix + "GRC_QKG",
    "cs": "Chalkida",
    "en": "Chalkida",
  },
  {
    "value": prefix + "GRC_JKH",
    "cs": "Kios",
    "en": "Chios",
  },
  {
    "value": prefix + "GRC_CRG",
    "cs": "Korint",
    "en": "Corinth",
  },
  {
    "value": prefix + "GRC_DRM",
    "cs": "Drama",
    "en": "Drama",
  },
  {
    "value": prefix + "GRC_EDE",
    "cs": "Edessa",
    "en": "Edessa",
  },
  {
    "value": prefix + "GRC_FIA",
    "cs": "Florina",
    "en": "Florina",
  },
  {
    "value": prefix + "GRC_HER",
    "cs": "Heraklion",
    "en": "Heraklion",
  },
  {
    "value": prefix + "GRC_IOA",
    "cs": "Ioannina",
    "en": "Ioannina",
  },
  {
    "value": prefix + "GRC_KLX",
    "cs": "Kalamata",
    "en": "Kalamata",
  },
  {
    "value": prefix + "GRC_KLA",
    "cs": "Kallithea",
    "en": "Kallithea",
  },
  {
    "value": prefix + "GRC_KRD",
    "cs": "Karditsa",
    "en": "Karditsa",
  },
  {
    "value": prefix + "GRC_KSS",
    "cs": "Karpenisi",
    "en": "Karpenisi",
  },
  {
    "value": prefix + "GRC_KSO",
    "cs": "Kastoria",
    "en": "Kastoria",
  },
  {
    "value": prefix + "GRC_KEI",
    "cs": "Katerini",
    "en": "Katerini",
  },
  {
    "value": prefix + "GRC_KVA",
    "cs": "Kavala",
    "en": "Kavala",
  },
  {
    "value": prefix + "GRC_KTS",
    "cs": "Keratsini",
    "en": "Keratsini",
  },
  {
    "value": prefix + "GRC_CFU",
    "cs": "Korfu",
    "en": "Corfu",
  },
  {
    "value": prefix + "GRC_KFS",
    "cs": "Kifisia",
    "en": "Kifisia",
  },
  {
    "value": prefix + "GRC_KKZ",
    "cs": "Kilkis",
    "en": "Kilkis",
  },
  {
    "value": prefix + "GRC_KOM",
    "cs": "Komotini",
    "en": "Komotini",
  },
  {
    "value": prefix + "GRC_KYD",
    "cs": "Korydallos",
    "en": "Korydallos",
  },
  {
    "value": prefix + "GRC_KZI",
    "cs": "Kozani",
    "en": "Kozani",
  },
  {
    "value": prefix + "GRC_LAM",
    "cs": "Lamia",
    "en": "Lamia",
  },
  {
    "value": prefix + "GRC_LRA",
    "cs": "Lárisa",
    "en": "Larissa",
  },
  {
    "value": prefix + "GRC_LEA",
    "en": "Livadia",
  },
  {
    "value": prefix + "GRC_LOU",
    "cs": "Loutraki",
    "en": "Loutraki",
  },
  {
    "value": prefix + "GRC_MEL",
    "cs": "Mesolongi",
    "en": "Mesolonghi",
  },
  {
    "value": prefix + "GRC_JMK",
    "cs": "Mykonos",
    "en": "Mykonos",
  },
  {
    "value": prefix + "GRC_MJT",
    "cs": "Mytilene",
    "en": "Mytilene",
  },
  {
    "value": prefix + "GRC_NAF",
    "cs": "Navplio",
    "en": "Nafplio",
  },
  {
    "value": prefix + "GRC_NAR",
    "cs": "Nea Artaki",
    "en": "Nea Artaki",
  },
  {
    "value": prefix + "GRC_NIK",
    "cs": "Nikaia",
    "en": "Nicaea",
  },
  {
    "value": prefix + "GRC_PPG",
    "cs": "Pallini",
    "en": "Pallini",
  },
  {
    "value": prefix + "GRC_GPA",
    "cs": "Pátra",
    "en": "Patras",
  },
  {
    "value": prefix + "GRC_PRI",
    "cs": "Peristeri",
    "en": "Peristeri",
  },
  {
    "value": prefix + "GRC_PIR",
    "cs": "Piraeus",
    "en": "Piraeus",
  },
  {
    "value": prefix + "GRC_PYR",
    "cs": "Pyrgos",
    "en": "Pyrgos",
  },
  {
    "value": prefix + "GRC_RET",
    "cs": "Rethimno",
    "en": "Rethymno",
  },
  {
    "value": prefix + "GRC_RHO",
    "cs": "Rhodos",
    "en": "Rhodes",
  },
  {
    "value": prefix + "GRC_SNK",
    "cs": "Soluň",
    "en": "Thessaloniki",
  },
  {
    "value": prefix + "GRC_SMI",
    "cs": "Samos",
    "en": "Samos",
  },
  {
    "value": prefix + "GRC_SMT",
    "cs": "Skimatari",
    "en": "Schimatari",
  },
  {
    "value": prefix + "GRC_SPA",
    "cs": "Sparta",
    "en": "Sparti",
  },
  {
    "value": prefix + "GRC_JSY",
    "cs": "Syros",
    "en": "Syros",
  },
  {
    "value": prefix + "GRC_TIN",
    "cs": "Tinos",
    "en": "Tinos",
  },
  {
    "value": prefix + "GRC_TRI",
    "cs": "Trikala",
    "en": "Trikala",
  },
  {
    "value": prefix + "GRC_TRP",
    "cs": "Tripoli",
    "en": "Tripoli",
  },
  {
    "value": prefix + "GRC_VER",
    "cs": "Veroia",
    "en": "Veroia",
  },
  {
    "value": prefix + "GRC_VOL",
    "cs": "Volos",
    "en": "Volos",
  },
  {
    "value": prefix + "GRC_XAN",
    "cs": "Xanthi",
    "en": "Xanthi",
  },
  {
    "value": prefix + "GRC_XYL",
    "cs": "Xylokastro",
    "en": "Xylokastro",
  },
  {
    "value": prefix + "GRC_ZTH",
    "cs": "Zákynthos",
    "en": "Zakynthos",
  },
  {
    "value": prefix + "HRV_DBV",
    "cs": "Dubrovník",
    "en": "Dubrovnik",
  },
  {
    "value": prefix + "HRV_RJK",
    "cs": "Rijeka",
    "en": "Rijeka",
  },
  {
    "value": prefix + "HRV_ZAD",
    "cs": "Zadar",
    "en": "Zadar",
  },
  {
    "value": prefix + "HRV_ZAG",
    "cs": "Záhřeb",
    "en": "Zagreb",
  },
  {
    "value": prefix + "HUN_BUD",
    "cs": "Budapešť",
    "en": "Budapest",
  },
  {
    "value": prefix + "HUN_PEC",
    "cs": "Pécs",
    "en": "Pécs",
  },
  {
    "value": prefix + "IDN_DPS",
    "cs": "Denpasar",
    "en": "Denpasar",
  },
  {
    "value": prefix + "IDN_JKT",
    "cs": "Jakarta",
    "en": "Jakarta",
  },
  {
    "value": prefix + "IRL_DFT",
    "cs": "Dublin Ferryport terminals",
    "en": "Dublin Ferryport terminals",
  },
  {
    "value": prefix + "IRL_DUB",
    "cs": "Dublin",
    "en": "Dublin",
  },
  {
    "value": prefix + "BHS_NAS",
    "cs": "Nassau",
    "en": "Nassau",
  },
  {
    "value": prefix + "IND_ICD",
    "cs": "Nové Dillí",
    "en": "New Delhi",
  },
  {
    "value": prefix + "ISL_REY",
    "cs": "Reykjavík",
    "en": "Reykjavik",
  },
  {
    "value": prefix + "ITA_AGR",
    "cs": "Agrigento",
    "en": "Agrigento",
  },
  {
    "value": prefix + "ITA_AOI",
    "cs": "Ancona",
    "en": "Ancona",
  },
  {
    "value": prefix + "ITA_AOT",
    "cs": "Aosta",
    "en": "Aosta",
  },
  {
    "value": prefix + "ITA_BRI",
    "cs": "Bari",
    "en": "Bari",
  },
  {
    "value": prefix + "ITA_BEN",
    "cs": "Benevento",
    "en": "Benevento",
  },
  {
    "value": prefix + "ITA_BGO",
    "cs": "Bergamo",
    "en": "Bergamo",
  },
  {
    "value": prefix + "ITA_BLQ",
    "cs": "Boloňa",
    "en": "Bologna",
  },
  {
    "value": prefix + "ITA_BZO",
    "cs": "Bolzano",
    "en": "Bolzano",
  },
  {
    "value": prefix + "ITA_BEK",
    "cs": "Bruneck",
    "en": "Bruneck",
  },
  {
    "value": prefix + "ITA_CPU",
    "cs": "Capua",
    "en": "Capua",
  },
  {
    "value": prefix + "ITA_CRA",
    "cs": "Carrara",
    "en": "Carrara",
  },
  {
    "value": prefix + "ITA_CST",
    "cs": "Caserta",
    "en": "Caserta",
  },
  {
    "value": prefix + "ITA_CTA",
    "cs": "Katánie",
    "en": "Catania",
  },
  {
    "value": prefix + "ITA_OMO",
    "cs": "Como",
    "en": "Como",
  },
  {
    "value": prefix + "ITA_CUN",
    "cs": "Cuneo",
    "en": "Cuneo",
  },
  {
    "value": prefix + "ITA_FRR",
    "cs": "Ferrara",
    "en": "Ferrara",
  },
  {
    "value": prefix + "ITA_FLR",
    "cs": "Florencie",
    "en": "Florence",
  },
  {
    "value": prefix + "ITA_GOA",
    "cs": "Janov",
    "en": "Genoa",
  },
  {
    "value": prefix + "ITA_GZA",
    "cs": "Gorizia",
    "en": "Gorizia",
  },
  {
    "value": prefix + "ITA_ISR",
    "cs": "Ispra",
    "en": "Ispra",
  },
  {
    "value": prefix + "ITA_LVE",
    "cs": "Laives",
    "en": "Laives",
  },
  {
    "value": prefix + "ITA_LIV",
    "cs": "Livorno",
    "en": "Leghorn",
  },
  {
    "value": prefix + "ITA_MAN",
    "cs": "Mantova",
    "en": "Mantova",
  },
  {
    "value": prefix + "ITA_MEN",
    "cs": "Merano",
    "en": "Merano",
  },
  {
    "value": prefix + "ITA_MSN",
    "cs": "Mesina",
    "en": "Messina",
  },
  {
    "value": prefix + "ITA_MIL",
    "cs": "Milán",
    "en": "Milan",
  },
  {
    "value": prefix + "ITA_MOD",
    "cs": "Modena",
    "en": "Modena",
  },
  {
    "value": prefix + "ITA_MGF",
    "cs": "Monguelfo-Tesido",
    "en": "Monguelfo-Tesido",
  },
  {
    "value": prefix + "ITA_NAP",
    "cs": "Neapol",
    "en": "Naples",
  },
  {
    "value": prefix + "ITA_NVR",
    "cs": "Novara",
    "en": "Novara",
  },
  {
    "value": prefix + "ITA_ORA",
    "cs": "Ora",
    "en": "Ora",
  },
  {
    "value": prefix + "ITA_SIT",
    "cs": "Ostia",
    "en": "Ostia",
  },
  {
    "value": prefix + "ITA_PDA",
    "cs": "Padova",
    "en": "Padua",
  },
  {
    "value": prefix + "ITA_PMO",
    "cs": "Palermo",
    "en": "Palermo",
  },
  {
    "value": prefix + "ITA_PMF",
    "cs": "Parma",
    "en": "Parma",
  },
  {
    "value": prefix + "ITA_PAV",
    "cs": "Pavia",
    "en": "Pavia",
  },
  {
    "value": prefix + "ITA_PSR",
    "cs": "Pescara",
    "en": "Pescara",
  },
  {
    "value": prefix + "ITA_PMP",
    "cs": "Pompeje",
    "en": "Pompeii",
  },
  {
    "value": prefix + "ITA_RGA",
    "cs": "Ragusa",
    "en": "Ragusa",
  },
  {
    "value": prefix + "ITA_RAN",
    "cs": "Ravenna",
    "en": "Ravenna",
  },
  {
    "value": prefix + "ITA_REG",
    "cs": "Reggio Calabria",
    "en": "Reggio Calabria",
  },
  {
    "value": prefix + "ITA_RNE",
    "cs": "Reggio Emilia",
    "en": "Reggio Emilia",
  },
  {
    "value": prefix + "ITA_RMI",
    "cs": "Rimini",
    "en": "Rimini",
  },
  {
    "value": prefix + "ITA_RVL",
    "cs": "Rivoli",
    "en": "Rivoli",
  },
  {
    "value": prefix + "ITA_ROM",
    "cs": "Řím",
    "en": "Rome",
  },
  {
    "value": prefix + "ITA_SAL",
    "cs": "Salerno",
    "en": "Salerno",
  },
  {
    "value": prefix + "ITA_SRE",
    "cs": "San Remo",
    "en": "San Remo",
  },
  {
    "value": prefix + "ITA_SVN",
    "cs": "Savona",
    "en": "Savona",
  },
  {
    "value": prefix + "ITA_SNA",
    "cs": "Siena",
    "en": "Sienna",
  },
  {
    "value": prefix + "ITA_SIR",
    "cs": "Syrakusy",
    "en": "Syracuse",
  },
  {
    "value": prefix + "ITA_TAR",
    "cs": "Taranto",
    "en": "Taranto",
  },
  {
    "value": prefix + "ITA_TIV",
    "cs": "Tivoli",
    "en": "Tivoli",
  },
  {
    "value": prefix + "ITA_TRT",
    "cs": "Trident",
    "en": "Trento",
  },
  {
    "value": prefix + "ITA_TRN",
    "cs": "Turín",
    "en": "Turin",
  },
  {
    "value": prefix + "ITA_TRV",
    "cs": "Treviso",
    "en": "Treviso",
  },
  {
    "value": prefix + "ITA_TRS",
    "cs": "Terst",
    "en": "Trieste",
  },
  {
    "value": prefix + "ITA_VAR",
    "cs": "Varese",
    "en": "Varese",
  },
  {
    "value": prefix + "ITA_VCE",
    "cs": "Benátky",
    "en": "Venice",
  },
  {
    "value": prefix + "ITA_VEN",
    "cs": "Ventimiglia",
    "en": "Ventimiglia",
  },
  {
    "value": prefix + "ITA_VRN",
    "cs": "Verona",
    "en": "Verona",
  },
  {
    "value": prefix + "JAM_KIN",
    "cs": "Kingston",
    "en": "Kingston",
  },
  {
    "value": prefix + "JAM_MBJ",
    "cs": "Záliv Montego",
    "en": "Montego Bay",
  },
  {
    "value": prefix + "JOR_AMM",
    "cs": "Ammán",
    "en": "Amman",
  },
  {
    "value": prefix + "KHM_PNH",
    "cs": "Phnompenh",
    "en": "Phnom Penh",
  },
  {
    "value": prefix + "LBN_BEY",
    "cs": "Bejrút",
    "en": "Beirut",
  },
  {
    "value": prefix + "LKA_CMB",
    "cs": "Kolombo",
    "en": "Colombo",
  },
  {
    "value": prefix + "LKA_SRJ",
    "cs": "Šrí Džajavardanapura Kotte",
    "en": "Sri Jayawardenapura Kotte",
  },
  {
    "value": prefix + "LBR_MLW",
    "cs": "Monrovia",
    "en": "Monrovia",
  },
  {
    "value": prefix + "LTU_VNO",
    "cs": "Vilnius",
    "en": "Vilnius",
  },
  {
    "value": prefix + "LUX_DIE",
    "cs": "Diekirch",
    "en": "Diekirch",
  },
  {
    "value": prefix + "LUX_EZT",
    "cs": "Esch-sur-Alzette",
    "en": "Esch-sur-Alzette",
  },
  {
    "value": prefix + "LUX_LUX",
    "cs": "Lucemburk",
    "en": "Luxembourg",
  },
  {
    "value": prefix + "LVA_RIX",
    "cs": "Riga",
    "en": "Riga",
  },
  {
    "value": prefix + "LBY_TIP",
    "cs": "Tripolis",
    "en": "Tripoli",
  },
  {
    "value": prefix + "MAR_RAK",
    "cs": "Marrákeš",
    "en": "Marrakesh",
  },
  {
    "value": prefix + "MAR_RBA",
    "cs": "Rabat",
    "en": "Rabat",
  },
  {
    "value": prefix + "MAR_TNG",
    "cs": "Tanger",
    "en": "Tangier",
  },
  {
    "value": prefix + "MDG_TNR",
    "cs": "Antananarivo",
    "en": "Antananarivo",
  },
  {
    "value": prefix + "MKD_SKP",
    "cs": "Skopje",
    "en": "Skopje",
  },
  {
    "value": prefix + "MLI_BKO",
    "cs": "Bamako",
    "en": "Bamako",
  },
  {
    "value": prefix + "MLI_TOM",
    "cs": "Timbuktu",
    "en": "Timbuktu",
  },
  {
    "value": prefix + "MNG_ULN",
    "cs": "Ulánbátar",
    "en": "Ulaanbaatar",
  },
  {
    "value": prefix + "MRT_NKC",
    "cs": "Nouakchott",
    "en": "Nouakchott",
  },
  {
    "value": prefix + "MLT_MLA",
    "cs": "Valletta",
    "en": "Valletta",
  },
  {
    "value": prefix + "MUS_PLU",
    "cs": "Port Louis",
    "en": "Port Louis",
  },
  {
    "value": prefix + "MOZ_MPM",
    "cs": "Maputo",
    "en": "Maputo",
  },
  {
    "value": prefix + "NAM_WDH",
    "cs": "Windhoek",
    "en": "Windhoek",
  },
  {
    "value": prefix + "NGA_ABV",
    "cs": "Abuja",
    "en": "Abuja",
  },
  {
    "value": prefix + "NGA_KAN",
    "cs": "Kano",
    "en": "Kano",
  },
  {
    "value": prefix + "NGA_LOS",
    "cs": "Lagos",
    "en": "Lagos",
  },
  {
    "value": prefix + "NLD_AMS",
    "cs": "Amsterdam",
    "en": "Amsterdam",
  },
  {
    "value": prefix + "NLD_ARN",
    "cs": "Arnhem",
    "en": "Arnhem",
  },
  {
    "value": prefix + "NLD_EIN",
    "cs": "Eindhoven",
    "en": "Eindhoven",
  },
  {
    "value": prefix + "NLD_GRQ",
    "cs": "Groningen",
    "en": "Groningen",
  },
  {
    "value": prefix + "NLD_LID",
    "cs": "Leiden",
    "en": "Leiden",
  },
  {
    "value": prefix + "NLD_MST",
    "cs": "Maastricht",
    "en": "Maastricht",
  },
  {
    "value": prefix + "NLD_NIJ",
    "cs": "Nijmegen",
    "en": "Nijmegen",
  },
  {
    "value": prefix + "NLD_PET",
    "en": "Petten",
  },
  {
    "value": prefix + "NLD_RTM",
    "cs": "Rotterdam",
    "en": "Rotterdam",
  },
  {
    "value": prefix + "NLD_HAG",
    "cs": "Haag",
    "en": "The Hague",
  },
  {
    "value": prefix + "NLD_HTB",
    "cs": "S-Hertogenbosch",
    "en": "'s-Hertogenbosch",
  },
  {
    "value": prefix + "NLD_UTC",
    "cs": "Utrecht",
    "en": "Utrecht",
  },
  {
    "value": prefix + "NLD_VLI",
    "cs": "Vlissingen",
    "en": "Vlissingen",
  },
  {
    "value": prefix + "NOR_LLH",
    "cs": "Lillehammer",
    "en": "Lillehammer",
  },
  {
    "value": prefix + "NOR_OSL",
    "cs": "Oslo",
    "en": "Oslo",
  },
  {
    "value": prefix + "NOR_SVG",
    "cs": "Stavanger",
    "en": "Stavanger",
  },
  {
    "value": prefix + "NPL_KTM",
    "cs": "Káthmándú",
    "en": "Kathmandu",
  },
  {
    "value": prefix + "PAN_PAC",
    "cs": "Panama",
    "en": "Panama City",
  },
  {
    "value": prefix + "PAK_ISB",
    "cs": "Islámábád",
    "en": "Islamabad",
  },
  {
    "value": prefix + "POL_GDN",
    "cs": "Gdaňsk",
    "en": "Gdansk",
  },
  {
    "value": prefix + "POL_KRK",
    "cs": "Krakov",
    "en": "Krakow",
  },
  {
    "value": prefix + "POL_SZZ",
    "cs": "Štětín",
    "en": "Szczecin",
  },
  {
    "value": prefix + "POL_WAW",
    "cs": "Varšava",
    "en": "Warsaw",
  },
  {
    "value": prefix + "POL_WRO",
    "cs": "Vratislav",
    "en": "Wrocław",
  },
  {
    "value": prefix + "PRT_BGC",
    "cs": "Bragança",
    "en": "Braganza",
  },
  {
    "value": prefix + "PRT_EVR",
    "cs": "Évora",
    "en": "Évora",
  },
  {
    "value": prefix + "PRT_FNC",
    "cs": "Funchal",
    "en": "Funchal",
  },
  {
    "value": prefix + "PRT_LOS",
    "cs": "Lagos",
    "en": "Lagos",
  },
  {
    "value": prefix + "PRT_LIS",
    "cs": "Lisabon",
    "en": "Lisbon",
  },
  {
    "value": prefix + "PRT_OPO",
    "cs": "Porto",
    "en": "Porto",
  },
  {
    "value": prefix + "ROU_BUH",
    "cs": "Bukurešť",
    "en": "Bucharest",
  },
  {
    "value": prefix + "ROU_SBZ",
    "cs": "Sibiu",
    "en": "Sibiu",
  },
  {
    "value": prefix + "ROU_TCE",
    "cs": "Tulcea",
    "en": "Tulcea",
  },
  {
    "value": prefix + "SRB_BEG",
    "cs": "Bělehrad",
    "en": "Belgrade",
  },
  {
    "value": prefix + "RUS_MOW",
    "cs": "Moskva",
    "en": "Moscow",
  },
  {
    "value": prefix + "RUS_LED",
    "cs": "Petrohrad",
    "en": "St Petersburg",
  },
  {
    "value": prefix + "RUS_SOC",
    "cs": "Soči",
    "en": "Sochi",
  },
  {
    "value": prefix + "RWA_KGL",
    "cs": "Kigali",
    "en": "Kigali",
  },
  {
    "value": prefix + "SWE_GOT",
    "cs": "Göteborg",
    "en": "Gothenburg",
  },
  {
    "value": prefix + "SWE_LLA",
    "cs": "Luleå",
    "en": "Luleå",
  },
  {
    "value": prefix + "SWE_MMA",
    "cs": "Malmö",
    "en": "Malmö",
  },
  {
    "value": prefix + "SWE_OVE",
    "cs": "Övertorneå",
    "en": "Oevertonea",
  },
  {
    "value": prefix + "SWE_PIT",
    "cs": "Piteå",
    "en": "Piteå",
  },
  {
    "value": prefix + "SWE_STO",
    "cs": "Stockholm",
    "en": "Stockholm",
  },
  {
    "value": prefix + "SWE_TBY",
    "cs": "Täby",
    "en": "Taeby",
  },
  {
    "value": prefix + "SWE_UME",
    "cs": "Umeå",
    "en": "Umeå",
  },
  {
    "value": prefix + "SWE_UPP",
    "cs": "Uppsala",
    "en": "Uppsala",
  },
  {
    "value": prefix + "SGP_SIN",
    "cs": "Singapur",
    "en": "Singapore",
  },
  {
    "value": prefix + "SVN_BLE",
    "cs": "Bled",
    "en": "Bled",
  },
  {
    "value": prefix + "SVN_LJU",
    "cs": "Lublaň",
    "en": "Ljubljana",
  },
  {
    "value": prefix + "SVK_BTS",
    "cs": "Bratislava",
    "en": "Bratislava",
  },
  {
    "value": prefix + "SMR_SAI",
    "cs": "San Marino",
    "en": "San Marino",
  },
  {
    "value": prefix + "SEN_DKR",
    "cs": "Dakar",
    "en": "Dakar",
  },
  {
    "value": prefix + "SOM_MGQ",
    "cs": "Mogadišo",
    "en": "Mogadishu",
  },
  {
    "value": prefix + "SLV_SAL",
    "cs": "San Salvador",
    "en": "San Salvador",
  },
  {
    "value": prefix + "SYR_DAM",
    "cs": "Damašek",
    "en": "Damascus",
  },
  {
    "value": prefix + "TCD_NDJ",
    "cs": "Ndžamena",
    "en": "N’Djamena",
  },
  {
    "value": prefix + "TGO_LFW",
    "cs": "Lomé",
    "en": "Lomé",
  },
  {
    "value": prefix + "THA_BKK",
    "cs": "Bangkok",
    "en": "Bangkok",
  },
  {
    "value": prefix + "THA_PYX",
    "cs": "Pattaya",
    "en": "Pattaya",
  },
  {
    "value": prefix + "TUN_TUN",
    "cs": "Tunis",
    "en": "Tunis",
  },
  {
    "value": prefix + "TUR_ANK",
    "cs": "Ankara",
    "en": "Ankara",
  },
  {
    "value": prefix + "TUR_IST",
    "cs": "Istanbul",
    "en": "Istanbul",
  },
  {
    "value": prefix + "TUR_MRM",
    "cs": "Marmaris",
    "en": "Marmaris",
  },
  {
    "value": prefix + "TUR_SFQ",
    "cs": "Sanliurfa",
    "en": "Urfa",
  },
  {
    "value": prefix + "UKR_IEV",
    "cs": "Kyjev",
    "en": "Kyiv",
  },
  {
    "value": prefix + "UKR_YAL",
    "cs": "Jalta",
    "en": "Yalta",
  },
  {
    "value": prefix + "URY_MVD",
    "cs": "Montevideo",
    "en": "Montevideo",
  },
  {
    "value": prefix + "UZB_TAS",
    "cs": "Taškent",
    "en": "Tashkent",
  },
  {
    "value": prefix + "ZAF_CPT",
    "cs": "Kapské Město",
    "en": "Cape Town",
  },
  {
    "value": prefix + "ZAF_PAA",
    "cs": "Paarl",
    "en": "Paarl",
  },
  {
    "value": prefix + "ZAF_PRY",
    "cs": "Pretoria",
    "en": "Pretoria",
  },
  {
    "value": prefix + "ZMB_LUN",
    "cs": "Lusaka",
    "en": "Lusaka",
  },
  {
    "value": prefix + "ZWE_HRE",
    "cs": "Harare",
    "en": "Harare",
  },
  {
    "value": prefix + "GRC_SWR",
    "cs": "Serres",
    "en": "Serres",
  },
  {
    "value": prefix + "ARG_BUE",
    "cs": "Buenos Aires",
    "en": "Buenos Aires",
  },
  {
    "value": prefix + "AUS_CBR",
    "cs": "Canberra",
    "en": "Canberra",
  },
  {
    "value": prefix + "BGD_DAC",
    "cs": "Dháka",
    "en": "Dhaka",
  },
  {
    "value": prefix + "BRA_BSB",
    "cs": "Brasilia",
    "en": "Brasilia",
  },
  {
    "value": prefix + "BRA_RIO",
    "cs": "Rio de Janeiro",
    "en": "Rio de Janeiro",
  },
  {
    "value": prefix + "COD_FIH",
    "cs": "Kinshasa",
    "en": "Kinshasa",
  },
  {
    "value": prefix + "CAF_BGF",
    "cs": "Bangui",
    "en": "Bangui",
  },
  {
    "value": prefix + "CHN_BJS",
    "cs": "Peking",
    "en": "Beijing",
  },
  {
    "value": prefix + "HKG_NKG",
    "cs": "Hongkong",
    "en": "Hong Kong",
  },
  {
    "value": prefix + "IRL_ORK",
    "cs": "Cork",
    "en": "Cork",
  },
  {
    "value": prefix + "JPN_OSA",
    "cs": "Ósaka",
    "en": "Osaka",
  },
  {
    "value": prefix + "JPN_SPK",
    "cs": "Sapporo",
    "en": "Sapporo",
  },
  {
    "value": prefix + "JPN_TYO",
    "cs": "Tokio",
    "en": "Tokyo",
  },
  {
    "value": prefix + "JPN_UKY",
    "cs": "Kjóto",
    "en": "Kyoto",
  },
  {
    "value": prefix + "JPN_YOK",
    "cs": "Jokohama",
    "en": "Yokohama",
  },
  {
    "value": prefix + "KEN_MBA",
    "cs": "Mombasa",
    "en": "Mombasa",
  },
  {
    "value": prefix + "KEN_NBO",
    "cs": "Nairobi",
    "en": "Nairobi",
  },
  {
    "value": prefix + "KOR_SEL",
    "cs": "Soul",
    "en": "Seoul",
  },
  {
    "value": prefix + "MAC_MFM",
    "cs": "Macao",
    "en": "Macao",
  },
  {
    "value": prefix + "MYS_KUL",
    "cs": "Kuala Lumpur",
    "en": "Kuala Lumpur",
  },
  {
    "value": prefix + "NZL_WLG",
    "cs": "Wellington",
    "en": "Wellington",
  },
  {
    "value": prefix + "USA_ATL",
    "cs": "Atlanta",
    "en": "Atlanta",
  },
  {
    "value": prefix + "USA_AXR",
    "cs": "Alexandrie",
    "en": "Alexandria",
  },
  {
    "value": prefix + "USA_BAL",
    "cs": "Baltimore",
    "en": "Baltimore",
  },
  {
    "value": prefix + "USA_CHI",
    "cs": "Chicago",
    "en": "Chicago",
  },
  {
    "value": prefix + "USA_DET",
    "cs": "Detroit",
    "en": "Detroit",
  },
  {
    "value": prefix + "USA_HNL",
    "cs": "Honolulu",
    "en": "Honolulu",
  },
  {
    "value": prefix + "USA_HSO",
    "cs": "Houston",
    "en": "Houston",
  },
  {
    "value": prefix + "USA_IND",
    "cs": "Indianapolis",
    "en": "Indianapolis",
  },
  {
    "value": prefix + "USA_LAX",
    "cs": "Los Angeles",
    "en": "Los Angeles",
  },
  {
    "value": prefix + "USA_MES",
    "cs": "Minneapolis",
    "en": "Minneapolis",
  },
  {
    "value": prefix + "USA_MIA",
    "cs": "Miami",
    "en": "Miami",
  },
  {
    "value": prefix + "USA_MSY",
    "cs": "New Orleans",
    "en": "New Orleans",
  },
  {
    "value": prefix + "USA_NYC",
    "cs": "New York",
    "en": "New York",
  },
  {
    "value": prefix + "USA_PHL",
    "cs": "Filadelfie",
    "en": "Philadelphia",
  },
  {
    "value": prefix + "USA_SFO",
    "cs": "San Francisco",
    "en": "San Francisco",
  },
  {
    "value": prefix + "USA_SYT",
    "cs": "St Louis",
    "en": "St Louis",
  },
  {
    "value": prefix + "USA_WAS",
    "cs": "Washington DC",
    "en": "Washington DC",
  },
  {
    "value": prefix + "AFG_KBL",
    "cs": "Kábul",
    "en": "Kabul",
  },
  {
    "value": prefix + "GBR_BZX",
    "cs": "Bramshill",
    "en": "Bramshill",
  },
  {
    "value": prefix + "LUX_SCH",
    "cs": "Schengen",
    "en": "Schengen",
  },
  {
    "value": prefix + "ISR_JER",
    "cs": "Jeruzalém",
    "en": "Jerusalem",
  },
  {
    "value": prefix + "PSE_GZA",
    "cs": "Gaza",
    "en": "Gaza",
  },
  {
    "value": prefix + "SVN_BPK",
    "cs": "Brdo pri Kranju",
    "en": "Brdo pri Kranju",
  },
  {
    "value": prefix + "BEN_COO",
    "cs": "Cotonou",
    "en": "Cotonou",
  },
  {
    "value": prefix + "CZE_SNR",
    "cs": "Senohraby",
    "en": "Senohraby",
  },
  {
    "value": prefix + "ARM_EVN",
    "cs": "Jerevan",
    "en": "Yerevan",
  },
  {
    "value": prefix + "BIH_SJJ",
    "cs": "Sarajevo",
    "en": "Sarajevo",
  },
  {
    "value": prefix + "BRB_BGI",
    "cs": "Bridgetown",
    "en": "Bridgetown",
  },
  {
    "value": prefix + "BOL_LPB",
    "cs": "La Paz",
    "en": "La Paz",
  },
  {
    "value": prefix + "BWA_GBE",
    "cs": "Gaborone",
    "en": "Gaborone",
  },
  {
    "value": prefix + "BLR_MSQ",
    "cs": "Minsk",
    "en": "Minsk",
  },
  {
    "value": prefix + "COG_BZV",
    "cs": "Brazzaville",
    "en": "Brazzaville",
  },
  {
    "value": prefix + "COL_BOG",
    "cs": "Bogota",
    "en": "Bogotá",
  },
  {
    "value": prefix + "ECU_UIO",
    "cs": "Quito",
    "en": "Quito",
  },
  {
    "value": prefix + "CRI_SJO",
    "cs": "San José",
    "en": "San José",
  },
  {
    "value": prefix + "SRB_NBD",
    "en": "Novi Beograd",
  },
  {
    "value": prefix + "MNE_TGD",
    "cs": "Podgorica",
    "en": "Podgorica",
  },
  {
    "value": prefix + "CPV_RAI",
    "cs": "Praia",
    "en": "Praia",
  },
  {
    "value": prefix + "DOM_SDQ",
    "cs": "Santo Domingo",
    "en": "Santo Domingo",
  },
  {
    "value": prefix + "CUB_HAV",
    "cs": "Havana",
    "en": "Havana",
  },
  {
    "value": prefix + "ERI_ASM",
    "cs": "Asmara",
    "en": "Asmara",
  },
  {
    "value": prefix + "GTM_GUA",
    "cs": "Guatemala",
    "en": "Guatemala City",
  },
  {
    "value": prefix + "GUY_GEO",
    "cs": "Georgetown",
    "en": "Georgetown",
  },
  {
    "value": prefix + "SUR_PBM",
    "cs": "Paramaribo",
    "en": "Paramaribo",
  },
  {
    "value": prefix + "TTO_POS",
    "cs": "Port of Spain",
    "en": "Port of Spain",
  },
  {
    "value": prefix + "HTI_PAP",
    "cs": "Port-au-Prince",
    "en": "Port-au-Prince",
  },
  {
    "value": prefix + "TLS_DIL",
    "cs": "Dili",
    "en": "Dili",
  },
  {
    "value": prefix + "ISR_RMG",
    "cs": "Ramat Gan",
    "en": "Ramat Gan",
  },
  {
    "value": prefix + "PRK_FNJ",
    "cs": "Pchjongjang",
    "en": "Pyongyang",
  },
  {
    "value": prefix + "KAZ_ALA",
    "cs": "Almaty",
    "en": "Almati",
  },
  {
    "value": prefix + "KAZ_ASA",
    "cs": "Nur-Sultan",
    "en": "Nur-Sultan",
  },
  {
    "value": prefix + "KGZ_FRU",
    "cs": "Biškek",
    "en": "Bishkek",
  },
  {
    "value": prefix + "TJK_DYU",
    "cs": "Dušanbe",
    "en": "Dushanbe",
  },
  {
    "value": prefix + "LAO_VTE",
    "cs": "Vientiane",
    "en": "Vientiane",
  },
  {
    "value": prefix + "MDA_KIV",
    "cs": "Kišiněv",
    "en": "Chisinau",
  },
  {
    "value": prefix + "MWI_LLW",
    "cs": "Lilongwe",
    "en": "Lilongwe",
  },
  {
    "value": prefix + "MEX_CIU",
    "cs": "Mexiko",
    "en": "Mexico City",
  },
  {
    "value": prefix + "NER_NIM",
    "cs": "Niamey",
    "en": "Niamey",
  },
  {
    "value": prefix + "NIC_MGA",
    "cs": "Managua",
    "en": "Managua",
  },
  {
    "value": prefix + "PER_LIM",
    "cs": "Lima",
    "en": "Lima",
  },
  {
    "value": prefix + "PHL_MTI",
    "cs": "Makati City",
    "en": "Makati City",
  },
  {
    "value": prefix + "SAU_RUH",
    "cs": "Rijád",
    "en": "Riyadh",
  },
  {
    "value": prefix + "SLE_FNA",
    "cs": "Freetown",
    "en": "Freetown",
  },
  {
    "value": prefix + "MMR_RGN",
    "cs": "Rangún",
    "en": "Yangon",
  },
  {
    "value": prefix + "TZA_DAR",
    "en": "Dar es Salaam",
  },
  {
    "value": prefix + "UGA_KLA",
    "cs": "Kampala",
    "en": "Kampala",
  },
  {
    "value": prefix + "PRY_ASU",
    "cs": "Asunción",
    "en": "Asunción",
  },
  {
    "value": prefix + "VEN_CCS",
    "cs": "Caracas",
    "en": "Caracas",
  },
  {
    "value": prefix + "VNM_HAN",
    "cs": "Hanoj",
    "en": "Hanoi",
  },
  {
    "value": prefix + "VUT_VLI",
    "cs": "Port Vila",
    "en": "Port Vila",
  },
  {
    "value": prefix + "1A0_PRN",
    "cs": "Priština",
    "en": "Pristina",
  },
  {
    "value": prefix + "TWN_TPE",
    "cs": "Tchaj-pej",
    "en": "Taipei",
  },
  {
    "value": prefix + "GMB_BJL",
    "cs": "Banjul",
    "en": "Banjul",
  },
  {
    "value": prefix + "GNB_PXB",
    "cs": "Bissau",
    "en": "Bissau",
  },
  {
    "value": prefix + "PNG_POM",
    "cs": "Port Moresby",
    "en": "Port Moresby",
  },
  {
    "value": prefix + "SLB_HIR",
    "cs": "Honiara",
    "en": "Honiara",
  },
  {
    "value": prefix + "SDN_KRT",
    "cs": "Chartúm",
    "en": "Khartoum",
  },
  {
    "value": prefix + "YEM_SAH",
    "cs": "San’á",
    "en": "Sana’a",
  },
  {
    "value": prefix + "SWZ_QMN",
    "cs": "Mbabane",
    "en": "Mbabane",
  },
  {
    "value": prefix + "LSO_MSU",
    "cs": "Maseru",
    "en": "Maseru",
  },
  {
    "value": prefix + "JPN_NGO",
    "cs": "Nagoja",
    "en": "Nagoya",
  },
  {
    "value": prefix + "CAN_CHX",
    "en": "Chalk River",
  },
  {
    "value": prefix + "PSE_JER",
    "cs": "Jeruzalém",
    "en": "Jerusalem",
  },
  {
    "value": prefix + "CIV_ASK",
    "cs": "Yamoussoukro",
    "en": "Yamoussoukro",
  },
  {
    "value": prefix + "SVK_KSC",
    "cs": "Košice",
    "en": "Košice",
  },
  {
    "value": prefix + "BEL_EEK",
    "en": "Eeklo",
  },
  {
    "value": prefix + "BEL_EUP",
    "cs": "Eupen",
    "en": "Eupen",
  },
  {
    "value": prefix + "BEL_VER",
    "cs": "Verviers",
    "en": "Verviers",
  },
  {
    "value": prefix + "BEL_VEU",
    "cs": "Veurne",
    "en": "Veurne",
  },
  {
    "value": prefix + "CYP_FMG",
    "cs": "Famagusta",
    "en": "Famagusta",
  },
  {
    "value": prefix + "CYP_KYR",
    "cs": "Kyrenia",
    "en": "Kyrenia",
  },
  {
    "value": prefix + "CYP_LCA",
    "cs": "Larnaka",
    "en": "Larnaca",
  },
  {
    "value": prefix + "CYP_LMS",
    "cs": "Lemesos",
    "en": "Limassol",
  },
  {
    "value": prefix + "CYP_PFO",
    "cs": "Pafos",
    "en": "Paphos",
  },
  {
    "value": prefix + "FIN_JOE",
    "cs": "Joensuu",
    "en": "Joensuu",
  },
  {
    "value": prefix + "FIN_JVP",
    "cs": "Järvenpää",
    "en": "Järvenpää",
  },
  {
    "value": prefix + "FIN_JYV",
    "cs": "Jyväskylä",
    "en": "Jyväskylä",
  },
  {
    "value": prefix + "FIN_KEM",
    "cs": "Kemi",
    "en": "Kemi",
  },
  {
    "value": prefix + "FIN_KUO",
    "cs": "Kuopio",
    "en": "Kuopio",
  },
  {
    "value": prefix + "FIN_KVO",
    "en": "Kouvola",
  },
  {
    "value": prefix + "FIN_OUL",
    "cs": "Oulu",
    "en": "Oulu",
  },
  {
    "value": prefix + "FIN_RAA",
    "en": "Raahe",
  },
  {
    "value": prefix + "FIN_RVN",
    "cs": "Rovaniemi",
    "en": "Rovaniemi",
  },
  {
    "value": prefix + "FIN_SJY",
    "cs": "Seinäjoki",
    "en": "Seinäjoki",
  },
  {
    "value": prefix + "GRC_CLK",
    "cs": "Chalkida",
    "en": "Chalkida",
  },
  {
    "value": prefix + "BEL_HFB",
    "en": "Halle",
  },
  {
    "value": prefix + "GRC_KRT",
    "cs": "Korint",
    "en": "Corinth",
  },
  {
    "value": prefix + "GRC_KFL",
    "cs": "Kefalonia",
    "en": "Kefalonia",
  },
  {
    "value": prefix + "GRC_SKG",
    "cs": "Soluň",
    "en": "Thessaloniki",
  },
  {
    "value": prefix + "GRC_SRS",
    "cs": "Serres",
    "en": "Serres",
  },
  {
    "value": prefix + "BEL_AEJ",
    "en": "Arendonk",
  },
  {
    "value": prefix + "BEL_AES",
    "en": "Asse",
  },
  {
    "value": prefix + "BEL_BEA",
    "en": "Beaumont",
  },
  {
    "value": prefix + "GRC_AND",
    "cs": "Andros",
    "en": "Andros",
  },
  {
    "value": prefix + "GRC_AOK",
    "cs": "Karpathos",
    "en": "Karpathos",
  },
  {
    "value": prefix + "NLD_ZST",
    "en": "Zaanstad",
  },
  {
    "value": prefix + "GRC_ATN",
    "cs": "Santorini",
    "en": "Santorini",
  },
  {
    "value": prefix + "GRC_GVA",
    "en": "Grevena",
  },
  {
    "value": prefix + "GRC_JIK",
    "cs": "Ikaria",
    "en": "Icaria",
  },
  {
    "value": prefix + "BEL_AAS",
    "en": "Aarschot",
  },
  {
    "value": prefix + "GRC_JNX",
    "cs": "Naxos",
    "en": "Naxos",
  },
  {
    "value": prefix + "BEL_BEV",
    "en": "Beveren",
  },
  {
    "value": prefix + "GRC_KGS",
    "cs": "Kos",
    "en": "Kos",
  },
  {
    "value": prefix + "GRC_KMI",
    "cs": "Kalymnos",
    "en": "Kalymnos",
  },
  {
    "value": prefix + "GRC_LEV",
    "cs": "Lefkada",
    "en": "Lefkada",
  },
  {
    "value": prefix + "GRC_LXS",
    "cs": "Lemnos",
    "en": "Lemnos",
  },
  {
    "value": prefix + "GRC_MLO",
    "cs": "Milos",
    "en": "Milos",
  },
  {
    "value": prefix + "GRC_PAS",
    "cs": "Paros",
    "en": "Paros",
  },
  {
    "value": prefix + "GRC_PPL",
    "cs": "Pella",
    "en": "Pella",
  },
  {
    "value": prefix + "LUX_MME",
    "cs": "Mamer",
    "en": "Mamer",
  },
  {
    "value": prefix + "GRC_VTA",
    "cs": "Boiotie",
    "en": "Boeotia",
  },
  {
    "value": prefix + "HRV_KAR",
    "cs": "Karlovac",
    "en": "Karlovac",
  },
  {
    "value": prefix + "HRV_SPU",
    "cs": "Split",
    "en": "Split",
  },
  {
    "value": prefix + "HRV_VUK",
    "cs": "Vukovar",
    "en": "Vukovar",
  },
  {
    "value": prefix + "BEL_BOM",
    "en": "Boom",
  },
  {
    "value": prefix + "BEL_BOG",
    "en": "Borgloon",
  },
  {
    "value": prefix + "BEL_RIN",
    "en": "Beringen",
  },
  {
    "value": prefix + "BEL_BLA",
    "en": "Braine l'Alleud",
  },
  {
    "value": prefix + "BEL_BRA",
    "en": "Brasschaat",
  },
  {
    "value": prefix + "BEL_BRE",
    "en": "Bree",
  },
  {
    "value": prefix + "BEL_CHA",
    "en": "Châtelet",
  },
  {
    "value": prefix + "BEL_CRA",
    "en": "Cheratte",
  },
  {
    "value": prefix + "BEL_CNY",
    "en": "Ciney",
  },
  {
    "value": prefix + "BEL_DEZ",
    "en": "Deinze",
  },
  {
    "value": prefix + "BEL_DIE",
    "en": "Diest",
  },
  {
    "value": prefix + "BEL_DOU",
    "en": "Dour",
  },
  {
    "value": prefix + "BEL_ETE",
    "en": "Etterbeek",
  },
  {
    "value": prefix + "BEL_FEQ",
    "en": "Fontaine-l'Évêque",
  },
  {
    "value": prefix + "BEL_FSV",
    "en": "Fosses-la-Ville",
  },
  {
    "value": prefix + "BEL_GEM",
    "en": "Gembloux",
  },
  {
    "value": prefix + "BEL_GNK",
    "en": "Genk",
  },
  {
    "value": prefix + "BEL_GOS",
    "en": "Gosselies",
  },
  {
    "value": prefix + "BEL_GHE",
    "en": "Grâce-Hollogne",
  },
  {
    "value": prefix + "BEL_GRB",
    "en": "Grimbergen",
  },
  {
    "value": prefix + "BEL_GVI",
    "en": "Grivegnée",
  },
  {
    "value": prefix + "BEL_HAC",
    "en": "Haacht",
  },
  {
    "value": prefix + "BEL_HMO",
    "en": "Hamoir",
  },
  {
    "value": prefix + "BEL_HEJ",
    "en": "Harelbeke",
  },
  {
    "value": prefix + "BEL_HPG",
    "en": "Heist-op-den-Berg",
  },
  {
    "value": prefix + "BEL_HER",
    "en": "Herentals",
  },
  {
    "value": prefix + "BEL_HEN",
    "en": "Herne",
  },
  {
    "value": prefix + "BEL_HRS",
    "en": "Herstal",
  },
  {
    "value": prefix + "BEL_HOO",
    "en": "Hoogstraten",
  },
  {
    "value": prefix + "BEL_HRU",
    "en": "Hornu",
  },
  {
    "value": prefix + "BEL_HHE",
    "en": "Houthalen-Helchteren",
  },
  {
    "value": prefix + "BEL_JAM",
    "en": "Jambes",
  },
  {
    "value": prefix + "BEL_JET",
    "en": "Jette",
  },
  {
    "value": prefix + "BEL_JDO",
    "en": "Jodoigne",
  },
  {
    "value": prefix + "BEL_JUM",
    "en": "Jumet",
  },
  {
    "value": prefix + "BEL_KPN",
    "en": "Kapellen",
  },
  {
    "value": prefix + "BEL_KON",
    "en": "Kontich",
  },
  {
    "value": prefix + "BEL_KRA",
    "en": "Kraainem",
  },
  {
    "value": prefix + "BEL_LLO",
    "en": "La Louvière",
  },
  {
    "value": prefix + "BEL_LAD",
    "en": "Landen",
  },
  {
    "value": prefix + "BEL_LIK",
    "en": "Lennik",
  },
  {
    "value": prefix + "BEL_LIM",
    "en": "Limbourg",
  },
  {
    "value": prefix + "BEL_LOK",
    "en": "Lokeren",
  },
  {
    "value": prefix + "BEL_LUV",
    "en": "Louveigné",
  },
  {
    "value": prefix + "BEL_MMN",
    "en": "Maasmechelen",
  },
  {
    "value": prefix + "BEL_MBW",
    "en": "Malmédy",
  },
  {
    "value": prefix + "BEL_MAP",
    "en": "Marchienne-au-Pont",
  },
  {
    "value": prefix + "BEL_MIS",
    "en": "Meise",
  },
  {
    "value": prefix + "BEL_MEN",
    "en": "Menen",
  },
  {
    "value": prefix + "BEL_MRL",
    "en": "Merelbeke",
  },
  {
    "value": prefix + "BEL_NRP",
    "en": "Neerpelt",
  },
  {
    "value": prefix + "BEL_NNV",
    "en": "Ninove",
  },
  {
    "value": prefix + "BEL_OVR",
    "en": "Overijse",
  },
  {
    "value": prefix + "BEL_RSX",
    "en": "Ressaix",
  },
  {
    "value": prefix + "BEL_RON",
    "en": "Ronse",
  },
  {
    "value": prefix + "BEL_RCT",
    "en": "Roucourt",
  },
  {
    "value": prefix + "BEL_SHU",
    "en": "Saint-Hubert",
  },
  {
    "value": prefix + "BEL_SNO",
    "en": "Saint-Nicolas",
  },
  {
    "value": prefix + "BEL_SCE",
    "en": "Schilde",
  },
  {
    "value": prefix + "BEL_SEN",
    "en": "Seneffe",
  },
  {
    "value": prefix + "BEL_ZER",
    "en": "Seraing",
  },
  {
    "value": prefix + "BEL_MSJ",
    "en": "Sint-Jans-Molenbeek",
  },
  {
    "value": prefix + "BEL_SJN",
    "en": "Saint-Josse-ten-Noode",
  },
  {
    "value": prefix + "NLD_HMM",
    "en": "Haarlemmermeer",
  },
  {
    "value": prefix + "BEL_TIE",
    "en": "Tienen",
  },
  {
    "value": prefix + "BEL_TRT",
    "en": "Torhout",
  },
  {
    "value": prefix + "BEL_TBZ",
    "en": "Tubize",
  },
  {
    "value": prefix + "BEL_VSM",
    "en": "Vielsalm",
  },
  {
    "value": prefix + "BEL_VIL",
    "en": "Vilvoorde",
  },
  {
    "value": prefix + "BEL_WCO",
    "en": "Walcourt",
  },
  {
    "value": prefix + "BEL_WAR",
    "en": "Waregem",
  },
  {
    "value": prefix + "BEL_WVR",
    "en": "Wavre",
  },
  {
    "value": prefix + "BEL_WER",
    "en": "Wervik",
  },
  {
    "value": prefix + "BEL_WES",
    "en": "Westerlo",
  },
  {
    "value": prefix + "BEL_WET",
    "en": "Wetteren",
  },
  {
    "value": prefix + "BEL_WLB",
    "en": "Willebroek",
  },
  {
    "value": prefix + "BEL_ZAN",
    "en": "Zandhoven",
  },
  {
    "value": prefix + "BEL_ZEL",
    "en": "Zelzate",
  },
  {
    "value": prefix + "BEL_ZRM",
    "en": "Zomergem",
  },
  {
    "value": prefix + "BEL_ZOT",
    "en": "Zottegem",
  },
  {
    "value": prefix + "FRA_ANM",
    "cs": "Annemasse",
    "en": "Annemasse",
  },
  {
    "value": prefix + "FRA_AOY",
    "cs": "Annonay",
    "en": "Annonay",
  },
  {
    "value": prefix + "FRA_ATY",
    "cs": "Antony",
    "en": "Antony",
  },
  {
    "value": prefix + "FRA_ARL",
    "cs": "Arles",
    "en": "Arles",
  },
  {
    "value": prefix + "FRA_AQS",
    "cs": "Asnières-sur-Seine",
    "en": "Asnières-sur-Seine",
  },
  {
    "value": prefix + "FRA_ABG",
    "cs": "Aubagne",
    "en": "Aubagne",
  },
  {
    "value": prefix + "FRA_AUF",
    "cs": "Auxerre",
    "en": "Auxerre",
  },
  {
    "value": prefix + "FRA_AVR",
    "cs": "Avranches",
    "en": "Avranches",
  },
  {
    "value": prefix + "FRA_BZR",
    "cs": "Béziers",
    "en": "Béziers",
  },
  {
    "value": prefix + "FRA_BOY",
    "cs": "Boissy-Saint-Léger",
    "en": "Boissy-Saint-Léger",
  },
  {
    "value": prefix + "FRA_BOV",
    "cs": "Bonneville",
    "en": "Bonneville",
  },
  {
    "value": prefix + "FRA_OGB",
    "cs": "Boulogne-Billancourt",
    "en": "Boulogne-Billancourt",
  },
  {
    "value": prefix + "FRA_CNP",
    "cs": "Charenton-le-Pont",
    "en": "Charenton-le-Pont",
  },
  {
    "value": prefix + "FRA_CHA",
    "cs": "Chartres",
    "en": "Chartres",
  },
  {
    "value": prefix + "FRA_CTD",
    "cs": "Châteaudun",
    "en": "Châteaudun",
  },
  {
    "value": prefix + "FRA_CMT",
    "cs": "Chaumont",
    "en": "Chaumont",
  },
  {
    "value": prefix + "FRA_CET",
    "cs": "Cholet",
    "en": "Cholet",
  },
  {
    "value": prefix + "FRA_CCY",
    "en": "Clamecy",
  },
  {
    "value": prefix + "FRA_CFE",
    "en": "Clermont-Ferrand",
  },
  {
    "value": prefix + "CZE_SVB",
    "cs": "Slavkov u Brna",
    "en": "Slavkov u Brna",
  },
  {
    "value": prefix + "FRA_CMR",
    "en": "Colmar",
  },
  {
    "value": prefix + "FRA_CLB",
    "en": "Colombes",
  },
  {
    "value": prefix + "FRA_CMP",
    "en": "Compiègne",
  },
  {
    "value": prefix + "FRA_COD",
    "en": "Condom",
  },
  {
    "value": prefix + "FRA_CRB",
    "en": "Courbevoie",
  },
  {
    "value": prefix + "FRA_COT",
    "en": "Coutances",
  },
  {
    "value": prefix + "FRA_CRL",
    "en": "Creil",
  },
  {
    "value": prefix + "FRA_CTE",
    "en": "Créteil",
  },
  {
    "value": prefix + "FRA_CWU",
    "en": "Cusset",
  },
  {
    "value": prefix + "FRA_DAX",
    "en": "Dax",
  },
  {
    "value": prefix + "FRA_DPE",
    "en": "Dieppe",
  },
  {
    "value": prefix + "FRA_DGN",
    "en": "Digne-les-Bains",
  },
  {
    "value": prefix + "FRA_DLE",
    "en": "Dole",
  },
  {
    "value": prefix + "FRA_DOI",
    "en": "Douai",
  },
  {
    "value": prefix + "FRA_DRA",
    "en": "Draguignan",
  },
  {
    "value": prefix + "FRA_DRE",
    "en": "Dreux",
  },
  {
    "value": prefix + "FRA_EPL",
    "en": "Épinal",
  },
  {
    "value": prefix + "FRA_EVX",
    "en": "Évreux",
  },
  {
    "value": prefix + "FRA_EVR",
    "en": "Évry",
  },
  {
    "value": prefix + "FRA_FAS",
    "en": "Falaise",
  },
  {
    "value": prefix + "FRA_FGA",
    "en": "Figeac",
  },
  {
    "value": prefix + "FRA_FLE",
    "en": "Flers",
  },
  {
    "value": prefix + "FRA_FOI",
    "en": "Foix",
  },
  {
    "value": prefix + "FRA_FBU",
    "en": "Fontainebleau",
  },
  {
    "value": prefix + "FRA_FOC",
    "en": "Fontenay-le-Comte",
  },
  {
    "value": prefix + "FRA_FOR",
    "en": "Forbach",
  },
  {
    "value": prefix + "MTQ_FDF",
    "cs": "Fort-de-France",
    "en": "Fort-de-France",
  },
  {
    "value": prefix + "FRA_FOU",
    "en": "Fougères",
  },
  {
    "value": prefix + "FRA_FRJ",
    "en": "Fréjus",
  },
  {
    "value": prefix + "FRA_GAT",
    "en": "Gap",
  },
  {
    "value": prefix + "FRA_ONE",
    "en": "Gonesse",
  },
  {
    "value": prefix + "FRA_GRS",
    "en": "Grasse",
  },
  {
    "value": prefix + "FRA_GNB",
    "en": "Grenoble",
  },
  {
    "value": prefix + "FRA_GWB",
    "en": "Guebwiller",
  },
  {
    "value": prefix + "FRA_GUE",
    "en": "Guéret",
  },
  {
    "value": prefix + "FRA_GUI",
    "en": "Guingamp",
  },
  {
    "value": prefix + "FRA_HAG",
    "en": "Haguenau",
  },
  {
    "value": prefix + "FRA_HZB",
    "en": "Hazebrouck",
  },
  {
    "value": prefix + "FRA_IKG",
    "en": "Illkirch-Graffenstaden",
  },
  {
    "value": prefix + "FRA_IVS",
    "en": "Ivry-sur-Seine",
  },
  {
    "value": prefix + "FRA_JUV",
    "en": "Juvisy-sur-Orge",
  },
  {
    "value": prefix + "FRA_LFL",
    "en": "La Flèche",
  },
  {
    "value": prefix + "FRA_LRH",
    "en": "La Rochelle",
  },
  {
    "value": prefix + "FRA_EDM",
    "en": "La Roche-sur-Yon",
  },
  {
    "value": prefix + "FRA_LGM",
    "en": "Lagny-sur-Marne",
  },
  {
    "value": prefix + "FRA_LAO",
    "en": "Laon",
  },
  {
    "value": prefix + "FRA_LVA",
    "en": "Laval",
  },
  {
    "value": prefix + "FRA_LCR",
    "en": "Le Creusot",
  },
  {
    "value": prefix + "FRA_LME",
    "en": "Le Mans",
  },
  {
    "value": prefix + "FRA_LPY",
    "en": "Le Puy-en-Velay",
  },
  {
    "value": prefix + "FRA_ICY",
    "en": "Le Raincy",
  },
  {
    "value": prefix + "FRA_LEN",
    "en": "Lens",
  },
  {
    "value": prefix + "FRA_LAY",
    "en": "Les Andelys",
  },
  {
    "value": prefix + "FRA_LSO",
    "en": "Les Sables d'Olonne",
  },
  {
    "value": prefix + "FRA_LIB",
    "en": "Libourne",
  },
  {
    "value": prefix + "FRA_LIG",
    "en": "Limoges",
  },
  {
    "value": prefix + "FRA_LIX",
    "en": "Lisieux",
  },
  {
    "value": prefix + "FRA_LNJ",
    "en": "Longjumeau",
  },
  {
    "value": prefix + "FRA_LOY",
    "en": "Longwy",
  },
  {
    "value": prefix + "FRA_LLS",
    "en": "Lons-le-Saunier",
  },
  {
    "value": prefix + "FRA_LRT",
    "en": "Lorient",
  },
  {
    "value": prefix + "FRA_LUD",
    "en": "Loudéac",
  },
  {
    "value": prefix + "FRA_LVS",
    "en": "Louviers",
  },
  {
    "value": prefix + "FRA_LVL",
    "en": "Lunéville",
  },
  {
    "value": prefix + "FRA_LRE",
    "en": "Lure",
  },
  {
    "value": prefix + "FRA_MAC",
    "en": "Mâcon",
  },
  {
    "value": prefix + "MYT_MAM",
    "cs": "Mamoudzou",
    "en": "Mamoudzou",
  },
  {
    "value": prefix + "FRA_MAQ",
    "en": "Manosque",
  },
  {
    "value": prefix + "FRA_MAR",
    "en": "Marmande",
  },
  {
    "value": prefix + "FRA_MAU",
    "en": "Maubeuge",
  },
  {
    "value": prefix + "FRA_MEA",
    "en": "Meaux",
  },
  {
    "value": prefix + "FRA_MEL",
    "en": "Melun",
  },
  {
    "value": prefix + "FRA_MEN",
    "en": "Mende",
  },
  {
    "value": prefix + "FRA_ETN",
    "en": "Menton",
  },
  {
    "value": prefix + "FRA_MIL",
    "en": "Millau",
  },
  {
    "value": prefix + "FRA_BVE",
    "cs": "Brive-la-Gaillarde",
    "en": "Brive-la-Gaillarde",
  },
  {
    "value": prefix + "FRA_MJK",
    "en": "Mirande",
  },
  {
    "value": prefix + "FRA_MOL",
    "en": "Molsheim",
  },
  {
    "value": prefix + "FRA_MOS",
    "en": "Montargis",
  },
  {
    "value": prefix + "FRA_MOT",
    "en": "Montauban",
  },
  {
    "value": prefix + "FRA_MOD",
    "en": "Montbard",
  },
  {
    "value": prefix + "FRA_MTD",
    "en": "Montbéliard",
  },
  {
    "value": prefix + "FRA_MTB",
    "en": "Montbrison",
  },
  {
    "value": prefix + "FRA_MDM",
    "en": "Mont-de-Marsan",
  },
  {
    "value": prefix + "FRA_MTM",
    "en": "Montélimar",
  },
  {
    "value": prefix + "FRA_MCU",
    "en": "Montluçon",
  },
  {
    "value": prefix + "FRA_FMY",
    "en": "Montmorency",
  },
  {
    "value": prefix + "FRA_MPL",
    "en": "Montpellier",
  },
  {
    "value": prefix + "FRA_MTL",
    "en": "Montreuil",
  },
  {
    "value": prefix + "FRA_MMC",
    "en": "Montreuil-sur-Mer",
  },
  {
    "value": prefix + "FRA_MXN",
    "en": "Morlaix",
  },
  {
    "value": prefix + "FRA_MOU",
    "en": "Moulins",
  },
  {
    "value": prefix + "FRA_MUR",
    "en": "Muret",
  },
  {
    "value": prefix + "FRA_ENC",
    "en": "Nancy",
  },
  {
    "value": prefix + "FRA_NAN",
    "en": "Nanterre",
  },
  {
    "value": prefix + "FRA_NTE",
    "en": "Nantes",
  },
  {
    "value": prefix + "FRA_NNU",
    "en": "Nantua",
  },
  {
    "value": prefix + "FRA_ABB",
    "en": "Abbeville",
  },
  {
    "value": prefix + "FRA_NVS",
    "en": "Nevers",
  },
  {
    "value": prefix + "FRA_NIT",
    "en": "Niort",
  },
  {
    "value": prefix + "FRA_NME",
    "en": "Nogent-sur-Marne",
  },
  {
    "value": prefix + "NCL_NOU",
    "cs": "Nouméa",
    "en": "Nouméa",
  },
  {
    "value": prefix + "FRA_ORA",
    "en": "Orange",
  },
  {
    "value": prefix + "FRA_OYO",
    "en": "Oyonnax",
  },
  {
    "value": prefix + "FRA_PAL",
    "en": "Palaiseau",
  },
  {
    "value": prefix + "FRA_TIN",
    "en": "Pantin",
  },
  {
    "value": prefix + "PYF_PPT",
    "cs": "Papeete",
    "en": "Papeete",
  },
  {
    "value": prefix + "FRA_PUF",
    "en": "Pau",
  },
  {
    "value": prefix + "FRA_PGX",
    "en": "Périgueux",
  },
  {
    "value": prefix + "FRA_PEO",
    "en": "Peronne",
  },
  {
    "value": prefix + "FRA_PTU",
    "en": "Pertuis",
  },
  {
    "value": prefix + "GLP_PAP",
    "en": "Pointe-à-Pitre",
  },
  {
    "value": prefix + "FRA_POI",
    "en": "Poissy",
  },
  {
    "value": prefix + "FRA_PIS",
    "en": "Poitiers",
  },
  {
    "value": prefix + "FRA_PQR",
    "en": "Pontarlier",
  },
  {
    "value": prefix + "FRA_PTE",
    "en": "Pontoise",
  },
  {
    "value": prefix + "FRA_PRV",
    "en": "Privas",
  },
  {
    "value": prefix + "NLD_AER",
    "cs": "Almere",
    "en": "Almere",
  },
  {
    "value": prefix + "NLD_ALK",
    "cs": "Alkmaar",
    "en": "Alkmaar",
  },
  {
    "value": prefix + "NLD_ALM",
    "en": "Almelo",
  },
  {
    "value": prefix + "NLD_AME",
    "cs": "Amersfoort",
    "en": "Amersfoort",
  },
  {
    "value": prefix + "NLD_APE",
    "cs": "Apeldoorn",
    "en": "Apeldoorn",
  },
  {
    "value": prefix + "NLD_APN",
    "cs": "Alphen aan den Rijn",
    "en": "Alphen aan den Rijn",
  },
  {
    "value": prefix + "BEL_BLZ",
    "en": "Bilzen",
  },
  {
    "value": prefix + "NLD_ASS",
    "cs": "Assen",
    "en": "Assen",
  },
  {
    "value": prefix + "NLD_BAD",
    "en": "Badhoevedorp",
  },
  {
    "value": prefix + "NLD_BEZ",
    "en": "Beetsterzwaag",
  },
  {
    "value": prefix + "NLD_BOX",
    "en": "Boxmeer",
  },
  {
    "value": prefix + "NLD_BRD",
    "cs": "Breda",
    "en": "Breda",
  },
  {
    "value": prefix + "NLD_BRI",
    "en": "Brielle",
  },
  {
    "value": prefix + "NLD_BZM",
    "cs": "Bergen op Zoom",
    "en": "Bergen op Zoom",
  },
  {
    "value": prefix + "NLD_DFT",
    "cs": "Delft",
    "en": "Delft",
  },
  {
    "value": prefix + "NLD_DEV",
    "cs": "Deventer",
    "en": "Deventer",
  },
  {
    "value": prefix + "NLD_DHR",
    "en": "Den Helder",
  },
  {
    "value": prefix + "NLD_DOR",
    "cs": "Dordrecht",
    "en": "Dordrecht",
  },
  {
    "value": prefix + "NLD_EMM",
    "en": "Emmen",
  },
  {
    "value": prefix + "NLD_ENS",
    "cs": "Enschede",
    "en": "Enschede",
  },
  {
    "value": prefix + "NLD_GOR",
    "en": "Gorinchem",
  },
  {
    "value": prefix + "NLD_GOU",
    "en": "Gouda",
  },
  {
    "value": prefix + "NLD_GRN",
    "cs": "Groenlo",
    "en": "Groenlo",
  },
  {
    "value": prefix + "NLD_HAA",
    "cs": "Haarlem",
    "en": "Haarlem",
  },
  {
    "value": prefix + "NLD_HEN",
    "en": "Heerlen",
  },
  {
    "value": prefix + "NLD_HRN",
    "en": "Hoorn",
  },
  {
    "value": prefix + "NLD_LEY",
    "cs": "Lelystad",
    "en": "Lelystad",
  },
  {
    "value": prefix + "NLD_MDL",
    "cs": "Middelburg",
    "en": "Middelburg",
  },
  {
    "value": prefix + "NLD_MID",
    "cs": "Middelburg",
    "en": "Middelburg",
  },
  {
    "value": prefix + "NLD_OMD",
    "en": "Roermond",
  },
  {
    "value": prefix + "NLD_TLB",
    "cs": "Tilburg",
    "en": "Tilburg",
  },
  {
    "value": prefix + "NLD_ZAA",
    "cs": "Zaandam",
    "en": "Zaandam",
  },
  {
    "value": prefix + "NLD_ZUT",
    "en": "Zutphen",
  },
  {
    "value": prefix + "NLD_ZWO",
    "cs": "Zwolle",
    "en": "Zwolle",
  },
  {
    "value": prefix + "NLD_BGN",
    "en": "Bergen",
  },
  {
    "value": prefix + "FRA_PUT",
    "en": "Puteaux",
  },
  {
    "value": prefix + "FRA_UIP",
    "en": "Quimper",
  },
  {
    "value": prefix + "FRA_RDN",
    "en": "Redon",
  },
  {
    "value": prefix + "FRA_REH",
    "en": "Rethel",
  },
  {
    "value": prefix + "FRA_RIO",
    "en": "Riom",
  },
  {
    "value": prefix + "FRA_RNE",
    "en": "Roanne",
  },
  {
    "value": prefix + "FRA_RCO",
    "en": "Rochefort",
  },
  {
    "value": prefix + "FRA_RDZ",
    "en": "Rodez",
  },
  {
    "value": prefix + "FRA_RSU",
    "en": "Romans-sur-Isère",
  },
  {
    "value": prefix + "FRA_ROU",
    "en": "Roubaix",
  },
  {
    "value": prefix + "FRA_STA",
    "en": "Saint-Avold",
  },
  {
    "value": prefix + "FRA_SBK",
    "en": "Saint-Brieuc",
  },
  {
    "value": prefix + "FRA_STC",
    "en": "Saint-Claude",
  },
  {
    "value": prefix + "FRA_NCC",
    "en": "Saint-Contest",
  },
  {
    "value": prefix + "FRA_YSD",
    "en": "Saint-Denis",
  },
  {
    "value": prefix + "REU_RUN",
    "cs": "Saint-Denis",
    "en": "Saint-Denis",
  },
  {
    "value": prefix + "FRA_SZR",
    "en": "Saint-Dizier",
  },
  {
    "value": prefix + "REU_CLO",
    "en": "Sainte-Clotilde",
  },
  {
    "value": prefix + "FRA_SIN",
    "en": "Saintes",
  },
  {
    "value": prefix + "FRA_EBU",
    "en": "Saint-Etienne",
  },
  {
    "value": prefix + "FRA_SGL",
    "en": "Saint-Germain-en-Laye",
  },
  {
    "value": prefix + "FRA_ZXG",
    "en": "Saint-Girons",
  },
  {
    "value": prefix + "FRA_SLO",
    "en": "Saint-Lô",
  },
  {
    "value": prefix + "FRA_SML",
    "en": "Saint-Malo",
  },
  {
    "value": prefix + "FRA_XUA",
    "en": "Saint-Maur-des-Fossés",
  },
  {
    "value": prefix + "FRA_SNR",
    "en": "Saint-Nazaire",
  },
  {
    "value": prefix + "FRA_STO",
    "en": "Saint-Omer",
  },
  {
    "value": prefix + "REU_ZSE",
    "en": "Saint-Pierre",
  },
  {
    "value": prefix + "SPM_MQC",
    "en": "Miquelon",
  },
  {
    "value": prefix + "SPM_FSP",
    "cs": "Saint-Pierre",
    "en": "Saint-Pierre",
  },
  {
    "value": prefix + "FRA_STQ",
    "en": "Saint-Quentin",
  },
  {
    "value": prefix + "FRA_SDP",
    "en": "Salon-de-Provence",
  },
  {
    "value": prefix + "FRA_SNW",
    "en": "Sannois",
  },
  {
    "value": prefix + "FRA_SLC",
    "en": "Sarlat-la-Canéda",
  },
  {
    "value": prefix + "FRA_SBG",
    "en": "Sarrebourg",
  },
  {
    "value": prefix + "FRA_SAR",
    "en": "Sarreguemines",
  },
  {
    "value": prefix + "FRA_SAU",
    "en": "Saumur",
  },
  {
    "value": prefix + "FRA_SAV",
    "en": "Saverne",
  },
  {
    "value": prefix + "FRA_SCH",
    "en": "Schiltigheim",
  },
  {
    "value": prefix + "FRA_SED",
    "en": "Sedan",
  },
  {
    "value": prefix + "FRA_SEL",
    "en": "Sélestat",
  },
  {
    "value": prefix + "FRA_SNO",
    "en": "Senlis",
  },
  {
    "value": prefix + "FRA_SEN",
    "en": "Sens",
  },
  {
    "value": prefix + "FRA_SET",
    "en": "Sète",
  },
  {
    "value": prefix + "FRA_SOI",
    "en": "Soissons",
  },
  {
    "value": prefix + "FRA_TSC",
    "en": "Tarascon",
  },
  {
    "value": prefix + "FRA_TAB",
    "en": "Tarbes",
  },
  {
    "value": prefix + "FRA_THA",
    "en": "Thann",
  },
  {
    "value": prefix + "FRA_TRS",
    "en": "Thiers",
  },
  {
    "value": prefix + "FRA_TVL",
    "en": "Thionville",
  },
  {
    "value": prefix + "FRA_THO",
    "en": "Thonon-les-Bains",
  },
  {
    "value": prefix + "FRA_THS",
    "en": "Thouars",
  },
  {
    "value": prefix + "FRA_TOG",
    "en": "Tourcoing",
  },
  {
    "value": prefix + "FRA_TUF",
    "en": "Tours",
  },
  {
    "value": prefix + "FRA_TRX",
    "en": "Trévoux",
  },
  {
    "value": prefix + "FRA_QYR",
    "en": "Troyes",
  },
  {
    "value": prefix + "PYF_UTU",
    "en": "Uturoa",
  },
  {
    "value": prefix + "WLF_WLS",
    "en": "Uvea",
  },
  {
    "value": prefix + "FRA_UZE",
    "en": "Uzès",
  },
  {
    "value": prefix + "FRA_VAF",
    "en": "Valence",
  },
  {
    "value": prefix + "FRA_VNE",
    "en": "Vannes",
  },
  {
    "value": prefix + "FRA_VER",
    "en": "Versailles",
  },
  {
    "value": prefix + "FRA_VEL",
    "en": "Vesoul",
  },
  {
    "value": prefix + "FRA_VHY",
    "en": "Vichy",
  },
  {
    "value": prefix + "FRA_VSS",
    "en": "Villefranche-sur-Saône",
  },
  {
    "value": prefix + "FRA_VIJ",
    "en": "Villejuif",
  },
  {
    "value": prefix + "FRA_VLX",
    "en": "Villeneuve-sur-Lot",
  },
  {
    "value": prefix + "FRA_VBN",
    "en": "Villeurbanne",
  },
  {
    "value": prefix + "FRA_VRS",
    "en": "Vire",
  },
  {
    "value": prefix + "FRA_NSS",
    "cs": "Neuilly-sur-Seine",
    "en": "Neuilly-sur-Seine",
  },
  {
    "value": prefix + "HUN_NOG",
    "en": "Nógrád",
  },
  {
    "value": prefix + "HUN_BEK",
    "en": "Békéscsaba",
  },
  {
    "value": prefix + "HUN_BES",
    "en": "Békés",
  },
  {
    "value": prefix + "HUN_BIC",
    "en": "Bicske",
  },
  {
    "value": prefix + "ESP_OVO",
    "cs": "Oviedo",
    "en": "Oviedo",
  },
  {
    "value": prefix + "ESP_SDR",
    "cs": "Santander",
    "en": "Santander",
  },
  {
    "value": prefix + "ESP_VIT",
    "cs": "Vitoria-Gasteiz",
    "en": "Vitoria-Gasteiz",
  },
  {
    "value": prefix + "ESP_LPA",
    "cs": "Las Palmas de Gran Canaria",
    "en": "Las Palmas",
  },
  {
    "value": prefix + "ESP_SCT",
    "cs": "Santa Cruz de Tenerife",
    "en": "Santa Cruz de Tenerife",
  },
  {
    "value": prefix + "ESP_CEU",
    "cs": "Ceuta",
    "en": "Ceuta",
  },
  {
    "value": prefix + "ESP_MLN",
    "cs": "Melilla",
    "en": "Melilla",
  },
  {
    "value": prefix + "AUT_RUS",
    "cs": "Rust",
    "en": "Rust",
  },
  {
    "value": prefix + "AUT_NAS",
    "cs": "Nezider",
    "en": "Neusiedl am See",
  },
  {
    "value": prefix + "AUT_MAT",
    "en": "Mattersburg",
  },
  {
    "value": prefix + "AUT_JDF",
    "en": "Jennersdorf",
  },
  {
    "value": prefix + "AUT_OBE",
    "cs": "Oberpullendorf",
    "en": "Oberpullendorf",
  },
  {
    "value": prefix + "AUT_GSS",
    "cs": "Güssing",
    "en": "Güssing",
  },
  {
    "value": prefix + "AUT_ATT",
    "cs": "Amstetten",
    "en": "Amstetten",
  },
  {
    "value": prefix + "AUT_WAF",
    "en": "Waidhofen an der Ybbs",
  },
  {
    "value": prefix + "AUT_OWT",
    "cs": "Oberwart",
    "en": "Oberwart",
  },
  {
    "value": prefix + "AUT_SBB",
    "en": "Scheibbs",
  },
  {
    "value": prefix + "AUT_MEL",
    "cs": "Medlík",
    "en": "Melk",
  },
  {
    "value": prefix + "AUT_LLF",
    "cs": "Lilienfeld",
    "en": "Lilienfeld",
  },
  {
    "value": prefix + "AUT_TLN",
    "cs": "Tulln an der Donau",
    "en": "Tulln",
  },
  {
    "value": prefix + "BEL_AND",
    "en": "Andenne",
  },
  {
    "value": prefix + "AUT_KAN",
    "cs": "Kremže",
    "en": "Krems an der Donau",
  },
  {
    "value": prefix + "AUT_BDN",
    "cs": "Baden",
    "en": "Baden",
  },
  {
    "value": prefix + "AUT_WNR",
    "cs": "Vídeňské Nové Město",
    "en": "Wiener Neustadt",
  },
  {
    "value": prefix + "AUT_BKL",
    "cs": "Most nad Litavou",
    "en": "Bruck an der Leitha",
  },
  {
    "value": prefix + "AUT_MOE",
    "cs": "Mödling",
    "en": "Mödling",
  },
  {
    "value": prefix + "AUT_NKN",
    "cs": "Neunkirchen",
    "en": "Neunkirchen",
  },
  {
    "value": prefix + "AUT_GMU",
    "cs": "Gmünd",
    "en": "Gmünd",
  },
  {
    "value": prefix + "AUT_HOR",
    "cs": "Horn",
    "en": "Horn",
  },
  {
    "value": prefix + "AUT_WAI",
    "cs": "Český Bejdov",
    "en": "Waidhofen an der Thaya",
  },
  {
    "value": prefix + "AUT_ZWT",
    "cs": "Světlá",
    "en": "Zwettl",
  },
  {
    "value": prefix + "AUT_HOL",
    "cs": "Holabrun",
    "en": "Hollabrunn",
  },
  {
    "value": prefix + "AUT_MIS",
    "cs": "Mistelbach an der Zaya",
    "en": "Mistelbach",
  },
  {
    "value": prefix + "AUT_GNF",
    "cs": "Gänserndorf",
    "en": "Gänserndorf",
  },
  {
    "value": prefix + "AUT_KBG",
    "cs": "Korneuburg",
    "en": "Korneuburg",
  },
  {
    "value": prefix + "AUT_VLH",
    "cs": "Villach",
    "en": "Villach",
  },
  {
    "value": prefix + "AUT_HPS",
    "cs": "Hermagor",
    "en": "Hermagor-Pressegger See",
  },
  {
    "value": prefix + "AUT_FKI",
    "cs": "Feldkirchen in Kärnten",
    "en": "Feldkirchen im Kärnten",
  },
  {
    "value": prefix + "AUT_SPI",
    "cs": "Spittal an der Drau",
    "en": "Spittal an der Drau",
  },
  {
    "value": prefix + "AUT_SVG",
    "cs": "Sankt Veit an der Glan",
    "en": "Sankt Veit an der Glan",
  },
  {
    "value": prefix + "AUT_VOT",
    "cs": "Völkermarkt",
    "en": "Völkermarkt",
  },
  {
    "value": prefix + "AUT_WOF",
    "cs": "Vlčí Hora",
    "en": "Wolfsberg",
  },
  {
    "value": prefix + "AUT_LZN",
    "cs": "Liezen",
    "en": "Liezen",
  },
  {
    "value": prefix + "AUT_BRU",
    "cs": "Bruck an der Mur",
    "en": "Bruck an der Mur",
  },
  {
    "value": prefix + "AUT_MZZ",
    "cs": "Mürzzuschlag",
    "en": "Mürzzuschlag",
  },
  {
    "value": prefix + "AUT_LBN",
    "cs": "Lubno",
    "en": "Leoben",
  },
  {
    "value": prefix + "AUT_HTA",
    "en": "Hartberg",
  },
  {
    "value": prefix + "AUT_FUF",
    "cs": "Fürstenfeld",
    "en": "Fürstenfeld",
  },
  {
    "value": prefix + "AUT_FED",
    "cs": "Feldbach",
    "en": "Feldbach",
  },
  {
    "value": prefix + "AUT_DEU",
    "cs": "Deutschlandsberg",
    "en": "Deutschlandsberg",
  },
  {
    "value": prefix + "AUT_LEI",
    "en": "Leibnitz",
  },
  {
    "value": prefix + "AUT_VTB",
    "cs": "Voitsberg",
    "en": "Voitsberg",
  },
  {
    "value": prefix + "AUT_JDN",
    "cs": "Judenburg",
    "en": "Judenburg",
  },
  {
    "value": prefix + "AUT_SLD",
    "cs": "Schladming",
    "en": "Schladming",
  },
  {
    "value": prefix + "AUT_BRA",
    "cs": "Braunau na Innu",
    "en": "Braunau am Inn",
  },
  {
    "value": prefix + "AUT_GIE",
    "cs": "Grieskirchen",
    "en": "Grieskirchen",
  },
  {
    "value": prefix + "AUT_RIK",
    "en": "Ried im Innkreis",
  },
  {
    "value": prefix + "AUT_SDG",
    "cs": "Schärding",
    "en": "Schärding",
  },
  {
    "value": prefix + "AUT_WLS",
    "cs": "Wels",
    "en": "Wels",
  },
  {
    "value": prefix + "AUT_EFR",
    "cs": "Eferding",
    "en": "Eferding",
  },
  {
    "value": prefix + "AUT_NEH",
    "en": "Neulengbach",
  },
  {
    "value": prefix + "AUT_PUF",
    "cs": "Purkersdorf",
    "en": "Purkersdorf",
  },
  {
    "value": prefix + "AUT_SHT",
    "cs": "Schwechat",
    "en": "Schwechat",
  },
  {
    "value": prefix + "AUT_KTU",
    "cs": "Klosterneuburg",
    "en": "Klosterneuburg",
  },
  {
    "value": prefix + "AUT_FSD",
    "cs": "Cáhlov",
    "en": "Freistadt",
  },
  {
    "value": prefix + "AUT_ROH",
    "cs": "Rohrbach",
    "en": "Rohrbach",
  },
  {
    "value": prefix + "AUT_PER",
    "cs": "Perg",
    "en": "Perg",
  },
  {
    "value": prefix + "AUT_TNQ",
    "cs": "Traun",
    "en": "Traun",
  },
  {
    "value": prefix + "AUT_SER",
    "cs": "Štýr",
    "en": "Steyr",
  },
  {
    "value": prefix + "AUT_KKM",
    "en": "Kirchdorf an der Krems",
  },
  {
    "value": prefix + "AUT_GDN",
    "cs": "Gmunden",
    "en": "Gmunden",
  },
  {
    "value": prefix + "AUT_VOC",
    "cs": "Vöcklabruck",
    "en": "Vöcklabruck",
  },
  {
    "value": prefix + "AUT_ICH",
    "cs": "Bad Ischl",
    "en": "Bad Ischl",
  },
  {
    "value": prefix + "AUT_TAM",
    "en": "Tamsweg",
  },
  {
    "value": prefix + "AUT_JOA",
    "cs": "Sankt Johann im Pongau",
    "en": "Sankt Johann im Pongau",
  },
  {
    "value": prefix + "AUT_ZAS",
    "cs": "Zell am See",
    "en": "Zell am See",
  },
  {
    "value": prefix + "AUT_HLL",
    "cs": "Hallein",
    "en": "Hallein",
  },
  {
    "value": prefix + "AUT_RTE",
    "cs": "Reutte",
    "en": "Reutte",
  },
  {
    "value": prefix + "AUT_LEZ",
    "cs": "Lienz",
    "en": "Lienz",
  },
  {
    "value": prefix + "AUT_IMZ",
    "cs": "Imst",
    "en": "Imst",
  },
  {
    "value": prefix + "AUT_LAN",
    "en": "Landeck",
  },
  {
    "value": prefix + "AUT_KIT",
    "cs": "Kitzbühel",
    "en": "Kitzbühel",
  },
  {
    "value": prefix + "AUT_KFS",
    "cs": "Kufstein",
    "en": "Kufstein",
  },
  {
    "value": prefix + "AUT_SCZ",
    "cs": "Schwaz",
    "en": "Schwaz",
  },
  {
    "value": prefix + "AUT_BLU",
    "cs": "Bludenec",
    "en": "Bludenz",
  },
  {
    "value": prefix + "BEL_ANL",
    "en": "Anderlecht",
  },
  {
    "value": prefix + "AUT_DOR",
    "cs": "Dornbirn",
    "en": "Dornbirn",
  },
  {
    "value": prefix + "AUT_FKT",
    "cs": "Feldkirch",
    "en": "Feldkirch",
  },
  {
    "value": prefix + "BEL_ODE",
    "en": "Auderghem",
  },
  {
    "value": prefix + "NLD_HRD",
    "en": "Harderwijk",
  },
  {
    "value": prefix + "NLD_HRV",
    "cs": "Heerenveen",
    "en": "Heerenveen",
  },
  {
    "value": prefix + "NLD_HLM",
    "en": "Helmond",
  },
  {
    "value": prefix + "NLD_HVS",
    "cs": "Hilversum",
    "en": "Hilversum",
  },
  {
    "value": prefix + "NLD_HFD",
    "en": "Hoofddorp",
  },
  {
    "value": prefix + "NLD_MEP",
    "en": "Meppel",
  },
  {
    "value": prefix + "NLD_OBG",
    "en": "Oostburg",
  },
  {
    "value": prefix + "NLD_OBL",
    "en": "Oud-Beijerland",
  },
  {
    "value": prefix + "NLD_SCI",
    "cs": "Schiedam",
    "en": "Schiedam",
  },
  {
    "value": prefix + "NLD_SIT",
    "en": "Sittard",
  },
  {
    "value": prefix + "NLD_SNK",
    "en": "Sneek",
  },
  {
    "value": prefix + "NLD_MIH",
    "en": "Middelharnis",
  },
  {
    "value": prefix + "NLD_STW",
    "en": "Steenwijk",
  },
  {
    "value": prefix + "NLD_TBO",
    "en": "Terborg",
  },
  {
    "value": prefix + "NLD_TNZ",
    "en": "Terneuzen",
  },
  {
    "value": prefix + "NLD_TIE",
    "en": "Tiel",
  },
  {
    "value": prefix + "NLD_ZBO",
    "en": "Zuidbroek",
  },
  {
    "value": prefix + "NLD_VDM",
    "en": "Veendam",
  },
  {
    "value": prefix + "NLD_VEN",
    "cs": "Venlo",
    "en": "Venlo",
  },
  {
    "value": prefix + "NLD_WGW",
    "cs": "Wageningen",
    "en": "Wageningen",
  },
  {
    "value": prefix + "NLD_WSC",
    "en": "Winschoten",
  },
  {
    "value": prefix + "GLP_BBR",
    "cs": "Basse-Terre",
    "en": "Basse Terre",
  },
  {
    "value": prefix + "FRA_CFR",
    "cs": "Caen",
    "en": "Caen",
  },
  {
    "value": prefix + "FRA_CME",
    "en": "Cagnes-sur-Mer",
  },
  {
    "value": prefix + "FRA_AGF",
    "cs": "Agen",
    "en": "Agen",
  },
  {
    "value": prefix + "FRA_QXB",
    "cs": "Aix-en-Provence",
    "en": "Aix-en-Provence",
  },
  {
    "value": prefix + "FRA_AXB",
    "cs": "Aix-les-Bains",
    "en": "Aix-les-Bains",
  },
  {
    "value": prefix + "FRA_ATV",
    "cs": "Albertville",
    "en": "Albertville",
  },
  {
    "value": prefix + "FRA_BBI",
    "cs": "Albi",
    "en": "Albi",
  },
  {
    "value": prefix + "FRA_ALE",
    "cs": "Alençon",
    "en": "Alençon",
  },
  {
    "value": prefix + "FRA_ALS",
    "cs": "Alès",
    "en": "Alès",
  },
  {
    "value": prefix + "FRA_AMI",
    "cs": "Amiens",
    "en": "Amiens",
  },
  {
    "value": prefix + "FRA_NCY",
    "cs": "Annecy",
    "en": "Annecy",
  },
  {
    "value": prefix + "FRA_ANT",
    "cs": "Antibes",
    "en": "Antibes",
  },
  {
    "value": prefix + "FRA_AGX",
    "cs": "Argentan",
    "en": "Argentan",
  },
  {
    "value": prefix + "FRA_AUC",
    "cs": "Auch",
    "en": "Auch",
  },
  {
    "value": prefix + "FRA_ASB",
    "cs": "Aulnay-sous-Bois",
    "en": "Aulnay-sous-Bois",
  },
  {
    "value": prefix + "FRA_AUR",
    "cs": "Aurillac",
    "en": "Aurillac",
  },
  {
    "value": prefix + "FRA_ASH",
    "cs": "Avesnes-sur-Helpe",
    "en": "Avesnes-sur-Helpe",
  },
  {
    "value": prefix + "FRA_BLD",
    "cs": "Bar-le-Duc",
    "en": "Bar-le-Duc",
  },
  {
    "value": prefix + "FRA_BIA",
    "cs": "Bastia",
    "en": "Bastia",
  },
  {
    "value": prefix + "FRA_BVA",
    "cs": "Beauvais",
    "en": "Beauvais",
  },
  {
    "value": prefix + "FRA_BOR",
    "cs": "Belfort",
    "en": "Belfort",
  },
  {
    "value": prefix + "FRA_BLX",
    "cs": "Belley",
    "en": "Belley",
  },
  {
    "value": prefix + "FRA_EGC",
    "cs": "Bergerac",
    "en": "Bergerac",
  },
  {
    "value": prefix + "FRA_BER",
    "cs": "Bernay",
    "en": "Bernay",
  },
  {
    "value": prefix + "FRA_BET",
    "cs": "Béthune",
    "en": "Béthune",
  },
  {
    "value": prefix + "FRA_BLO",
    "cs": "Blois",
    "en": "Blois",
  },
  {
    "value": prefix + "FRA_BOB",
    "cs": "Bobigny",
    "en": "Bobigny",
  },
  {
    "value": prefix + "FRA_BOL",
    "cs": "Buloň",
    "en": "Boulogne-sur-Mer",
  },
  {
    "value": prefix + "FRA_BEB",
    "en": "Bourg-en-Bresse",
  },
  {
    "value": prefix + "FRA_BGJ",
    "en": "Bourgoin-Jallieu",
  },
  {
    "value": prefix + "FRA_RSE",
    "en": "Bressuire",
  },
  {
    "value": prefix + "FRA_BES",
    "en": "Brest",
  },
  {
    "value": prefix + "FRA_RIY",
    "en": "Briey",
  },
  {
    "value": prefix + "SLV_CUS",
    "en": "Antiguo Cuscatlán",
  },
  {
    "value": prefix + "HND_TGU",
    "cs": "Tegucigalpa",
    "en": "Tegucigalpa",
  },
  {
    "value": prefix + "IRQ_BGW",
    "cs": "Bagdád",
    "en": "Baghdad",
  },
  {
    "value": prefix + "ARE_AUH",
    "cs": "Abú Zabí",
    "en": "Abu Dhabi",
  },
  {
    "value": prefix + "FRA_ZAO",
    "cs": "Cahors",
    "en": "Cahors",
  },
  {
    "value": prefix + "FRA_CQF",
    "cs": "Calais",
    "en": "Calais",
  },
  {
    "value": prefix + "FRA_CMB",
    "cs": "Cambrai",
    "en": "Cambrai",
  },
  {
    "value": prefix + "FRA_CRP",
    "en": "Carpentras",
  },
  {
    "value": prefix + "FRA_CTN",
    "en": "Castelsarrasin",
  },
  {
    "value": prefix + "FRA_CAT",
    "en": "Castres",
  },
  {
    "value": prefix + "FRA_CSM",
    "cs": "Châlons-en-Champagne",
    "en": "Châlons-en-Champagne",
  },
  {
    "value": prefix + "FRA_CSS",
    "cs": "Chalon-sur-Saône",
    "en": "Chalon-sur-Saône",
  },
  {
    "value": prefix + "FRA_CHM",
    "cs": "Charleville-Mézières",
    "en": "Charleville-Mézières",
  },
  {
    "value": prefix + "CZE_PLZ",
    "cs": "Plzeň",
    "en": "Plzeň",
  },
  {
    "value": prefix + "ITA_MTR",
    "cs": "Matera",
    "en": "Matera",
  },
  {
    "value": prefix + "NLD_LWR",
    "cs": "Leeuwarden",
    "en": "Leeuwarden",
  },
  {
    "value": prefix + "PRT_GUI",
    "cs": "Guimarães",
    "en": "Guimarães",
  },
  {
    "value": prefix + "SVN_MBX",
    "cs": "Maribor",
    "en": "Maribor",
  },
  {
    "value": prefix + "BEL_BCI",
    "en": "Binche",
  },
  {
    "value": prefix + "BEL_MLO",
    "en": "Mol",
  },
  {
    "value": prefix + "BEL_LKN",
    "cs": "Laeken",
    "en": "Laeken",
  },
  {
    "value": prefix + "GBR_CUH",
    "en": "Culham",
  },
  {
    "value": prefix + "NLD_ZVB",
    "en": "Zevenbergen",
  },
  {
    "value": prefix + "NLD_ZIE",
    "en": "Zierikzee",
  },
  {
    "value": prefix + "HUN_BTF",
    "en": "Berettyóújfalu",
  },
  {
    "value": prefix + "HUN_CGD",
    "en": "Csongrád",
  },
  {
    "value": prefix + "HUN_DEB",
    "cs": "Debrecín",
    "en": "Debrecen",
  },
  {
    "value": prefix + "HUN_DUU",
    "cs": "Dunaújváros",
    "en": "Dunaújváros",
  },
  {
    "value": prefix + "HUN_EGR",
    "cs": "Eger",
    "en": "Eger",
  },
  {
    "value": prefix + "HUN_HAA",
    "cs": "Érd",
    "en": "Érd",
  },
  {
    "value": prefix + "HUN_GYO",
    "en": "Győr",
  },
  {
    "value": prefix + "HUN_HDM",
    "en": "Hódmezővásárhely",
  },
  {
    "value": prefix + "HUN_HEV",
    "en": "Heves",
  },
  {
    "value": prefix + "HUN_KCS",
    "en": "Kecskemét",
  },
  {
    "value": prefix + "HUN_KPS",
    "en": "Kaposvár",
  },
  {
    "value": prefix + "HUN_MCQ",
    "en": "Miskolc",
  },
  {
    "value": prefix + "HUN_NGH",
    "en": "Nyíregyháza",
  },
  {
    "value": prefix + "HUN_NGY",
    "en": "Nagykanizsa",
  },
  {
    "value": prefix + "HUN_SAL",
    "en": "Salgótarján",
  },
  {
    "value": prefix + "HUN_SOP",
    "en": "Sopron",
  },
  {
    "value": prefix + "HUN_SZE",
    "en": "Szeged",
  },
  {
    "value": prefix + "HUN_SZK",
    "en": "Szekszárd",
  },
  {
    "value": prefix + "HUN_SZL",
    "en": "Szolnok",
  },
  {
    "value": prefix + "HUN_SZR",
    "en": "Székesfehérvár",
  },
  {
    "value": prefix + "HUN_SZY",
    "en": "Szombathely",
  },
  {
    "value": prefix + "HUN_TAA",
    "en": "Tatabánya",
  },
  {
    "value": prefix + "HUN_TNA",
    "cs": "Tolna",
    "en": "Tolna",
  },
  {
    "value": prefix + "HUN_VZP",
    "en": "Veszprém",
  },
  {
    "value": prefix + "HUN_ZER",
    "en": "Zalaegerszeg",
  },
  {
    "value": prefix + "MLT_ATT",
    "en": "Attard",
  },
  {
    "value": prefix + "MLT_BAL",
    "en": "Balzan",
  },
  {
    "value": prefix + "MLT_BIR",
    "en": "Birkirkara",
  },
  {
    "value": prefix + "MLT_BZB",
    "en": "Birżebbuġa",
  },
  {
    "value": prefix + "MLT_COS",
    "en": "Cospicua",
  },
  {
    "value": prefix + "MLT_DIN",
    "en": "Dingli",
  },
  {
    "value": prefix + "MLT_FGU",
    "en": "Fgura",
  },
  {
    "value": prefix + "MLT_FON",
    "en": "Fontana",
  },
  {
    "value": prefix + "MLT_FLO",
    "en": "Floriana",
  },
  {
    "value": prefix + "MLT_GHB",
    "en": "Għarb",
  },
  {
    "value": prefix + "MLT_GHJ",
    "en": "Għajnsielem",
  },
  {
    "value": prefix + "MLT_GHI",
    "en": "Għasri",
  },
  {
    "value": prefix + "MLT_GUD",
    "en": "Gudja",
  },
  {
    "value": prefix + "MLT_GXQ",
    "en": "Għaxaq",
  },
  {
    "value": prefix + "MLT_GZI",
    "en": "Gżira",
  },
  {
    "value": prefix + "MLT_HRN",
    "en": "Hamrun",
  },
  {
    "value": prefix + "MLT_IKL",
    "en": "Iklin",
  },
  {
    "value": prefix + "MLT_KAL",
    "en": "Kalkara",
  },
  {
    "value": prefix + "MLT_KER",
    "en": "Kerċem",
  },
  {
    "value": prefix + "MLT_KIR",
    "en": "Kirkop",
  },
  {
    "value": prefix + "MLT_LIJ",
    "en": "Lija",
  },
  {
    "value": prefix + "MLT_LUQ",
    "en": "Luqa",
  },
  {
    "value": prefix + "MLT_MAR",
    "en": "Marsaxlokk",
  },
  {
    "value": prefix + "MLT_MDI",
    "en": "Mdina",
  },
  {
    "value": prefix + "MLT_MEL",
    "en": "Mellieħa",
  },
  {
    "value": prefix + "MLT_MGR",
    "en": "Mgarr",
  },
  {
    "value": prefix + "MLT_MOA",
    "en": "Mosta",
  },
  {
    "value": prefix + "MLT_MQA",
    "en": "Mqabba",
  },
  {
    "value": prefix + "MLT_MSA",
    "en": "Marsa",
  },
  {
    "value": prefix + "MLT_MSD",
    "en": "Msida",
  },
  {
    "value": prefix + "MLT_MSS",
    "en": "Marsaskala",
  },
  {
    "value": prefix + "MLT_MTA",
    "en": "Mtarfa",
  },
  {
    "value": prefix + "MLT_MUN",
    "en": "Munxar",
  },
  {
    "value": prefix + "MLT_NAD",
    "en": "Nadur",
  },
  {
    "value": prefix + "MLT_NXR",
    "en": "Naxxar",
  },
  {
    "value": prefix + "MLT_PAO",
    "en": "Paola",
  },
  {
    "value": prefix + "MLT_PEM",
    "en": "Pembroke",
  },
  {
    "value": prefix + "MLT_PTA",
    "en": "Pietà",
  },
  {
    "value": prefix + "MLT_QAL",
    "en": "Qala",
  },
  {
    "value": prefix + "MLT_QRD",
    "en": "Qrendi",
  },
  {
    "value": prefix + "MLT_RAB",
    "en": "Rabat",
  },
  {
    "value": prefix + "MLT_RMI",
    "en": "Qormi",
  },
  {
    "value": prefix + "MLT_SAF",
    "en": "Safi",
  },
  {
    "value": prefix + "MLT_SAN",
    "en": "Sannat",
  },
  {
    "value": prefix + "MLT_SEN",
    "en": "Senglea",
  },
  {
    "value": prefix + "MLT_SGG",
    "en": "Siġġiewi",
  },
  {
    "value": prefix + "MLT_GHA",
    "en": "Għargħur",
  },
  {
    "value": prefix + "MLT_SGW",
    "en": "Saint John",
  },
  {
    "value": prefix + "MLT_SJN",
    "en": "Saint Julian",
  },
  {
    "value": prefix + "MLT_SLM",
    "en": "Sliema",
  },
  {
    "value": prefix + "MLT_SLU",
    "en": "Saint Lucia",
  },
  {
    "value": prefix + "MLT_SLW",
    "en": "Saint Lawrence",
  },
  {
    "value": prefix + "MLT_SPB",
    "en": "Saint Paul's Bay",
  },
  {
    "value": prefix + "MLT_STV",
    "en": "Saint Venera",
  },
  {
    "value": prefix + "MLT_SWI",
    "en": "Swieqi",
  },
  {
    "value": prefix + "MLT_TAX",
    "en": "Ta' Xbiex",
  },
  {
    "value": prefix + "MLT_VTR",
    "en": "Victoria",
  },
  {
    "value": prefix + "MLT_XAG",
    "en": "Xgħajra",
  },
  {
    "value": prefix + "MLT_XGA",
    "en": "Xagħra",
  },
  {
    "value": prefix + "MLT_XWK",
    "en": "Xewkija",
  },
  {
    "value": prefix + "MLT_ZBR",
    "en": "Żabbar",
  },
  {
    "value": prefix + "MLT_ZEB",
    "en": "Żebbuġ",
  },
  {
    "value": prefix + "MLT_ZEG",
    "en": "Ħaż‐Żebbuġ",
  },
  {
    "value": prefix + "MLT_ZTN",
    "en": "Żejtun",
  },
  {
    "value": prefix + "MLT_ZUR",
    "en": "Żurrieq",
  },
  {
    "value": prefix + "MLT_TAR",
    "en": "Tarxien",
  },
  {
    "value": prefix + "MLT_5GA",
    "en": "Vittoriosa",
  },
  {
    "value": prefix + "PCN_ADM",
    "cs": "Adamstown",
    "en": "Adamstown",
  },
  {
    "value": prefix + "GUM_AGA",
    "cs": "Hagåtña",
    "en": "Agaña",
  },
  {
    "value": prefix + "ESH_EAI",
    "cs": "Al-Ajún",
    "en": "Laayoune",
  },
  {
    "value": prefix + "NIU_ALO",
    "cs": "Alofi",
    "en": "Alofi",
  },
  {
    "value": prefix + "WSM_APW",
    "cs": "Apia",
    "en": "Apia",
  },
  {
    "value": prefix + "TKM_ASB",
    "cs": "Ašchabad",
    "en": "Ashgabat",
  },
  {
    "value": prefix + "COK_AVA",
    "cs": "Avarua",
    "en": "Avarua",
  },
  {
    "value": prefix + "BRN_BWN",
    "cs": "Bandar Seri Begawan",
    "en": "Bandar Seri Begawan",
  },
  {
    "value": prefix + "KNA_BAS",
    "cs": "Basseterre",
    "en": "Basseterre",
  },
  {
    "value": prefix + "BLZ_BMP",
    "cs": "Belmopan",
    "en": "Belmopan",
  },
  {
    "value": prefix + "LCA_CAS",
    "cs": "Castries",
    "en": "Castries",
  },
  {
    "value": prefix + "VIR_CHA",
    "cs": "Charlotte Amalie",
    "en": "Charlotte Amalie",
  },
  {
    "value": prefix + "TCA_COT",
    "cs": "Cockburn Town",
    "en": "Cockburn Town",
  },
  {
    "value": prefix + "TZA_DOD",
    "cs": "Dodoma",
    "en": "Dodoma",
  },
  {
    "value": prefix + "QAT_DOH",
    "cs": "Dohá",
    "en": "Doha",
  },
  {
    "value": prefix + "IMN_DGS",
    "cs": "Douglas",
    "en": "Douglas",
  },
  {
    "value": prefix + "CXR_FFC",
    "cs": "Flying Fish Cove",
    "en": "Flying Fish Cove",
  },
  {
    "value": prefix + "TUV_FUN",
    "cs": "Funafuti",
    "en": "Funafuti",
  },
  {
    "value": prefix + "CYM_GEC",
    "cs": "George Town",
    "en": "George Town",
  },
  {
    "value": prefix + "BLM_SBH",
    "cs": "Gustavia",
    "en": "Gustavia",
  },
  {
    "value": prefix + "BMU_BDA",
    "cs": "Hamilton",
    "en": "Hamilton",
  },
  {
    "value": prefix + "SHN_SHN",
    "cs": "Jamestown",
    "en": "Jamestown",
  },
  {
    "value": prefix + "SSD_JUB",
    "cs": "Džuba",
    "en": "Juba",
  },
  {
    "value": prefix + "SGS_GRV",
    "cs": "King Edward Point",
    "en": "King Edward Point",
  },
  {
    "value": prefix + "NFK_NLK",
    "cs": "Kingston",
    "en": "Kingston",
  },
  {
    "value": prefix + "VCT_KTN",
    "cs": "Kingstown",
    "en": "Kingstown",
  },
  {
    "value": prefix + "KWT_KWI",
    "cs": "Kuvajt",
    "en": "Kuwait City",
  },
  {
    "value": prefix + "SJM_LYR",
    "cs": "Longyearbyen",
    "en": "Longyearbyen",
  },
  {
    "value": prefix + "SJM_OLO",
    "cs": "Olonkinbyen",
    "en": "Olonkinbyen",
  },
  {
    "value": prefix + "MHL_MAJ",
    "cs": "Majuro",
    "en": "Majuro",
  },
  {
    "value": prefix + "MDV_MLE",
    "cs": "Male",
    "en": "Malé",
  },
  {
    "value": prefix + "BHR_AMH",
    "cs": "Manáma",
    "en": "Manama",
  },
  {
    "value": prefix + "PHL_MNL",
    "cs": "Manila",
    "en": "Manila",
  },
  {
    "value": prefix + "MAF_MAR",
    "cs": "Marigot",
    "en": "Marigot",
  },
  {
    "value": prefix + "WLF_MAU",
    "cs": "Mata-Utu",
    "en": "Mata-Utu",
  },
  {
    "value": prefix + "PLW_MKK",
    "cs": "Melekeok",
    "en": "Melekeok",
  },
  {
    "value": prefix + "MCO_MON",
    "cs": "Monako",
    "en": "Monaco",
  },
  {
    "value": prefix + "COM_YVA",
    "cs": "Moroni",
    "en": "Moroni",
  },
  {
    "value": prefix + "OMN_MCT",
    "cs": "Maskat",
    "en": "Muscat",
  },
  {
    "value": prefix + "MMR_NPD",
    "cs": "Nepjito",
    "en": "Naypyidaw",
  },
  {
    "value": prefix + "TON_TBU",
    "cs": "Nuku’alofa",
    "en": "Nuku’alofa",
  },
  {
    "value": prefix + "GRL_GOH",
    "cs": "Nuuk",
    "en": "Nuuk",
  },
  {
    "value": prefix + "ABW_ORJ",
    "cs": "Oranjestad",
    "en": "Oranjestad",
  },
  {
    "value": prefix + "ASM_PPG",
    "cs": "Pago Pago",
    "en": "Pago Pago",
  },
  {
    "value": prefix + "FSM_PLK",
    "cs": "Palikir",
    "en": "Palikir",
  },
  {
    "value": prefix + "SXM_PHI",
    "cs": "Philipsburg",
    "en": "Philipsburg",
  },
  {
    "value": prefix + "MSR_PLY",
    "cs": "Plymouth",
    "en": "Plymouth",
  },
  {
    "value": prefix + "MSR_BRD",
    "en": "Brades",
  },
  {
    "value": prefix + "VGB_RAD",
    "cs": "Road Town",
    "en": "Road Town",
  },
  {
    "value": prefix + "DMA_RSU",
    "cs": "Roseau",
    "en": "Roseau",
  },
  {
    "value": prefix + "MNP_SPN",
    "cs": "Saipan",
    "en": "Saipan",
  },
  {
    "value": prefix + "PRI_SJU",
    "cs": "San Juan",
    "en": "San Juan",
  },
  {
    "value": prefix + "STP_STM",
    "cs": "São Tomé",
    "en": "São Tomé",
  },
  {
    "value": prefix + "GRD_STG",
    "cs": "St George’s",
    "en": "St George’s",
  },
  {
    "value": prefix + "JEY_STH",
    "cs": "St Helier",
    "en": "St Helier",
  },
  {
    "value": prefix + "ATG_SJO",
    "cs": "St John’s",
    "en": "St John’s",
  },
  {
    "value": prefix + "GGY_SPT",
    "cs": "St Peter Port",
    "en": "St Peter Port",
  },
  {
    "value": prefix + "FLK_PSY",
    "cs": "Stanley",
    "en": "Stanley",
  },
  {
    "value": prefix + "BOL_SRE",
    "cs": "Sucre",
    "en": "Sucre",
  },
  {
    "value": prefix + "KIR_TRW",
    "cs": "Tarawa",
    "en": "Tarawa",
  },
  {
    "value": prefix + "IRN_THR",
    "cs": "Teherán",
    "en": "Tehran",
  },
  {
    "value": prefix + "AIA_VAL",
    "cs": "The Valley",
    "en": "The Valley",
  },
  {
    "value": prefix + "BTN_THI",
    "cs": "Thimphu",
    "en": "Thimphu",
  },
  {
    "value": prefix + "LIE_VDZ",
    "cs": "Vaduz",
    "en": "Vaduz",
  },
  {
    "value": prefix + "SYC_POV",
    "cs": "Victoria",
    "en": "Victoria",
  },
  {
    "value": prefix + "CCK_WIL",
    "cs": "West Island",
    "en": "West Island",
  },
  {
    "value": prefix + "CUW_WIL",
    "cs": "Willemstad",
    "en": "Willemstad",
  },
  {
    "value": prefix + "NRU_YRN",
    "cs": "Yaren",
    "en": "Yaren",
  },
  {
    "value": prefix + "CAN_DAR",
    "en": "Dartmouth",
  },
  {
    "value": prefix + "BEN_PTN",
    "cs": "Porto Novo",
    "en": "Porto Novo",
  },
  {
    "value": prefix + "LTU_AYS",
    "cs": "Alytus",
    "en": "Alytus",
  },
  {
    "value": prefix + "LTU_KLJ",
    "cs": "Klaipėda",
    "en": "Klaipėda",
  },
  {
    "value": prefix + "LTU_KUN",
    "cs": "Kaunas",
    "en": "Kaunas",
  },
  {
    "value": prefix + "LTU_MJP",
    "cs": "Marijampolė",
    "en": "Marijampolė",
  },
  {
    "value": prefix + "LTU_PNV",
    "cs": "Panevėžys",
    "en": "Panevėžys",
  },
  {
    "value": prefix + "LTU_SQQ",
    "cs": "Šiauliai",
    "en": "Šiauliai",
  },
  {
    "value": prefix + "LTU_TAU",
    "cs": "Tauragė",
    "en": "Tauragė",
  },
  {
    "value": prefix + "LTU_TEL",
    "cs": "Телшяй",
    "en": "Telšiai",
  },
  {
    "value": prefix + "LTU_UTA",
    "cs": "Utena",
    "en": "Utena",
  },
  {
    "value": prefix + "LVA_ZRA",
    "en": "Ādaži",
  },
  {
    "value": prefix + "LVA_AGL",
    "en": "Aglona",
  },
  {
    "value": prefix + "LVA_AIZ",
    "cs": "Aizkraukle",
    "en": "Aizkraukle",
  },
  {
    "value": prefix + "LVA_APE",
    "cs": "Aizpute",
    "en": "Aizpute",
  },
  {
    "value": prefix + "LVA_AKI",
    "cs": "Aknīste",
    "en": "Aknīste",
  },
  {
    "value": prefix + "LVA_ALJ",
    "cs": "Aloja",
    "en": "Aloja",
  },
  {
    "value": prefix + "LVA_6LV",
    "en": "Alsunga",
  },
  {
    "value": prefix + "LVA_ASE",
    "cs": "Alūksne",
    "en": "Alūksne",
  },
  {
    "value": prefix + "LVA_AUC",
    "cs": "Auce",
    "en": "Auce",
  },
  {
    "value": prefix + "LVA_B9G",
    "cs": "Baldone",
    "en": "Baldone",
  },
  {
    "value": prefix + "LVA_BLN",
    "en": "Baltinava",
  },
  {
    "value": prefix + "LVA_BAL",
    "cs": "Balvi",
    "en": "Balvi",
  },
  {
    "value": prefix + "LVA_BAU",
    "cs": "Bauska",
    "en": "Bauska",
  },
  {
    "value": prefix + "LVA_BRC",
    "cs": "Brocēni",
    "en": "Brocēni",
  },
  {
    "value": prefix + "LVA_BRT",
    "en": "Burtnieki",
  },
  {
    "value": prefix + "LVA_BRK",
    "en": "Burtnieki",
  },
  {
    "value": prefix + "LVA_H5D",
    "en": "Carnikava",
  },
  {
    "value": prefix + "LVA_CES",
    "cs": "Cēsis",
    "en": "Cēsis",
  },
  {
    "value": prefix + "LVA_CSV",
    "cs": "Cesvaine",
    "en": "Cesvaine",
  },
  {
    "value": prefix + "LVA_CBL",
    "en": "Cibla",
  },
  {
    "value": prefix + "LVA_DGD",
    "cs": "Dagda",
    "en": "Dagda",
  },
  {
    "value": prefix + "LVA_DGP",
    "cs": "Daugavpils",
    "en": "Daugavpils",
  },
  {
    "value": prefix + "LVA_DOB",
    "en": "Dobele",
  },
  {
    "value": prefix + "LVA_DUN",
    "en": "Dundaga",
  },
  {
    "value": prefix + "LVA_DRB",
    "cs": "Durbe",
    "en": "Durbe",
  },
  {
    "value": prefix + "LVA_EGE",
    "en": "Engure",
  },
  {
    "value": prefix + "LVA_ERG",
    "en": "Ērgļi",
  },
  {
    "value": prefix + "LVA_GBA",
    "cs": "Grobiņa",
    "en": "Grobiņa",
  },
  {
    "value": prefix + "LVA_GUL",
    "cs": "Gulbene",
    "en": "Gulbene",
  },
  {
    "value": prefix + "LVA_ICV",
    "en": "Iecava",
  },
  {
    "value": prefix + "LVA_IKK",
    "en": "Ikšķile",
  },
  {
    "value": prefix + "LVA_ICK",
    "en": "Inčukalns",
  },
  {
    "value": prefix + "LVA_JAU",
    "en": "Jaunauce",
  },
  {
    "value": prefix + "LVA_JAP",
    "en": "Jaunpagasts",
  },
  {
    "value": prefix + "LVA_JNJ",
    "cs": "Jaunjelgava",
    "en": "Jaunjelgava",
  },
  {
    "value": prefix + "LVA_JNP",
    "en": "Jaunpiebalga",
  },
  {
    "value": prefix + "LVA_JPL",
    "en": "Jaunpils",
  },
  {
    "value": prefix + "LVA_JPS",
    "cs": "Jēkabpils",
    "en": "Jēkabpils",
  },
  {
    "value": prefix + "LVA_JGA",
    "cs": "Jelgava",
    "en": "Jelgava",
  },
  {
    "value": prefix + "LVA_KDV",
    "cs": "Kandava",
    "en": "Kandava",
  },
  {
    "value": prefix + "LVA_UTY",
    "cs": "Kārsava",
    "en": "Kārsava",
  },
  {
    "value": prefix + "LVA_KGM",
    "cs": "Ķegums",
    "en": "Ķegums",
  },
  {
    "value": prefix + "LVA_KKV",
    "en": "Ķekava",
  },
  {
    "value": prefix + "LVA_KOC",
    "en": "Kocēni",
  },
  {
    "value": prefix + "LVA_ZKE",
    "en": "Koknese",
  },
  {
    "value": prefix + "LVA_KRA",
    "cs": "Krāslava",
    "en": "Krāslava",
  },
  {
    "value": prefix + "LVA_KRU",
    "en": "Krustpils",
  },
  {
    "value": prefix + "LVA_KDA",
    "cs": "Kuldīga",
    "en": "Kuldīga",
  },
  {
    "value": prefix + "LVA_LVD",
    "cs": "Lielvārde",
    "en": "Lielvārde",
  },
  {
    "value": prefix + "LVA_LPX",
    "cs": "Libava",
    "en": "Liepāja",
  },
  {
    "value": prefix + "LVA_LGT",
    "cs": "Līgatne",
    "en": "Līgatne",
  },
  {
    "value": prefix + "LVA_LBZ",
    "cs": "Limbaži",
    "en": "Limbaži",
  },
  {
    "value": prefix + "LVA_LVI",
    "cs": "Līvāni",
    "en": "Līvāni",
  },
  {
    "value": prefix + "LVA_LBN",
    "cs": "Lubāna",
    "en": "Lubāna",
  },
  {
    "value": prefix + "LVA_BNH",
    "cs": "Ludza",
    "en": "Ludza",
  },
  {
    "value": prefix + "LVA_MAD",
    "cs": "Madona",
    "en": "Madona",
  },
  {
    "value": prefix + "LVA_MPS",
    "en": "Mālpils",
  },
  {
    "value": prefix + "LVA_ZVT",
    "en": "Mārupe",
  },
  {
    "value": prefix + "LVA_MZC",
    "cs": "Mazsalaca",
    "en": "Mazsalaca",
  },
  {
    "value": prefix + "LVA_MRX",
    "en": "Mērsrags",
  },
  {
    "value": prefix + "LVA_NKS",
    "en": "Naukšēni",
  },
  {
    "value": prefix + "LVA_NRT",
    "en": "Nereta",
  },
  {
    "value": prefix + "LVA_NCA",
    "en": "Nīca",
  },
  {
    "value": prefix + "LVA_ORE",
    "cs": "Ogre",
    "en": "Ogre",
  },
  {
    "value": prefix + "LVA_OLA",
    "cs": "Olaine",
    "en": "Olaine",
  },
  {
    "value": prefix + "LVA_D7G",
    "en": "Ozolnieki",
  },
  {
    "value": prefix + "LVA_PVT",
    "cs": "Pāvilosta",
    "en": "Pāvilosta",
  },
  {
    "value": prefix + "LVA_PVN",
    "cs": "Pļaviņas",
    "en": "Pļaviņas",
  },
  {
    "value": prefix + "LVA_PRE",
    "cs": "Preiļi",
    "en": "Preiļi",
  },
  {
    "value": prefix + "LVA_PKL",
    "cs": "Priekule",
    "en": "Priekule",
  },
  {
    "value": prefix + "LVA_PKU",
    "en": "Priekuļi",
  },
  {
    "value": prefix + "LVA_RNA",
    "en": "Rauna",
  },
  {
    "value": prefix + "LVA_REZ",
    "cs": "Rēzekne",
    "en": "Rēzekne",
  },
  {
    "value": prefix + "LVA_RBN",
    "en": "Riebiņi",
  },
  {
    "value": prefix + "LVA_ROJ",
    "en": "Roja",
  },
  {
    "value": prefix + "LVA_RPZ",
    "en": "Ropaži",
  },
  {
    "value": prefix + "LVA_ZRU",
    "en": "Rucava",
  },
  {
    "value": prefix + "LVA_RGJ",
    "en": "Rugāji",
  },
  {
    "value": prefix + "LVA_RJN",
    "cs": "Rūjiena",
    "en": "Rūjiena",
  },
  {
    "value": prefix + "LVA_RDL",
    "en": "Rundalė",
  },
  {
    "value": prefix + "LVA_SLA",
    "en": "Sala",
  },
  {
    "value": prefix + "LVA_SAL",
    "en": "Salacgrīva",
  },
  {
    "value": prefix + "LVA_SPS",
    "cs": "Salaspils",
    "en": "Salaspils",
  },
  {
    "value": prefix + "LVA_SDS",
    "cs": "Saldus",
    "en": "Saldus",
  },
  {
    "value": prefix + "LVA_SKT",
    "cs": "Saulkrasti",
    "en": "Saulkrasti",
  },
  {
    "value": prefix + "LVA_ZSA",
    "cs": "Seda",
    "en": "Seda",
  },
  {
    "value": prefix + "LVA_SEJ",
    "en": "Sēja",
  },
  {
    "value": prefix + "LVA_SGD",
    "cs": "Sigulda",
    "en": "Sigulda",
  },
  {
    "value": prefix + "LVA_SKR",
    "en": "Skrīveri",
  },
  {
    "value": prefix + "LVA_SRD",
    "cs": "Skrunda",
    "en": "Skrunda",
  },
  {
    "value": prefix + "LVA_STE",
    "cs": "Smiltene",
    "en": "Smiltene",
  },
  {
    "value": prefix + "LVA_STO",
    "en": "Stopiņi",
  },
  {
    "value": prefix + "LVA_STC",
    "cs": "Strenči",
    "en": "Strenči",
  },
  {
    "value": prefix + "LVA_TSI",
    "cs": "Talsi",
    "en": "Talsi",
  },
  {
    "value": prefix + "LVA_TVT",
    "en": "Tērvete",
  },
  {
    "value": prefix + "LVA_TRV",
    "en": "Tērvete",
  },
  {
    "value": prefix + "LVA_TKM",
    "cs": "Tukums",
    "en": "Tukums",
  },
  {
    "value": prefix + "LVA_VND",
    "en": "Vaiņode",
  },
  {
    "value": prefix + "LVA_VAL",
    "cs": "Valka",
    "en": "Valka",
  },
  {
    "value": prefix + "LVA_VIA",
    "cs": "Valmiera",
    "en": "Valmiera",
  },
  {
    "value": prefix + "LVA_VKN",
    "cs": "Varakļāni",
    "en": "Varakļāni",
  },
  {
    "value": prefix + "LVA_VRK",
    "en": "Vārkava",
  },
  {
    "value": prefix + "LVA_VKV",
    "en": "Vārkava",
  },
  {
    "value": prefix + "LVA_VBG",
    "en": "Vecpiebalga",
  },
  {
    "value": prefix + "LVA_VCK",
    "en": "Vecumnieki",
  },
  {
    "value": prefix + "LVA_VMK",
    "en": "Vecumnieki",
  },
  {
    "value": prefix + "LVA_VNT",
    "cs": "Ventspils",
    "en": "Ventspils",
  },
  {
    "value": prefix + "LVA_VST",
    "cs": "Viesīte",
    "en": "Viesīte",
  },
  {
    "value": prefix + "LVA_VIL",
    "cs": "Viļaka",
    "en": "Viļaka",
  },
  {
    "value": prefix + "LVA_VLN",
    "cs": "Viļāni",
    "en": "Viļāni",
  },
  {
    "value": prefix + "LVA_ZLP",
    "cs": "Zilupe",
    "en": "Zilupe",
  },
  {
    "value": prefix + "FRA_SXD",
    "en": "Sophia Antipolis",
  },
  {
    "value": prefix + "AUT_VOR",
    "en": "Bezau",
  },
  {
    "value": prefix + "AUT_BBG",
    "en": "Bleiburg",
  },
  {
    "value": prefix + "AUT_EKV",
    "en": "Eisenkappel-Vellach",
  },
  {
    "value": prefix + "AUT_FLH",
    "en": "Ferlach",
  },
  {
    "value": prefix + "AUT_MTH",
    "en": "Mattighofen",
  },
  {
    "value": prefix + "AUT_MUR",
    "en": "Murau",
  },
  {
    "value": prefix + "AUT_NWS",
    "en": "Neumarkt am Wallersee",
  },
  {
    "value": prefix + "AUT_OBR",
    "en": "Oberndorf bei Salzburg",
  },
  {
    "value": prefix + "AUT_RTB",
    "en": "Rattenberg",
  },
  {
    "value": prefix + "AUT_SSM",
    "en": "Saalfelden am Steinernen Meer",
  },
  {
    "value": prefix + "AUT_SHS",
    "en": "Schruns",
  },
  {
    "value": prefix + "AUT_SLZ",
    "en": "Silz",
  },
  {
    "value": prefix + "AUT_TEL",
    "en": "Telfs",
  },
  {
    "value": prefix + "AUT_TGU",
    "en": "Thalgau",
  },
  {
    "value": prefix + "AUT_WEZ",
    "en": "Weiz",
  },
  {
    "value": prefix + "AUT_ZEZ",
    "en": "Zell am Ziller",
  },
  {
    "value": prefix + "CZE_HKR",
    "cs": "Hradec Králové",
    "en": "Hradec Králové",
  },
  {
    "value": prefix + "CZE_CKB",
    "cs": "České Budějovice",
    "en": "České Budějovice",
  },
  {
    "value": prefix + "CZE_KLV",
    "cs": "Karlovy Vary",
    "en": "Karlovy Vary",
  },
  {
    "value": prefix + "CZE_LBR",
    "cs": "Liberec",
    "en": "Liberec",
  },
  {
    "value": prefix + "CZE_OSR",
    "cs": "Ostrava",
    "en": "Ostrava",
  },
  {
    "value": prefix + "CZE_OLO",
    "cs": "Olomouc",
    "en": "Olomouc",
  },
  {
    "value": prefix + "CZE_PRB",
    "cs": "Pardubice",
    "en": "Pardubice",
  },
  {
    "value": prefix + "CZE_ULN",
    "cs": "Ústí nad Labem",
    "en": "Ústí nad Labem",
  },
  {
    "value": prefix + "CZE_JHV",
    "cs": "Jihlava",
    "en": "Jihlava",
  },
  {
    "value": prefix + "CZE_ZLN",
    "cs": "Zlín",
    "en": "Zlín",
  },
  {
    "value": prefix + "CZE_BEN",
    "cs": "Benešov",
    "en": "Benešov",
  },
  {
    "value": prefix + "CZE_BER",
    "cs": "Beroun",
    "en": "Beroun",
  },
  {
    "value": prefix + "CZE_BLA",
    "cs": "Blansko",
    "en": "Blansko",
  },
  {
    "value": prefix + "CZE_BNT",
    "cs": "Bruntál",
    "en": "Bruntál",
  },
  {
    "value": prefix + "CZE_BVA",
    "cs": "Břeclav",
    "en": "Břeclav",
  },
  {
    "value": prefix + "CZE_CLI",
    "cs": "Česká Lípa",
    "en": "Česká Lípa",
  },
  {
    "value": prefix + "CZE_CKR",
    "cs": "Český Krumlov",
    "en": "Český Krumlov",
  },
  {
    "value": prefix + "CZE_DCB",
    "cs": "Děčín",
    "en": "Děčín",
  },
  {
    "value": prefix + "CZE_DOM",
    "cs": "Domažlice",
    "en": "Domažlice",
  },
  {
    "value": prefix + "CZE_FRM",
    "cs": "Frýdek-Místek",
    "en": "Frýdek-Místek",
  },
  {
    "value": prefix + "CZE_HVB",
    "cs": "Havlíčkův Brod",
    "en": "Havlíčkův Brod",
  },
  {
    "value": prefix + "CZE_HOD",
    "cs": "Hodonín",
    "en": "Hodonín",
  },
  {
    "value": prefix + "CZE_CHB",
    "cs": "Cheb",
    "en": "Cheb",
  },
  {
    "value": prefix + "CZE_CHM",
    "cs": "Chomutov",
    "en": "Chomutov",
  },
  {
    "value": prefix + "CZE_CHR",
    "cs": "Chrudim",
    "en": "Chrudim",
  },
  {
    "value": prefix + "CZE_JNJ",
    "cs": "Jablonec nad Nisou",
    "en": "Jablonec nad Nisou",
  },
  {
    "value": prefix + "CZE_JSN",
    "cs": "Jeseník",
    "en": "Jeseník",
  },
  {
    "value": prefix + "CZE_JIC",
    "cs": "Jičín",
    "en": "Jičín",
  },
  {
    "value": prefix + "CZE_JNH",
    "cs": "Jindřichův Hradec",
    "en": "Jindřichův Hradec",
  },
  {
    "value": prefix + "CZE_KRV",
    "cs": "Karviná",
    "en": "Karviná",
  },
  {
    "value": prefix + "CZE_KLD",
    "cs": "Kladno",
    "en": "Kladno",
  },
  {
    "value": prefix + "CZE_KTV",
    "cs": "Klatovy",
    "en": "Klatovy",
  },
  {
    "value": prefix + "CZE_KLN",
    "cs": "Kolín",
    "en": "Kolín",
  },
  {
    "value": prefix + "CZE_KMR",
    "cs": "Kroměříž",
    "en": "Kroměříž",
  },
  {
    "value": prefix + "CZE_KUH",
    "cs": "Kutná Hora",
    "en": "Kutná Hora",
  },
  {
    "value": prefix + "CZE_LTC",
    "cs": "Litoměřice",
    "en": "Litoměřice",
  },
  {
    "value": prefix + "CZE_LOU",
    "cs": "Louny",
    "en": "Louny",
  },
  {
    "value": prefix + "CZE_MLK",
    "cs": "Mělník",
    "en": "Mělník",
  },
  {
    "value": prefix + "CZE_MBV",
    "cs": "Mladá Boleslav",
    "en": "Mladá Boleslav",
  },
  {
    "value": prefix + "CZE_MST",
    "cs": "Most",
    "en": "Most",
  },
  {
    "value": prefix + "CZE_NAA",
    "cs": "Náchod",
    "en": "Náchod",
  },
  {
    "value": prefix + "CZE_NJC",
    "cs": "Nový Jičín",
    "en": "Nový Jičín",
  },
  {
    "value": prefix + "CZE_NMB",
    "cs": "Nymburk",
    "en": "Nymburk",
  },
  {
    "value": prefix + "CZE_OPA",
    "cs": "Opava",
    "en": "Opava",
  },
  {
    "value": prefix + "CZE_PEL",
    "cs": "Pelhřimov",
    "en": "Pelhřimov",
  },
  {
    "value": prefix + "CZE_PSK",
    "cs": "Písek",
    "en": "Písek",
  },
  {
    "value": prefix + "CZE_PRT",
    "cs": "Prachatice",
    "en": "Prachatice",
  },
  {
    "value": prefix + "CZE_PRO",
    "cs": "Prostějov",
    "en": "Prostějov",
  },
  {
    "value": prefix + "CZE_PRV",
    "cs": "Přerov",
    "en": "Přerov",
  },
  {
    "value": prefix + "CZE_PRI",
    "cs": "Příbram",
    "en": "Příbram",
  },
  {
    "value": prefix + "CZE_RAK",
    "cs": "Rakovník",
    "en": "Rakovník",
  },
  {
    "value": prefix + "CZE_RKC",
    "cs": "Rokycany",
    "en": "Rokycany",
  },
  {
    "value": prefix + "CZE_RNK",
    "cs": "Rychnov nad Kněžnou",
    "en": "Rychnov nad Kněžnou",
  },
  {
    "value": prefix + "CZE_SML",
    "cs": "Semily",
    "en": "Semily",
  },
  {
    "value": prefix + "CZE_SOK",
    "cs": "Sokolov",
    "en": "Sokolov",
  },
  {
    "value": prefix + "CZE_SKN",
    "cs": "Strakonice",
    "en": "Strakonice",
  },
  {
    "value": prefix + "CZE_STV",
    "cs": "Svitavy",
    "en": "Svitavy",
  },
  {
    "value": prefix + "CZE_SUM",
    "cs": "Šumperk",
    "en": "Šumperk",
  },
  {
    "value": prefix + "CZE_TAB",
    "cs": "Tábor",
    "en": "Tábor",
  },
  {
    "value": prefix + "CZE_TAC",
    "cs": "Tachov",
    "en": "Tachov",
  },
  {
    "value": prefix + "CZE_TEP",
    "cs": "Teplice",
    "en": "Teplice",
  },
  {
    "value": prefix + "CZE_TRU",
    "cs": "Trutnov",
    "en": "Trutnov",
  },
  {
    "value": prefix + "CZE_TRB",
    "cs": "Třebíč",
    "en": "Třebíč",
  },
  {
    "value": prefix + "CZE_UHE",
    "cs": "Uherské Hradiště",
    "en": "Uherské Hradiště",
  },
  {
    "value": prefix + "CZE_TNO",
    "cs": "Ústí nad Orlicí",
    "en": "Ústí nad Orlicí",
  },
  {
    "value": prefix + "CZE_VST",
    "cs": "Vsetín",
    "en": "Vsetín",
  },
  {
    "value": prefix + "CZE_VKV",
    "cs": "Vyškov",
    "en": "Vyškov",
  },
  {
    "value": prefix + "CZE_ZMO",
    "cs": "Znojmo",
    "en": "Znojmo",
  },
  {
    "value": prefix + "CZE_ZNS",
    "cs": "Žďár nad Sázavou",
    "en": "Žďár nad Sázavou",
  },
  {
    "value": prefix + "DEU_AAL",
    "en": "Aalen",
  },
  {
    "value": prefix + "DEU_ACH",
    "en": "Achern",
  },
  {
    "value": prefix + "DEU_ACM",
    "en": "Achim",
  },
  {
    "value": prefix + "DEU_ADH",
    "en": "Adelsheim",
  },
  {
    "value": prefix + "DEU_AHA",
    "en": "Ahaus",
  },
  {
    "value": prefix + "DEU_AHL",
    "en": "Ahlen",
  },
  {
    "value": prefix + "DEU_AHR",
    "en": "Ahrensburg",
  },
  {
    "value": prefix + "DEU_AIC",
    "en": "Aichach",
  },
  {
    "value": prefix + "DEU_ALB",
    "en": "Albstadt",
  },
  {
    "value": prefix + "DEU_ALF",
    "en": "Alfeld (Leine)",
  },
  {
    "value": prefix + "DEU_ALD",
    "en": "Alsfeld",
  },
  {
    "value": prefix + "DEU_ALT",
    "en": "Altena",
  },
  {
    "value": prefix + "DEU_ALC",
    "en": "Altenburg",
  },
  {
    "value": prefix + "DEU_ALK",
    "en": "Altenkirchen (Westerwald)",
  },
  {
    "value": prefix + "DEU_ALG",
    "en": "Altötting",
  },
  {
    "value": prefix + "DEU_ALZ",
    "en": "Alzenau",
  },
  {
    "value": prefix + "DEU_AZY",
    "en": "Alzey",
  },
  {
    "value": prefix + "DEU_AMB",
    "en": "Amberg",
  },
  {
    "value": prefix + "DEU_AND",
    "en": "Andernach",
  },
  {
    "value": prefix + "DEU_ANS",
    "en": "Ansbach",
  },
  {
    "value": prefix + "DEU_APO",
    "en": "Apolda",
  },
  {
    "value": prefix + "DEU_ARN",
    "en": "Arnsberg",
  },
  {
    "value": prefix + "DEU_ARS",
    "en": "Arnstadt",
  },
  {
    "value": prefix + "DEU_ASC",
    "en": "Aschaffenburg",
  },
  {
    "value": prefix + "DEU_ASN",
    "en": "Aschersleben",
  },
  {
    "value": prefix + "DEU_AUZ",
    "en": "Aue (Sachsen)",
  },
  {
    "value": prefix + "DEU_AUE",
    "en": "Auerbach (Vogtland)",
  },
  {
    "value": prefix + "DEU_AUR",
    "en": "Aurich",
  },
  {
    "value": prefix + "DEU_BAC",
    "en": "Backnang",
  },
  {
    "value": prefix + "DEU_BZN",
    "en": "Bad Bergzabern",
  },
  {
    "value": prefix + "DEU_BBE",
    "en": "Bad Berleburg",
  },
  {
    "value": prefix + "DEU_BDU",
    "en": "Bad Dürkheim",
  },
  {
    "value": prefix + "DEU_BFA",
    "en": "Bad Freienwalde",
  },
  {
    "value": prefix + "DEU_BGM",
    "en": "Bad Gandersheim",
  },
  {
    "value": prefix + "DEU_BHE",
    "en": "Bad Hersfeld",
  },
  {
    "value": prefix + "DEU_BAJ",
    "en": "Bad Iburg",
  },
  {
    "value": prefix + "DEU_BKI",
    "en": "Bad Kissingen",
  },
  {
    "value": prefix + "DEU_BKR",
    "en": "Bad Kreuznach",
  },
  {
    "value": prefix + "DEU_BLZ",
    "en": "Bad Langensalza",
  },
  {
    "value": prefix + "DEU_BQB",
    "en": "Bad Liebenwerda",
  },
  {
    "value": prefix + "DEU_BME",
    "en": "Bad Mergentheim",
  },
  {
    "value": prefix + "DEU_BNR",
    "en": "Bad Neuenahr-Ahrweiler",
  },
  {
    "value": prefix + "DEU_BOY",
    "en": "Bad Oeynhausen",
  },
  {
    "value": prefix + "DEU_BSA",
    "en": "Bad Säckingen",
  },
  {
    "value": prefix + "DEU_BSZ",
    "en": "Bad Salzungen",
  },
  {
    "value": prefix + "DEU_BSG",
    "en": "Bad Saulgau",
  },
  {
    "value": prefix + "DEU_SHW",
    "en": "Bad Schwalbach",
  },
  {
    "value": prefix + "DEU_BSE",
    "en": "Bad Segeberg",
  },
  {
    "value": prefix + "DEU_ZFL",
    "en": "Bad Sobernheim",
  },
  {
    "value": prefix + "DEU_URH",
    "en": "Bad Urach",
  },
  {
    "value": prefix + "DEU_BWS",
    "en": "Bad Waldsee",
  },
  {
    "value": prefix + "DEU_BAL",
    "en": "Balingen",
  },
  {
    "value": prefix + "DEU_BAU",
    "en": "Bautzen",
  },
  {
    "value": prefix + "DEU_BYU",
    "en": "Bayreuth",
  },
  {
    "value": prefix + "DEU_BEC",
    "en": "Beckum",
  },
  {
    "value": prefix + "DEU_BEH",
    "en": "Bensheim",
  },
  {
    "value": prefix + "DEU_BGE",
    "en": "Bergen auf Rügen",
  },
  {
    "value": prefix + "DEU_BHM",
    "en": "Bergheim",
  },
  {
    "value": prefix + "DEU_BGL",
    "en": "Bergisch Gladbach",
  },
  {
    "value": prefix + "DEU_RNR",
    "en": "Bernau bei Berlin",
  },
  {
    "value": prefix + "DEU_BEQ",
    "en": "Bernburg (Saale)",
  },
  {
    "value": prefix + "DEU_BEK",
    "en": "Bernkastel-Kues",
  },
  {
    "value": prefix + "DEU_BBK",
    "en": "Bersenbrück",
  },
  {
    "value": prefix + "DEU_BEM",
    "en": "Besigheim",
  },
  {
    "value": prefix + "DEU_BET",
    "en": "Betzdorf",
  },
  {
    "value": prefix + "DEU_BKF",
    "en": "Biedenkopf",
  },
  {
    "value": prefix + "DEU_BFE",
    "en": "Bielefeld",
  },
  {
    "value": prefix + "DEU_BIN",
    "en": "Bingen am Rhein",
  },
  {
    "value": prefix + "DEU_BIT",
    "en": "Bitburg",
  },
  {
    "value": prefix + "DEU_BMG",
    "en": "Blomberg",
  },
  {
    "value": prefix + "DEU_BWU",
    "en": "Böblingen",
  },
  {
    "value": prefix + "DEU_BHT",
    "en": "Bocholt",
  },
  {
    "value": prefix + "DEU_BOM",
    "en": "Bochum",
  },
  {
    "value": prefix + "DEU_BOR",
    "en": "Borken",
  },
  {
    "value": prefix + "DEU_BOX",
    "en": "Borna",
  },
  {
    "value": prefix + "DEU_BOT",
    "en": "Bottrop",
  },
  {
    "value": prefix + "DEU_BCM",
    "en": "Brackenheim",
  },
  {
    "value": prefix + "DEU_BKE",
    "en": "Brake (Unterweser)",
  },
  {
    "value": prefix + "DEU_BKK",
    "en": "Brakel",
  },
  {
    "value": prefix + "LVA_AMT",
    "en": "Amata",
  },
  {
    "value": prefix + "DEU_BSH",
    "en": "Breisach",
  },
  {
    "value": prefix + "DEU_BRV",
    "en": "Bremerhaven",
  },
  {
    "value": prefix + "DEU_BMV",
    "en": "Bremervörde",
  },
  {
    "value": prefix + "DEU_BTN",
    "en": "Bretten",
  },
  {
    "value": prefix + "DEU_BRI",
    "en": "Brilon",
  },
  {
    "value": prefix + "DEU_BCL",
    "en": "Bruchsal",
  },
  {
    "value": prefix + "DEU_BRU",
    "en": "Brühl",
  },
  {
    "value": prefix + "DEU_BUC",
    "en": "Buchen (Odenwald)",
  },
  {
    "value": prefix + "DEU_BCB",
    "en": "Bückeburg",
  },
  {
    "value": prefix + "DEU_BUN",
    "en": "Büdingen",
  },
  {
    "value": prefix + "DEU_BUL",
    "en": "Bühl",
  },
  {
    "value": prefix + "DEU_BUE",
    "en": "Bünde",
  },
  {
    "value": prefix + "DEU_BGX",
    "en": "Burg",
  },
  {
    "value": prefix + "DEU_BWL",
    "en": "Burgwedel",
  },
  {
    "value": prefix + "DEU_BUX",
    "en": "Buxtehude",
  },
  {
    "value": prefix + "DEU_CAL",
    "en": "Calw",
  },
  {
    "value": prefix + "DEU_CRL",
    "en": "Castrop-Rauxel",
  },
  {
    "value": prefix + "DEU_CEL",
    "en": "Celle",
  },
  {
    "value": prefix + "DEU_CHA",
    "en": "Cham",
  },
  {
    "value": prefix + "DEU_CHE",
    "en": "Chemnitz",
  },
  {
    "value": prefix + "DEU_CLO",
    "en": "Cloppenburg",
  },
  {
    "value": prefix + "DEU_COC",
    "en": "Cochem",
  },
  {
    "value": prefix + "DEU_COF",
    "en": "Coesfeld",
  },
  {
    "value": prefix + "DEU_COT",
    "en": "Cottbus",
  },
  {
    "value": prefix + "DEU_CRH",
    "en": "Crailsheim",
  },
  {
    "value": prefix + "DEU_CUX",
    "en": "Cuxhaven",
  },
  {
    "value": prefix + "DEU_DAC",
    "en": "Dachau",
  },
  {
    "value": prefix + "DEU_DNG",
    "en": "Dannenberg (Elbe)",
  },
  {
    "value": prefix + "DEU_DAR",
    "en": "Darmstadt",
  },
  {
    "value": prefix + "DEU_DAU",
    "en": "Daun",
  },
  {
    "value": prefix + "DEU_DEG",
    "en": "Deggendorf",
  },
  {
    "value": prefix + "DEU_DEK",
    "en": "Delbrück",
  },
  {
    "value": prefix + "DEU_DEL",
    "en": "Delmenhorst",
  },
  {
    "value": prefix + "DEU_DMN",
    "en": "Demmin",
  },
  {
    "value": prefix + "DEU_DET",
    "en": "Detmold",
  },
  {
    "value": prefix + "DEU_DIG",
    "en": "Dieburg",
  },
  {
    "value": prefix + "DEU_DIZ",
    "en": "Diepholz",
  },
  {
    "value": prefix + "DEU_DEZ",
    "en": "Diez",
  },
  {
    "value": prefix + "DEU_DIB",
    "en": "Dillenburg",
  },
  {
    "value": prefix + "DEU_DLD",
    "en": "Dillingen an der Donau",
  },
  {
    "value": prefix + "DEU_DIN",
    "en": "Dinslaken",
  },
  {
    "value": prefix + "DEU_DPW",
    "en": "Dippoldiswalde",
  },
  {
    "value": prefix + "DEU_DOE",
    "en": "Döbeln",
  },
  {
    "value": prefix + "DEU_DEN",
    "en": "Donaueschingen",
  },
  {
    "value": prefix + "DEU_DON",
    "en": "Dorsten",
  },
  {
    "value": prefix + "DEU_DTM",
    "en": "Dortmund",
  },
  {
    "value": prefix + "DEU_DUD",
    "en": "Duderstadt",
  },
  {
    "value": prefix + "DEU_DUN",
    "en": "Dülmen",
  },
  {
    "value": prefix + "DEU_DUE",
    "en": "Düren",
  },
  {
    "value": prefix + "DEU_EEG",
    "en": "Ebersberg",
  },
  {
    "value": prefix + "DEU_EBW",
    "en": "Eberswalde",
  },
  {
    "value": prefix + "DEU_ECK",
    "en": "Eckernförde",
  },
  {
    "value": prefix + "DEU_EHI",
    "en": "Ehingen (Donau)",
  },
  {
    "value": prefix + "DEU_ENB",
    "en": "Eilenburg",
  },
  {
    "value": prefix + "DEU_EIB",
    "en": "Einbeck",
  },
  {
    "value": prefix + "DEU_EIS",
    "en": "Eisenach",
  },
  {
    "value": prefix + "DEU_EHS",
    "en": "Eisenhüttenstadt",
  },
  {
    "value": prefix + "DEU_ELW",
    "en": "Ellwangen",
  },
  {
    "value": prefix + "DEU_ELM",
    "en": "Elmshorn",
  },
  {
    "value": prefix + "DEU_ELZ",
    "en": "Elze",
  },
  {
    "value": prefix + "DEU_EME",
    "en": "Emden",
  },
  {
    "value": prefix + "DEU_EMM",
    "en": "Emmerich am Rhein",
  },
  {
    "value": prefix + "DEU_ERG",
    "en": "Erding",
  },
  {
    "value": prefix + "DEU_ERK",
    "en": "Erkelenz",
  },
  {
    "value": prefix + "DEU_ERL",
    "en": "Erlangen",
  },
  {
    "value": prefix + "DEU_ESW",
    "en": "Eschwege",
  },
  {
    "value": prefix + "DEU_ESR",
    "en": "Eschweiler",
  },
  {
    "value": prefix + "DEU_EGN",
    "en": "Esslingen am Neckar",
  },
  {
    "value": prefix + "DEU_ETI",
    "en": "Ettenheim",
  },
  {
    "value": prefix + "DEU_ETT",
    "en": "Ettlingen",
  },
  {
    "value": prefix + "DEU_EUS",
    "en": "Euskirchen",
  },
  {
    "value": prefix + "DEU_EUT",
    "en": "Eutin",
  },
  {
    "value": prefix + "DEU_FLF",
    "en": "Flensburg",
  },
  {
    "value": prefix + "DEU_FOH",
    "en": "Forchheim",
  },
  {
    "value": prefix + "DEU_FKG",
    "en": "Frankenberg",
  },
  {
    "value": prefix + "DEU_FTL",
    "en": "Frankenthal",
  },
  {
    "value": prefix + "DEU_FIG",
    "en": "Freiberg",
  },
  {
    "value": prefix + "DEU_FRG",
    "en": "Freising",
  },
  {
    "value": prefix + "DEU_FST",
    "en": "Freudenstadt",
  },
  {
    "value": prefix + "DEU_FRY",
    "en": "Freyung",
  },
  {
    "value": prefix + "DEU_FRB",
    "en": "Friedberg",
  },
  {
    "value": prefix + "DEU_FRZ",
    "en": "Fritzlar",
  },
  {
    "value": prefix + "DEU_FUL",
    "en": "Fulda",
  },
  {
    "value": prefix + "DEU_FEL",
    "en": "Fürstenfeldbruck",
  },
  {
    "value": prefix + "DEU_FTE",
    "en": "Fürstenwalde (Spree)",
  },
  {
    "value": prefix + "DEU_FUE",
    "en": "Fürth (Bayern)",
  },
  {
    "value": prefix + "DEU_FUR",
    "en": "Fürth (Hessen)",
  },
  {
    "value": prefix + "DEU_GAR",
    "en": "Gardelegen",
  },
  {
    "value": prefix + "DEU_GAP",
    "en": "Garmisch-Partenkirchen",
  },
  {
    "value": prefix + "DEU_GKI",
    "en": "Geilenkirchen",
  },
  {
    "value": prefix + "DEU_GLI",
    "en": "Geislingen an der Steige",
  },
  {
    "value": prefix + "DEU_GDN",
    "en": "Geldern",
  },
  {
    "value": prefix + "DEU_GEH",
    "en": "Gelnhausen",
  },
  {
    "value": prefix + "DEU_GEK",
    "en": "Gelsenkirchen",
  },
  {
    "value": prefix + "DEU_GEM",
    "en": "Gemünden am Main",
  },
  {
    "value": prefix + "DEU_GGH",
    "en": "Gengenbach",
  },
  {
    "value": prefix + "DEU_GEA",
    "en": "Gera",
  },
  {
    "value": prefix + "DEU_GER",
    "en": "Germersheim",
  },
  {
    "value": prefix + "DEU_GBH",
    "en": "Gernsbach",
  },
  {
    "value": prefix + "DEU_GIE",
    "en": "Giessen",
  },
  {
    "value": prefix + "DEU_GIF",
    "en": "Gifhorn",
  },
  {
    "value": prefix + "DEU_GLA",
    "en": "Gladbeck",
  },
  {
    "value": prefix + "DEU_GON",
    "en": "Göppingen",
  },
  {
    "value": prefix + "DEU_GOR",
    "en": "Görlitz",
  },
  {
    "value": prefix + "DEU_GOS",
    "en": "Goslar",
  },
  {
    "value": prefix + "DEU_GOA",
    "en": "Gotha",
  },
  {
    "value": prefix + "DEU_GRD",
    "en": "Greifswald",
  },
  {
    "value": prefix + "DEU_GRI",
    "en": "Greiz",
  },
  {
    "value": prefix + "DEU_GRV",
    "en": "Grevenbroich",
  },
  {
    "value": prefix + "DEU_GVY",
    "en": "Grevesmühlen",
  },
  {
    "value": prefix + "DEU_GMA",
    "en": "Grimma",
  },
  {
    "value": prefix + "DEU_GNU",
    "en": "Gronau (Westf.)",
  },
  {
    "value": prefix + "DEU_GRG",
    "en": "Gross-Gerau",
  },
  {
    "value": prefix + "DEU_GRT",
    "en": "Grünstadt",
  },
  {
    "value": prefix + "DEU_GUB",
    "en": "Guben",
  },
  {
    "value": prefix + "DEU_GUM",
    "en": "Gummersbach",
  },
  {
    "value": prefix + "DEU_GUG",
    "en": "Günzburg",
  },
  {
    "value": prefix + "DEU_GUW",
    "en": "Güstrow",
  },
  {
    "value": prefix + "DEU_GTO",
    "en": "Gütersloh",
  },
  {
    "value": prefix + "DEU_HAD",
    "en": "Hadamar",
  },
  {
    "value": prefix + "DEU_HAG",
    "en": "Hagen",
  },
  {
    "value": prefix + "DEU_HST",
    "en": "Halberstadt",
  },
  {
    "value": prefix + "DEU_HLH",
    "en": "Haldensleben",
  },
  {
    "value": prefix + "DEU_HAL",
    "en": "Halle (Salle)",
  },
  {
    "value": prefix + "DEU_HAE",
    "en": "Halle (Westf.)",
  },
  {
    "value": prefix + "DEU_HAN",
    "en": "Hameln",
  },
  {
    "value": prefix + "DEU_HMM",
    "en": "Hamm",
  },
  {
    "value": prefix + "DEU_HAU",
    "en": "Hanau",
  },
  {
    "value": prefix + "DEU_HMU",
    "en": "Hann. Münden",
  },
  {
    "value": prefix + "DEU_HAS",
    "en": "Hassfurt",
  },
  {
    "value": prefix + "DEU_HAT",
    "en": "Hattingen",
  },
  {
    "value": prefix + "DEU_HEC",
    "en": "Hechingen",
  },
  {
    "value": prefix + "DEU_HD2",
    "en": "Heidenheim an der Brenz",
  },
  {
    "value": prefix + "DEU_HHI",
    "en": "Heilbad Heiligenstadt",
  },
  {
    "value": prefix + "DEU_HEN",
    "en": "Heilbronn",
  },
  {
    "value": prefix + "DEU_HEG",
    "en": "Heinsberg",
  },
  {
    "value": prefix + "DEU_HEL",
    "en": "Helmstedt",
  },
  {
    "value": prefix + "DEU_HRD",
    "en": "Herford",
  },
  {
    "value": prefix + "DEU_HMK",
    "en": "Hermeskeil",
  },
  {
    "value": prefix + "DEU_HEE",
    "en": "Herne",
  },
  {
    "value": prefix + "DEU_HEK",
    "en": "Hersbruck",
  },
  {
    "value": prefix + "DEU_HBG",
    "en": "Herzberg am Harz",
  },
  {
    "value": prefix + "DEU_HIL",
    "en": "Hildesheim",
  },
  {
    "value": prefix + "DEU_HOQ",
    "en": "Hof (Saale)",
  },
  {
    "value": prefix + "DEU_HGM",
    "en": "Hofgeismar",
  },
  {
    "value": prefix + "DEU_HOI",
    "en": "Hohenstein-Ernstthal",
  },
  {
    "value": prefix + "DEU_HZN",
    "en": "Holzminden",
  },
  {
    "value": prefix + "DEU_HOM",
    "en": "Homburg",
  },
  {
    "value": prefix + "DEU_HOB",
    "en": "Horb am Neckar",
  },
  {
    "value": prefix + "DEU_HOX",
    "en": "Höxter",
  },
  {
    "value": prefix + "DEU_HWE",
    "en": "Hoyerswerda",
  },
  {
    "value": prefix + "DEU_HUD",
    "en": "Hünfeld",
  },
  {
    "value": prefix + "DEU_HUS",
    "en": "Husum",
  },
  {
    "value": prefix + "DEU_IBB",
    "en": "Ibbenbüren",
  },
  {
    "value": prefix + "DEU_ION",
    "en": "Idar-Oberstein",
  },
  {
    "value": prefix + "DEU_IDS",
    "en": "Idstein",
  },
  {
    "value": prefix + "DEU_INU",
    "en": "Ilmenau",
  },
  {
    "value": prefix + "DEU_ING",
    "en": "Ingolstadt",
  },
  {
    "value": prefix + "DEU_ISE",
    "en": "Iserlohn",
  },
  {
    "value": prefix + "DEU_ITZ",
    "en": "Itzehoe",
  },
  {
    "value": prefix + "DEU_JEV",
    "en": "Jever",
  },
  {
    "value": prefix + "DEU_JUE",
    "en": "Jülich",
  },
  {
    "value": prefix + "DEU_KMN",
    "en": "Kamen",
  },
  {
    "value": prefix + "DEU_KAZ",
    "en": "Kamenz",
  },
  {
    "value": prefix + "DEU_KNL",
    "en": "Kandel",
  },
  {
    "value": prefix + "DEU_KAS",
    "en": "Kassel",
  },
  {
    "value": prefix + "DEU_KAU",
    "en": "Kaufbeuren",
  },
  {
    "value": prefix + "DEU_KEH",
    "en": "Kehl",
  },
  {
    "value": prefix + "DEU_KEM",
    "en": "Kelheim",
  },
  {
    "value": prefix + "DEU_KMP",
    "en": "Kempen",
  },
  {
    "value": prefix + "DEU_KEN",
    "en": "Kempten (Allgäu)",
  },
  {
    "value": prefix + "DEU_KRP",
    "en": "Kerpen",
  },
  {
    "value": prefix + "DEU_KER",
    "en": "Kerpen (Eifel)",
  },
  {
    "value": prefix + "DEU_KEL",
    "en": "Kiel",
  },
  {
    "value": prefix + "DEU_KHH",
    "en": "Kirchhain",
  },
  {
    "value": prefix + "DEU_KCI",
    "en": "Kirchheim unter Teck",
  },
  {
    "value": prefix + "DEU_KIT",
    "en": "Kitzingen",
  },
  {
    "value": prefix + "DEU_KOS",
    "en": "Königstein im Taunus",
  },
  {
    "value": prefix + "DEU_KOW",
    "en": "Königswinter",
  },
  {
    "value": prefix + "DEU_KOH",
    "en": "Korbach",
  },
  {
    "value": prefix + "DEU_KOA",
    "en": "Köthen (Anhalt)",
  },
  {
    "value": prefix + "DEU_KRE",
    "en": "Krefeld",
  },
  {
    "value": prefix + "DEU_KRO",
    "en": "Kronach",
  },
  {
    "value": prefix + "DEU_KUL",
    "en": "Kulmbach",
  },
  {
    "value": prefix + "DEU_VMG",
    "en": "Künzelsau",
  },
  {
    "value": prefix + "DEU_KUS",
    "en": "Kusel",
  },
  {
    "value": prefix + "DEU_LAH",
    "en": "Lahnstein",
  },
  {
    "value": prefix + "DEU_LAR",
    "en": "Lahr (Schwarzwald)",
  },
  {
    "value": prefix + "DEU_LAM",
    "en": "Lampertheim",
  },
  {
    "value": prefix + "DEU_LDU",
    "en": "Landau an der Isar",
  },
  {
    "value": prefix + "DEU_LAD",
    "en": "Landau in der Pfalz",
  },
  {
    "value": prefix + "DEU_LXL",
    "en": "Landsberg am Lech",
  },
  {
    "value": prefix + "DEU_LDH",
    "en": "Landshut",
  },
  {
    "value": prefix + "DEU_LSL",
    "en": "Landstuhl",
  },
  {
    "value": prefix + "DEU_LED",
    "en": "Langen (Emsland)",
  },
  {
    "value": prefix + "DEU_LNN",
    "en": "Langen (Hessen)",
  },
  {
    "value": prefix + "DEU_LBU",
    "en": "Langenburg",
  },
  {
    "value": prefix + "DEU_LGF",
    "en": "Langenfeld",
  },
  {
    "value": prefix + "DEU_LNS",
    "en": "Laufen",
  },
  {
    "value": prefix + "DEU_LEB",
    "en": "Lebach",
  },
  {
    "value": prefix + "DEU_LEE",
    "en": "Leer",
  },
  {
    "value": prefix + "DEU_LEH",
    "en": "Lehrte",
  },
  {
    "value": prefix + "DEU_LEM",
    "en": "Lemgo",
  },
  {
    "value": prefix + "DEU_LST",
    "en": "Lennestadt",
  },
  {
    "value": prefix + "DEU_LEO",
    "en": "Leonberg",
  },
  {
    "value": prefix + "DEU_LEU",
    "en": "Leutkirch im Allgäu",
  },
  {
    "value": prefix + "DEU_LIC",
    "en": "Lichtenfels",
  },
  {
    "value": prefix + "DEU_LML",
    "en": "Limburg an der Lahn",
  },
  {
    "value": prefix + "DEU_LIU",
    "en": "Lindau (Bodensee)",
  },
  {
    "value": prefix + "DEU_LIG",
    "en": "Lingen (Ems)",
  },
  {
    "value": prefix + "DEU_LRN",
    "en": "Linz am Rhein",
  },
  {
    "value": prefix + "DEU_LIP",
    "en": "Lippstadt",
  },
  {
    "value": prefix + "DEU_LBA",
    "en": "Löbau",
  },
  {
    "value": prefix + "DEU_LOE",
    "en": "Lörrach",
  },
  {
    "value": prefix + "DEU_LBE",
    "en": "Lübbecke",
  },
  {
    "value": prefix + "DEU_LUB",
    "en": "Lübben (Spreewald)",
  },
  {
    "value": prefix + "DEU_LUQ",
    "en": "Luckenwalde",
  },
  {
    "value": prefix + "DEU_LUD",
    "en": "Lüdenscheid",
  },
  {
    "value": prefix + "DEU_LUN",
    "en": "Lüdinghausen",
  },
  {
    "value": prefix + "DEU_LWG",
    "en": "Ludwigsburg",
  },
  {
    "value": prefix + "DEU_LWR",
    "en": "Ludwigshafen am Rhein",
  },
  {
    "value": prefix + "DEU_LUL",
    "en": "Ludwigslust",
  },
  {
    "value": prefix + "DEU_LBG",
    "en": "Lüneburg",
  },
  {
    "value": prefix + "DEU_LUE",
    "en": "Lünen",
  },
  {
    "value": prefix + "DEU_EIN",
    "en": "Lutherstadt Eisleben",
  },
  {
    "value": prefix + "DEU_BAB",
    "en": "Baden-Baden",
  },
  {
    "value": prefix + "DEU_IAD",
    "en": "Biberach an der Riss",
  },
  {
    "value": prefix + "DEU_BID",
    "en": "Bitterfeld-Wolfen",
  },
  {
    "value": prefix + "DEU_BZT",
    "en": "Burgdorf",
  },
  {
    "value": prefix + "DEU_CUL",
    "en": "Clausthal-Zellerfeld",
  },
  {
    "value": prefix + "DEU_EMN",
    "en": "Emmendingen",
  },
  {
    "value": prefix + "DEU_GTL",
    "en": "Geestland",
  },
  {
    "value": prefix + "DEU_HB4",
    "en": "Hildburghausen",
  },
  {
    "value": prefix + "DEU_MNC",
    "en": "Marbach am Neckar",
  },
  {
    "value": prefix + "DEU_MRI",
    "en": "Marienberg",
  },
  {
    "value": prefix + "DEU_MAL",
    "en": "Marl",
  },
  {
    "value": prefix + "DEU_MSG",
    "en": "Marsberg",
  },
  {
    "value": prefix + "DEU_MBN",
    "en": "Maulbronn",
  },
  {
    "value": prefix + "DEU_MAY",
    "en": "Mayen",
  },
  {
    "value": prefix + "DEU_MDB",
    "en": "Medebach",
  },
  {
    "value": prefix + "DEU_MZN",
    "en": "Meinerzhagen",
  },
  {
    "value": prefix + "DEU_MNI",
    "en": "Meiningen",
  },
  {
    "value": prefix + "DEU_MEI",
    "en": "Meissen",
  },
  {
    "value": prefix + "DEU_MEL",
    "en": "Meldorf",
  },
  {
    "value": prefix + "DEU_MLS",
    "en": "Melsungen",
  },
  {
    "value": prefix + "DEU_MMN",
    "en": "Memmingen",
  },
  {
    "value": prefix + "DEU_MEN",
    "en": "Menden (Sauerland)",
  },
  {
    "value": prefix + "DEU_MEP",
    "en": "Meppen",
  },
  {
    "value": prefix + "DEU_MEG",
    "en": "Merseburg",
  },
  {
    "value": prefix + "DEU_MER",
    "en": "Merzig",
  },
  {
    "value": prefix + "DEU_MSE",
    "en": "Meschede",
  },
  {
    "value": prefix + "DEU_MET",
    "en": "Mettmann",
  },
  {
    "value": prefix + "DEU_MIS",
    "en": "Michelstadt",
  },
  {
    "value": prefix + "DEU_MIE",
    "en": "Miesbach",
  },
  {
    "value": prefix + "DEU_MIL",
    "en": "Miltenberg",
  },
  {
    "value": prefix + "DEU_MID",
    "en": "Minden",
  },
  {
    "value": prefix + "DEU_MOS",
    "en": "Moers",
  },
  {
    "value": prefix + "DEU_MGL",
    "en": "Mönchengladbach",
  },
  {
    "value": prefix + "DEU_MOU",
    "en": "Monschau",
  },
  {
    "value": prefix + "DEU_MON",
    "en": "Montabaur",
  },
  {
    "value": prefix + "DEU_MOB",
    "en": "Mosbach",
  },
  {
    "value": prefix + "DEU_MUF",
    "en": "Mühldorf am Inn",
  },
  {
    "value": prefix + "DEU_MHL",
    "en": "Mühlhausen",
  },
  {
    "value": prefix + "DEU_MUH",
    "en": "Mülheim an der Ruhr",
  },
  {
    "value": prefix + "DEU_MUE",
    "en": "Müllheim (Baden)",
  },
  {
    "value": prefix + "DEU_MGN",
    "en": "Münsingen",
  },
  {
    "value": prefix + "DEU_MSR",
    "en": "Münster",
  },
  {
    "value": prefix + "DEU_NAG",
    "en": "Nagold",
  },
  {
    "value": prefix + "DEU_NUQ",
    "en": "Nauen",
  },
  {
    "value": prefix + "DEU_NBU",
    "en": "Naumburg (Saale)",
  },
  {
    "value": prefix + "DEU_NSH",
    "en": "Neresheim",
  },
  {
    "value": prefix + "DEU_NTL",
    "en": "Nettetal",
  },
  {
    "value": prefix + "DEU_NBG",
    "en": "Neuburg an der Donau",
  },
  {
    "value": prefix + "DEU_NET",
    "en": "Neumarkt in der Oberpfalz",
  },
  {
    "value": prefix + "DEU_NEU",
    "en": "Neumünster",
  },
  {
    "value": prefix + "DEU_NPP",
    "en": "Neuruppin",
  },
  {
    "value": prefix + "DEU_NSS",
    "en": "Neuss",
  },
  {
    "value": prefix + "DEU_NRB",
    "en": "Neustadt am Rübenberge",
  },
  {
    "value": prefix + "DEU_NSA",
    "en": "Neustadt an der Aisch",
  },
  {
    "value": prefix + "DEU_NSW",
    "en": "Neustadt an der Weinstrasse",
  },
  {
    "value": prefix + "DEU_NER",
    "en": "Neustrelitz",
  },
  {
    "value": prefix + "DEU_NUL",
    "en": "Neu-Ulm",
  },
  {
    "value": prefix + "DEU_NED",
    "en": "Neuwied",
  },
  {
    "value": prefix + "DEU_NIL",
    "en": "Niebüll",
  },
  {
    "value": prefix + "DEU_NIE",
    "en": "Nienburg",
  },
  {
    "value": prefix + "DEU_NOD",
    "en": "Norden",
  },
  {
    "value": prefix + "DEU_NHA",
    "en": "Nordenham",
  },
  {
    "value": prefix + "DEU_NOT",
    "en": "Norderstedt",
  },
  {
    "value": prefix + "DEU_NDH",
    "en": "Nordhausen",
  },
  {
    "value": prefix + "DEU_NHN",
    "en": "Nordhorn",
  },
  {
    "value": prefix + "DEU_NON",
    "en": "Nördlingen",
  },
  {
    "value": prefix + "DEU_NOM",
    "en": "Northeim",
  },
  {
    "value": prefix + "DEU_NUN",
    "en": "Nürtingen",
  },
  {
    "value": prefix + "DEU_OBE",
    "en": "Oberhausen",
  },
  {
    "value": prefix + "DEU_OKH",
    "en": "Oberkirch",
  },
  {
    "value": prefix + "DEU_OBG",
    "en": "Obernburg am Main",
  },
  {
    "value": prefix + "DEU_ODF",
    "en": "Oberndorf am Neckar",
  },
  {
    "value": prefix + "DEU_OFF",
    "en": "Offenbach am Main",
  },
  {
    "value": prefix + "DEU_OFG",
    "en": "Offenburg",
  },
  {
    "value": prefix + "DEU_OEH",
    "en": "Öhringen",
  },
  {
    "value": prefix + "DEU_OLO",
    "en": "Oldenburg",
  },
  {
    "value": prefix + "DEU_OLH",
    "en": "Oldenburg in Holstein",
  },
  {
    "value": prefix + "DEU_OLE",
    "en": "Olpe",
  },
  {
    "value": prefix + "DEU_ORA",
    "en": "Oranienburg",
  },
  {
    "value": prefix + "DEU_OLN",
    "en": "Oschersleben",
  },
  {
    "value": prefix + "DEU_OSN",
    "en": "Osnabrück",
  },
  {
    "value": prefix + "DEU_OSS",
    "en": "Osterholz-Scharmbeck",
  },
  {
    "value": prefix + "DEU_OSE",
    "en": "Osterode am Harz",
  },
  {
    "value": prefix + "DEU_OTT",
    "en": "Otterndorf",
  },
  {
    "value": prefix + "DEU_OWE",
    "en": "Ottweiler",
  },
  {
    "value": prefix + "DEU_PAD",
    "en": "Paderborn",
  },
  {
    "value": prefix + "DEU_PAP",
    "en": "Papenburg",
  },
  {
    "value": prefix + "DEU_PWK",
    "en": "Pasewalk",
  },
  {
    "value": prefix + "DEU_PAS",
    "en": "Passau",
  },
  {
    "value": prefix + "DEU_PEI",
    "en": "Peine",
  },
  {
    "value": prefix + "DEU_PEB",
    "en": "Perleberg",
  },
  {
    "value": prefix + "DEU_PFA",
    "en": "Pfaffenhofen an der Ilm",
  },
  {
    "value": prefix + "DEU_PFO",
    "en": "Pforzheim",
  },
  {
    "value": prefix + "DEU_PHG",
    "en": "Philippsburg",
  },
  {
    "value": prefix + "DEU_PIN",
    "en": "Pinneberg",
  },
  {
    "value": prefix + "DEU_PIR",
    "en": "Pirmasens",
  },
  {
    "value": prefix + "DEU_PRA",
    "en": "Pirna",
  },
  {
    "value": prefix + "DEU_PLU",
    "en": "Plauen",
  },
  {
    "value": prefix + "DEU_PLE",
    "en": "Plettenberg",
  },
  {
    "value": prefix + "DEU_PLN",
    "en": "Plön",
  },
  {
    "value": prefix + "DEU_PTV",
    "en": "Pössneck",
  },
  {
    "value": prefix + "DEU_BPU",
    "en": "Prenzlau",
  },
  {
    "value": prefix + "DEU_PRU",
    "en": "Prüm",
  },
  {
    "value": prefix + "DEU_QUE",
    "en": "Quedlinburg",
  },
  {
    "value": prefix + "DEU_RAD",
    "en": "Radolfzell am Bodensee",
  },
  {
    "value": prefix + "DEU_RAH",
    "en": "Rahden",
  },
  {
    "value": prefix + "DEU_RAS",
    "en": "Rastatt",
  },
  {
    "value": prefix + "DEU_RNW",
    "en": "Rathenow",
  },
  {
    "value": prefix + "DEU_RAT",
    "en": "Ratingen",
  },
  {
    "value": prefix + "DEU_RZG",
    "en": "Ratzeburg",
  },
  {
    "value": prefix + "DEU_RAV",
    "en": "Ravensburg",
  },
  {
    "value": prefix + "DEU_REC",
    "en": "Recklinghausen",
  },
  {
    "value": prefix + "DEU_REI",
    "en": "Reinbek",
  },
  {
    "value": prefix + "DEU_RED",
    "en": "Remscheid",
  },
  {
    "value": prefix + "DEU_REN",
    "en": "Rendsburg",
  },
  {
    "value": prefix + "DEU_REU",
    "en": "Reutligen",
  },
  {
    "value": prefix + "DEU_RHW",
    "en": "Rheda-Wiedenbrück",
  },
  {
    "value": prefix + "DEU_RHH",
    "en": "Rheinbach",
  },
  {
    "value": prefix + "DEU_RHB",
    "en": "Rheinberg",
  },
  {
    "value": prefix + "DEU_RHE",
    "en": "Rheine",
  },
  {
    "value": prefix + "DEU_RZD",
    "en": "Ribnitz-Damgarten",
  },
  {
    "value": prefix + "DEU_RIE",
    "en": "Riedlingen",
  },
  {
    "value": prefix + "DEU_RSA",
    "en": "Riesa",
  },
  {
    "value": prefix + "DEU_RIN",
    "en": "Rinteln",
  },
  {
    "value": prefix + "DEU_ROH",
    "en": "Rockenhausen",
  },
  {
    "value": prefix + "DEU_ROS",
    "en": "Rosenheim",
  },
  {
    "value": prefix + "DEU_RSK",
    "en": "Rostock",
  },
  {
    "value": prefix + "DEU_ROW",
    "en": "Rotenburg (Wümme)",
  },
  {
    "value": prefix + "DEU_ZFI",
    "en": "Rottenburg am Neckar",
  },
  {
    "value": prefix + "DEU_ROL",
    "en": "Rottweil",
  },
  {
    "value": prefix + "DEU_RUE",
    "en": "Rüdesheim am Rhein",
  },
  {
    "value": prefix + "DEU_RUL",
    "en": "Rudolstadt",
  },
  {
    "value": prefix + "DEU_RUM",
    "en": "Rüsselsheim",
  },
  {
    "value": prefix + "DEU_SAD",
    "en": "Saalfeld",
  },
  {
    "value": prefix + "DEU_SAG",
    "en": "Saarburg",
  },
  {
    "value": prefix + "DEU_SAA",
    "en": "Saarlouis",
  },
  {
    "value": prefix + "DEU_SAR",
    "en": "Salzgitter",
  },
  {
    "value": prefix + "DEU_SZW",
    "en": "Salzwedel",
  },
  {
    "value": prefix + "DEU_SHA",
    "en": "Sangerhausen",
  },
  {
    "value": prefix + "DEU_SBL",
    "en": "Sankt Blasien",
  },
  {
    "value": prefix + "DEU_SCV",
    "en": "Schleiden (Gemünd)",
  },
  {
    "value": prefix + "DEU_SLS",
    "en": "Schleswig",
  },
  {
    "value": prefix + "DEU_SLN",
    "en": "Schlüchtern",
  },
  {
    "value": prefix + "DEU_SLG",
    "en": "Schmallenberg",
  },
  {
    "value": prefix + "DEU_SMS",
    "en": "Schönau im Schwarzwald",
  },
  {
    "value": prefix + "DEU_ASQ",
    "en": "Schönebeck",
  },
  {
    "value": prefix + "DEU_SHM",
    "en": "Schopfheim",
  },
  {
    "value": prefix + "DEU_SDF",
    "en": "Schorndorf",
  },
  {
    "value": prefix + "DEU_SWB",
    "en": "Schwabach",
  },
  {
    "value": prefix + "DEU_SGD",
    "en": "Schwäbisch Gmünd",
  },
  {
    "value": prefix + "DEU_SHL",
    "en": "Schwäbisch Hall",
  },
  {
    "value": prefix + "DEU_SCT",
    "en": "Schwalmstadt",
  },
  {
    "value": prefix + "DEU_SCF",
    "en": "Schwandorf",
  },
  {
    "value": prefix + "DEU_ZFK",
    "en": "Schwarzenbek",
  },
  {
    "value": prefix + "DEU_SJW",
    "en": "Schwedt (Oder)",
  },
  {
    "value": prefix + "DEU_SCW",
    "en": "Schweinfurt",
  },
  {
    "value": prefix + "DEU_SLM",
    "en": "Schwelm",
  },
  {
    "value": prefix + "DEU_SWR",
    "en": "Schwerin",
  },
  {
    "value": prefix + "DEU_SCE",
    "en": "Schwerte",
  },
  {
    "value": prefix + "DEU_SCH",
    "en": "Schwetzingen",
  },
  {
    "value": prefix + "DEU_SEE",
    "en": "Seesen",
  },
  {
    "value": prefix + "DEU_SLT",
    "en": "Seligenstadt",
  },
  {
    "value": prefix + "DEU_SFT",
    "en": "Senftenberg",
  },
  {
    "value": prefix + "DEU_SIG",
    "en": "Siegburg",
  },
  {
    "value": prefix + "DEU_SGE",
    "en": "Siegen",
  },
  {
    "value": prefix + "DEU_SMG",
    "en": "Sigmaringen",
  },
  {
    "value": prefix + "DEU_SIM",
    "en": "Simmern (Hunsrück)",
  },
  {
    "value": prefix + "DEU_SIN",
    "en": "Singen",
  },
  {
    "value": prefix + "DEU_SIH",
    "en": "Sinsheim",
  },
  {
    "value": prefix + "DEU_SZG",
    "en": "Sinzig",
  },
  {
    "value": prefix + "DEU_SOE",
    "en": "Soest",
  },
  {
    "value": prefix + "DEU_SOL",
    "en": "Solingen",
  },
  {
    "value": prefix + "DEU_SOU",
    "en": "Soltau",
  },
  {
    "value": prefix + "DEU_SOM",
    "en": "Sömmerda",
  },
  {
    "value": prefix + "DEU_SDH",
    "en": "Sondershausen",
  },
  {
    "value": prefix + "DEU_SON",
    "en": "Sonneberg",
  },
  {
    "value": prefix + "DEU_SFN",
    "en": "Sonthofen",
  },
  {
    "value": prefix + "DEU_SPA",
    "en": "Spaichingen",
  },
  {
    "value": prefix + "DEU_SRE",
    "en": "Springe",
  },
  {
    "value": prefix + "DEU_83J",
    "en": "Sankt Goar",
  },
  {
    "value": prefix + "DEU_STI",
    "en": "Sankt Ingbert",
  },
  {
    "value": prefix + "DEU_SWE",
    "en": "Sankt Wendel",
  },
  {
    "value": prefix + "DEU_STA",
    "en": "Stade",
  },
  {
    "value": prefix + "DEU_STH",
    "en": "Stadthagen",
  },
  {
    "value": prefix + "DEU_SYA",
    "en": "Stadtroda",
  },
  {
    "value": prefix + "DEU_STN",
    "en": "Starnberg",
  },
  {
    "value": prefix + "DEU_STF",
    "en": "Stassfurt",
  },
  {
    "value": prefix + "DEU_SBR",
    "en": "Staufen im Breisgau",
  },
  {
    "value": prefix + "DEU_S9T",
    "en": "Steinfurt",
  },
  {
    "value": prefix + "DEU_STQ",
    "en": "Stendal",
  },
  {
    "value": prefix + "DEU_SKH",
    "en": "Stockach",
  },
  {
    "value": prefix + "DEU_SLJ",
    "en": "Stolzenau",
  },
  {
    "value": prefix + "DEU_STL",
    "en": "Stralsund",
  },
  {
    "value": prefix + "DEU_STB",
    "en": "Straubing",
  },
  {
    "value": prefix + "DEU_SB2",
    "en": "Strausberg",
  },
  {
    "value": prefix + "DEU_SUL",
    "en": "Suhl",
  },
  {
    "value": prefix + "DEU_SUN",
    "en": "Sulingen",
  },
  {
    "value": prefix + "DEU_SYK",
    "en": "Syke",
  },
  {
    "value": prefix + "DEU_TAU",
    "en": "Tauberbischofsheim",
  },
  {
    "value": prefix + "DEU_TKB",
    "en": "Tecklenburg",
  },
  {
    "value": prefix + "DEU_TET",
    "en": "Tettnang",
  },
  {
    "value": prefix + "DEU_TIR",
    "en": "Tirschenreuth",
  },
  {
    "value": prefix + "DEU_TNE",
    "en": "Titisee-Neustadt",
  },
  {
    "value": prefix + "DEU_TOU",
    "en": "Torgau",
  },
  {
    "value": prefix + "DEU_TST",
    "en": "Tostedt",
  },
  {
    "value": prefix + "DEU_TRA",
    "en": "Traunstein",
  },
  {
    "value": prefix + "DEU_TUT",
    "en": "Tuttlingen",
  },
  {
    "value": prefix + "DEU_UEB",
    "en": "Überlingen",
  },
  {
    "value": prefix + "DEU_UEL",
    "en": "Uelzen",
  },
  {
    "value": prefix + "DEU_ULM",
    "en": "Ulm",
  },
  {
    "value": prefix + "DEU_UNN",
    "en": "Unna",
  },
  {
    "value": prefix + "DEU_VAI",
    "en": "Vaihingen an der Enz",
  },
  {
    "value": prefix + "DEU_VAR",
    "en": "Varel",
  },
  {
    "value": prefix + "DEU_VEC",
    "en": "Vechta",
  },
  {
    "value": prefix + "DEU_VEL",
    "en": "Velbert",
  },
  {
    "value": prefix + "DEU_VER",
    "en": "Verden (Aller)",
  },
  {
    "value": prefix + "DEU_VIT",
    "en": "Viechtach",
  },
  {
    "value": prefix + "DEU_VIE",
    "en": "Viersen",
  },
  {
    "value": prefix + "DEU_VIS",
    "en": "Villingen-Schwenningen",
  },
  {
    "value": prefix + "DEU_VOE",
    "en": "Völklingen",
  },
  {
    "value": prefix + "DEU_WND",
    "en": "Wadern",
  },
  {
    "value": prefix + "DEU_WAI",
    "en": "Waiblingen",
  },
  {
    "value": prefix + "DEU_WAB",
    "en": "Waldbröl",
  },
  {
    "value": prefix + "DEU_WKR",
    "en": "Waldkirch",
  },
  {
    "value": prefix + "DEU_WAT",
    "en": "Waldshut-Tiengen",
  },
  {
    "value": prefix + "DEU_WAL",
    "en": "Walsrode",
  },
  {
    "value": prefix + "DEU_WGN",
    "en": "Wangen im Allgäu",
  },
  {
    "value": prefix + "DEU_WAG",
    "en": "Warburg",
  },
  {
    "value": prefix + "DEU_WRZ",
    "en": "Waren (Müritz)",
  },
  {
    "value": prefix + "DEU_WAD",
    "en": "Warendorf",
  },
  {
    "value": prefix + "DEU_WAN",
    "en": "Warstein",
  },
  {
    "value": prefix + "DEU_WEI",
    "en": "Weiden in der Oberpfalz",
  },
  {
    "value": prefix + "DEU_WEG",
    "en": "Weilburg",
  },
  {
    "value": prefix + "DEU_WEM",
    "en": "Weilheim in Oberbayern",
  },
  {
    "value": prefix + "DEU_WHM",
    "en": "Weinheim",
  },
  {
    "value": prefix + "DEU_WNG",
    "en": "Weissenburg in Bayern",
  },
  {
    "value": prefix + "DEU_WEF",
    "en": "Weissenfels",
  },
  {
    "value": prefix + "DEU_WWS",
    "en": "Weisswasser",
  },
  {
    "value": prefix + "DEU_WEX",
    "en": "Wennigsen (Deister)",
  },
  {
    "value": prefix + "DEU_WEL",
    "en": "Werl",
  },
  {
    "value": prefix + "DEU_WEK",
    "en": "Wermelskirchen",
  },
  {
    "value": prefix + "DEU_WGE",
    "en": "Wernigerode",
  },
  {
    "value": prefix + "DEU_WTM",
    "en": "Wertheim",
  },
  {
    "value": prefix + "DEU_WES",
    "en": "Wesel",
  },
  {
    "value": prefix + "DEU_WBG",
    "en": "Westerburg",
  },
  {
    "value": prefix + "DEU_WSE",
    "en": "Westerstede",
  },
  {
    "value": prefix + "DEU_WTR",
    "en": "Wetter (Ruhr)",
  },
  {
    "value": prefix + "DEU_WET",
    "en": "Wetzlar",
  },
  {
    "value": prefix + "DEU_WIB",
    "en": "Wiesbaden",
  },
  {
    "value": prefix + "DEU_WSY",
    "en": "Wiesloch",
  },
  {
    "value": prefix + "DEU_WWU",
    "en": "Wildau",
  },
  {
    "value": prefix + "DEU_WHU",
    "en": "Wildeshausen",
  },
  {
    "value": prefix + "DEU_WVN",
    "en": "Wilhelmshaven",
  },
  {
    "value": prefix + "DEU_WII",
    "en": "Winsen (Luhe)",
  },
  {
    "value": prefix + "DEU_WPH",
    "en": "Wipperfürth",
  },
  {
    "value": prefix + "DEU_WIS",
    "en": "Wismar",
  },
  {
    "value": prefix + "DEU_WTT",
    "en": "Witten",
  },
  {
    "value": prefix + "DEU_WTH",
    "en": "Wittlich",
  },
  {
    "value": prefix + "DEU_WMD",
    "en": "Wittmund",
  },
  {
    "value": prefix + "DEU_WDL",
    "en": "Wolfach",
  },
  {
    "value": prefix + "DEU_WBL",
    "en": "Wolfenbüttel",
  },
  {
    "value": prefix + "DEU_WOH",
    "en": "Wolfratshausen",
  },
  {
    "value": prefix + "DEU_WOB",
    "en": "Wolfsburg",
  },
  {
    "value": prefix + "DEU_WOL",
    "en": "Wolgast",
  },
  {
    "value": prefix + "DEU_QWS",
    "en": "Wolmirstedt",
  },
  {
    "value": prefix + "DEU_WOR",
    "en": "Worms",
  },
  {
    "value": prefix + "DEU_WUL",
    "en": "Wunsiedel",
  },
  {
    "value": prefix + "DEU_WUP",
    "en": "Wuppertal",
  },
  {
    "value": prefix + "DEU_ZHD",
    "en": "Zehdenick",
  },
  {
    "value": prefix + "DEU_ZEZ",
    "en": "Zeitz",
  },
  {
    "value": prefix + "DEU_ZBT",
    "en": "Zerbst (Anhalt)",
  },
  {
    "value": prefix + "DEU_ZEV",
    "en": "Zeven",
  },
  {
    "value": prefix + "DEU_ZIT",
    "en": "Zittau",
  },
  {
    "value": prefix + "DEU_ZOS",
    "en": "Zossen",
  },
  {
    "value": prefix + "DEU_ZWE",
    "en": "Zweibrücken",
  },
  {
    "value": prefix + "DEU_ZWI",
    "en": "Zwickau",
  },
  {
    "value": prefix + "DEU_BHO",
    "en": "Bad Homburg vor der Höhe",
  },
  {
    "value": prefix + "LTU_NAK",
    "en": "Naujoji Akmenė",
  },
  {
    "value": prefix + "LTU_VIS",
    "en": "Visaginas",
  },
  {
    "value": prefix + "LTU_ZAR",
    "en": "Zarasai",
  },
  {
    "value": prefix + "LTU_IGL",
    "en": "Ignalina",
  },
  {
    "value": prefix + "LTU_SKA",
    "en": "Šakiai",
  },
  {
    "value": prefix + "TZA_ARK",
    "en": "Arusha",
  },
  {
    "value": prefix + "BRB_STM",
    "en": "Saint Michael",
  },
  {
    "value": prefix + "KWT_SAF",
    "en": "Safat",
  },
  {
    "value": prefix + "PSE_RMH",
    "en": "Ramallah",
  },
  {
    "value": prefix + "PHL_MDL",
    "en": "Mandaluyong",
  },
  {
    "value": prefix + "NOR_TOS",
    "en": "Tromsø",
  },
  {
    "value": prefix + "HUN_SZD",
    "en": "Szentendre",
  },
  {
    "value": prefix + "MNE_DNL",
    "en": "Danilovgrad",
  },
  {
    "value": prefix + "AUT_LXE",
    "en": "Laxenburg",
  },
  {
    "value": prefix + "LUX_HES",
    "en": "Hesperange",
  },
  {
    "value": prefix + "LUX_NAN",
    "en": "Niederanven",
  },
  {
    "value": prefix + "IRL_GRG",
    "en": "Grange",
  },
  {
    "value": prefix + "CHN_SGH",
    "cs": "Šanghaj",
    "en": "Shanghai",
  },
  {
    "value": prefix + "LUX_BEE",
    "en": "Beaufort",
  },
  {
    "value": prefix + "LUX_BCH",
    "en": "Bech",
  },
  {
    "value": prefix + "LUX_BDF",
    "en": "Berdorf",
  },
  {
    "value": prefix + "LUX_BTF",
    "en": "Bettendorf",
  },
  {
    "value": prefix + "LUX_BIW",
    "en": "Biwer",
  },
  {
    "value": prefix + "LUX_BOA",
    "en": "Boevange-sur-Attert",
  },
  {
    "value": prefix + "LUX_BAU",
    "en": "Boulaide",
  },
  {
    "value": prefix + "LUX_BUU",
    "en": "Bourscheid",
  },
  {
    "value": prefix + "LUX_BUS",
    "en": "Bous",
  },
  {
    "value": prefix + "LUX_CNS",
    "en": "Consdorf",
  },
  {
    "value": prefix + "LUX_DLM",
    "en": "Dalheim",
  },
  {
    "value": prefix + "LUX_DIP",
    "en": "Dippach",
  },
  {
    "value": prefix + "LUX_LEL",
    "en": "Ell",
  },
  {
    "value": prefix + "LUX_ESS",
    "en": "Esch-sur-Sûre",
  },
  {
    "value": prefix + "LUX_FEE",
    "en": "Feulen",
  },
  {
    "value": prefix + "LUX_FSB",
    "en": "Fischbach",
  },
  {
    "value": prefix + "LUX_FLW",
    "en": "Flaxweiler",
  },
  {
    "value": prefix + "LUX_FRS",
    "en": "Frisange",
  },
  {
    "value": prefix + "LUX_GAR",
    "en": "Garnich",
  },
  {
    "value": prefix + "LUX_GSD",
    "en": "Goesdorf",
  },
  {
    "value": prefix + "LUX_GRB",
    "en": "Grosbous",
  },
  {
    "value": prefix + "LUX_HFN",
    "en": "Heffingen",
  },
  {
    "value": prefix + "LUX_KRJ",
    "en": "Käerjeng",
  },
  {
    "value": prefix + "LUX_KII",
    "en": "Kiischpelt",
  },
  {
    "value": prefix + "LUX_KOP",
    "en": "Kopstal",
  },
  {
    "value": prefix + "LUX_FLS",
    "en": "Larochette",
  },
  {
    "value": prefix + "LUX_MTN",
    "en": "Manternach",
  },
  {
    "value": prefix + "LUX_MRZ",
    "en": "Mertzig",
  },
  {
    "value": prefix + "LUX_MOM",
    "en": "Mompach",
  },
  {
    "value": prefix + "LUX_NOU",
    "en": "Nommern",
  },
  {
    "value": prefix + "LUX_PRH",
    "en": "Parc Hosingen",
  },
  {
    "value": prefix + "LUX_PTT",
    "en": "Putscheid",
  },
  {
    "value": prefix + "LUX_RKM",
    "en": "Reckange-sur-Mess",
  },
  {
    "value": prefix + "LUX_REI",
    "en": "Reisdorf",
  },
  {
    "value": prefix + "LUX_ROE",
    "en": "Roeser",
  },
  {
    "value": prefix + "LUX_RSP",
    "en": "Rosport",
  },
  {
    "value": prefix + "LUX_SEL",
    "en": "Saeul",
  },
  {
    "value": prefix + "LUX_SCR",
    "en": "Schieren",
  },
  {
    "value": prefix + "LUX_SPT",
    "en": "Septfontaines",
  },
  {
    "value": prefix + "LUX_SBD",
    "en": "Stadtbredimus",
  },
  {
    "value": prefix + "LUX_TDL",
    "en": "Tandel",
  },
  {
    "value": prefix + "LUX_TTE",
    "en": "Tuntange",
  },
  {
    "value": prefix + "LUX_VIC",
    "en": "Vichten",
  },
  {
    "value": prefix + "LUX_WAL",
    "en": "Wahl",
  },
  {
    "value": prefix + "LUX_WLB",
    "en": "Waldbillig",
  },
  {
    "value": prefix + "LUX_WBD",
    "en": "Waldbredimus",
  },
  {
    "value": prefix + "LUX_WLF",
    "en": "Walferdange",
  },
  {
    "value": prefix + "LUX_WET",
    "en": "Weiler-la-Tour",
  },
  {
    "value": prefix + "LUX_WNG",
    "en": "Wincrange",
  },
  {
    "value": prefix + "LUX_WNS",
    "en": "Winseler",
  },
  {
    "value": prefix + "NLD_AAH",
    "en": "Aa en Hunze",
  },
  {
    "value": prefix + "NLD_ALB",
    "en": "Aalburg",
  },
  {
    "value": prefix + "NLD_AAM",
    "en": "Aalsmeer",
  },
  {
    "value": prefix + "NLD_LTE",
    "en": "Aalten",
  },
  {
    "value": prefix + "NLD_ACK",
    "en": "Achtkarspelen",
  },
  {
    "value": prefix + "NLD_ABL",
    "en": "Alblasserdam",
  },
  {
    "value": prefix + "NLD_AWD",
    "en": "Albrandswaard",
  },
  {
    "value": prefix + "NLD_AAC",
    "en": "Alphen-Chaam",
  },
  {
    "value": prefix + "NLD_AML",
    "en": "Ameland",
  },
  {
    "value": prefix + "NLD_AMV",
    "en": "Amstelveen",
  },
  {
    "value": prefix + "NLD_APP",
    "en": "Appingedam",
  },
  {
    "value": prefix + "NLD_AST",
    "en": "Asten",
  },
  {
    "value": prefix + "NLD_BNS",
    "en": "Baarle-Nassau",
  },
  {
    "value": prefix + "NLD_BAA",
    "en": "Baarn",
  },
  {
    "value": prefix + "NLD_BRR",
    "en": "Barendrecht",
  },
  {
    "value": prefix + "NLD_BAR",
    "en": "Barneveld",
  },
  {
    "value": prefix + "NLD_BED",
    "en": "Bedum",
  },
  {
    "value": prefix + "NLD_BEQ",
    "en": "Beek",
  },
  {
    "value": prefix + "NLD_BSR",
    "en": "Beemster",
  },
  {
    "value": prefix + "NLD_BSL",
    "en": "Beesel",
  },
  {
    "value": prefix + "NLD_BWR",
    "en": "Bellingwedde",
  },
  {
    "value": prefix + "NLD_BEY",
    "en": "Bergeijk",
  },
  {
    "value": prefix + "NLD_KLL",
    "en": "Berkelland",
  },
  {
    "value": prefix + "NLD_EEZ",
    "en": "Bernheze",
  },
  {
    "value": prefix + "NLD_BST",
    "en": "Best",
  },
  {
    "value": prefix + "NLD_BNN",
    "en": "Beuningen",
  },
  {
    "value": prefix + "NLD_BEV",
    "en": "Beverwijk",
  },
  {
    "value": prefix + "NLD_BNM",
    "en": "Binnenmaas",
  },
  {
    "value": prefix + "NLD_BLL",
    "en": "Bladel",
  },
  {
    "value": prefix + "NLD_BLA",
    "en": "Blaricum",
  },
  {
    "value": prefix + "NLD_BMD",
    "en": "Bloemendaal",
  },
  {
    "value": prefix + "NLD_BRW",
    "en": "Bodegraven-Reeuwijk",
  },
  {
    "value": prefix + "NLD_BEL",
    "en": "Boekel",
  },
  {
    "value": prefix + "NLD_BOO",
    "en": "Borger-Odoorn",
  },
  {
    "value": prefix + "NLD_BRE",
    "en": "Borne",
  },
  {
    "value": prefix + "NLD_BOR",
    "en": "Borsele",
  },
  {
    "value": prefix + "NLD_BXT",
    "en": "Boxtel",
  },
  {
    "value": prefix + "NLD_BCK",
    "en": "Bronckhorst",
  },
  {
    "value": prefix + "NLD_BRM",
    "en": "Brummen",
  },
  {
    "value": prefix + "NLD_BRN",
    "en": "Brunssum",
  },
  {
    "value": prefix + "NLD_BUK",
    "en": "Bunnik",
  },
  {
    "value": prefix + "NLD_BNK",
    "en": "Bunschoten",
  },
  {
    "value": prefix + "NLD_BUR",
    "en": "Buren",
  },
  {
    "value": prefix + "NLD_BSS",
    "en": "Bussum",
  },
  {
    "value": prefix + "NLD_CPI",
    "en": "Capelle aan den Ijssel",
  },
  {
    "value": prefix + "NLD_CAS",
    "en": "Castricum",
  },
  {
    "value": prefix + "NLD_COE",
    "en": "Coevorden",
  },
  {
    "value": prefix + "NLD_CRK",
    "en": "Cranendonck",
  },
  {
    "value": prefix + "NLD_CIJ",
    "en": "Cromstrijen",
  },
  {
    "value": prefix + "NLD_CUY",
    "en": "Cuijk",
  },
  {
    "value": prefix + "NLD_CUB",
    "en": "Culemborg",
  },
  {
    "value": prefix + "NLD_DAL",
    "en": "Dalfsen",
  },
  {
    "value": prefix + "NLD_DTU",
    "en": "Dantumadeel",
  },
  {
    "value": prefix + "NLD_DFM",
    "en": "De Friese Meren",
  },
  {
    "value": prefix + "NLD_DMA",
    "en": "De Marne",
  },
  {
    "value": prefix + "NLD_RVE",
    "en": "De Ronde Venen",
  },
  {
    "value": prefix + "NLD_WOD",
    "en": "De Wolden",
  },
  {
    "value": prefix + "NLD_DZL",
    "en": "Delfzijl",
  },
  {
    "value": prefix + "NLD_DEU",
    "en": "Deurne",
  },
  {
    "value": prefix + "NLD_DIM",
    "en": "Diemen",
  },
  {
    "value": prefix + "NLD_IKL",
    "en": "Dinkelland",
  },
  {
    "value": prefix + "NLD_DOE",
    "en": "Doesburg",
  },
  {
    "value": prefix + "NLD_DOI",
    "en": "Doetinchem",
  },
  {
    "value": prefix + "NLD_DON",
    "en": "Dongen",
  },
  {
    "value": prefix + "NLD_DDE",
    "en": "Dongeradeel",
  },
  {
    "value": prefix + "NLD_DRT",
    "en": "Drechterland",
  },
  {
    "value": prefix + "NLD_DRM",
    "en": "Drimmelen",
  },
  {
    "value": prefix + "NLD_DRO",
    "en": "Dronten",
  },
  {
    "value": prefix + "NLD_DRU",
    "en": "Druten",
  },
  {
    "value": prefix + "NLD_DUI",
    "en": "Duiven",
  },
  {
    "value": prefix + "NLD_ESU",
    "en": "Echt-Susteren",
  },
  {
    "value": prefix + "NLD_EVO",
    "en": "Edam-Volendam",
  },
  {
    "value": prefix + "NLD_EDE",
    "en": "Ede",
  },
  {
    "value": prefix + "NLD_EES",
    "en": "Eemnes",
  },
  {
    "value": prefix + "NLD_EMO",
    "en": "Eemsmond",
  },
  {
    "value": prefix + "NLD_QCT",
    "en": "Eersel",
  },
  {
    "value": prefix + "NLD_EIJ",
    "en": "Eijsden-Margraten",
  },
  {
    "value": prefix + "NLD_ELB",
    "en": "Elburg",
  },
  {
    "value": prefix + "NLD_ENK",
    "en": "Enkhuizen",
  },
  {
    "value": prefix + "NLD_EPE",
    "en": "Epe",
  },
  {
    "value": prefix + "NLD_ERM",
    "en": "Ermelo",
  },
  {
    "value": prefix + "NLD_ETT",
    "en": "Etten-Leur",
  },
  {
    "value": prefix + "NLD_FWD",
    "en": "Ferwerderadeel",
  },
  {
    "value": prefix + "NLD_FKD",
    "en": "Franekeradeel",
  },
  {
    "value": prefix + "NLD_GTB",
    "en": "Geertruidenberg",
  },
  {
    "value": prefix + "NLD_GDM",
    "en": "Geldermalsen",
  },
  {
    "value": prefix + "NLD_GOM",
    "en": "Geldrop-Mierlo",
  },
  {
    "value": prefix + "NLD_GBA",
    "en": "Gemert-Bakel",
  },
  {
    "value": prefix + "NLD_GEN",
    "en": "Gennep",
  },
  {
    "value": prefix + "NLD_GIE",
    "en": "Giessenlanden",
  },
  {
    "value": prefix + "NLD_GIZ",
    "en": "Gilze en Rijen",
  },
  {
    "value": prefix + "NLD_GOF",
    "en": "Goeree-Overflakkee",
  },
  {
    "value": prefix + "NLD_GOE",
    "en": "Goes",
  },
  {
    "value": prefix + "NLD_GOI",
    "en": "Goirle",
  },
  {
    "value": prefix + "NLD_GAV",
    "en": "Grave",
  },
  {
    "value": prefix + "NLD_ZAT",
    "en": "Groesbeek",
  },
  {
    "value": prefix + "NLD_GTG",
    "en": "Grootegast",
  },
  {
    "value": prefix + "NLD_GUW",
    "en": "Gulpen-Wittem",
  },
  {
    "value": prefix + "NLD_HKH",
    "en": "Haaksbergen",
  },
  {
    "value": prefix + "NLD_HRA",
    "en": "Haaren",
  },
  {
    "value": prefix + "NLD_HDB",
    "en": "Halderberge",
  },
  {
    "value": prefix + "NLD_HBG",
    "en": "Hardenberg",
  },
  {
    "value": prefix + "NLD_HXG",
    "en": "Hardinxveld-Giessendam",
  },
  {
    "value": prefix + "NLD_HRE",
    "en": "Haren",
  },
  {
    "value": prefix + "NLD_HAR",
    "en": "Harlingen",
  },
  {
    "value": prefix + "NLD_HTM",
    "en": "Hattem",
  },
  {
    "value": prefix + "NLD_HKE",
    "en": "Heemskerk",
  },
  {
    "value": prefix + "NLD_HMS",
    "en": "Heemstede",
  },
  {
    "value": prefix + "NLD_HRR",
    "en": "Heerde",
  },
  {
    "value": prefix + "NLD_HHW",
    "en": "Heerhugowaard",
  },
  {
    "value": prefix + "NLD_HEZ",
    "en": "Heeze-Leende",
  },
  {
    "value": prefix + "NLD_HLO",
    "en": "Heiloo",
  },
  {
    "value": prefix + "NLD_HLD",
    "en": "Hellendoorn",
  },
  {
    "value": prefix + "NLD_HSL",
    "en": "Hellevoetsluis",
  },
  {
    "value": prefix + "NLD_HIA",
    "en": "Hendrik-Ido-Ambacht",
  },
  {
    "value": prefix + "NLD_HGL",
    "en": "Hengelo",
  },
  {
    "value": prefix + "NLD_HBT",
    "en": "Het Bildt",
  },
  {
    "value": prefix + "NLD_HUM",
    "en": "Heumen",
  },
  {
    "value": prefix + "NLD_HES",
    "en": "Heusden",
  },
  {
    "value": prefix + "NLD_HIL",
    "en": "Hillegom",
  },
  {
    "value": prefix + "NLD_HVK",
    "en": "Hilvarenbeek",
  },
  {
    "value": prefix + "NLD_HTW",
    "en": "Hof van Twente",
  },
  {
    "value": prefix + "NLD_HKN",
    "en": "Hollands Kroon",
  },
  {
    "value": prefix + "NLD_HOV",
    "en": "Hoogeveen",
  },
  {
    "value": prefix + "NLD_HGZ",
    "en": "Hoogezand-Sappemeer",
  },
  {
    "value": prefix + "NLD_HSA",
    "en": "Horst aan de Maas",
  },
  {
    "value": prefix + "NLD_HOU",
    "en": "Houten",
  },
  {
    "value": prefix + "NLD_HUI",
    "en": "Huizen",
  },
  {
    "value": prefix + "NLD_HUL",
    "en": "Hulst",
  },
  {
    "value": prefix + "NLD_IJI",
    "en": "IJsselstein",
  },
  {
    "value": prefix + "NLD_KAA",
    "en": "Kaag en Braassem",
  },
  {
    "value": prefix + "NLD_KAM",
    "en": "Kampen",
  },
  {
    "value": prefix + "NLD_KPL",
    "en": "Kapelle",
  },
  {
    "value": prefix + "NLD_KWK",
    "en": "Katwijk",
  },
  {
    "value": prefix + "NLD_KER",
    "en": "Kerkrade",
  },
  {
    "value": prefix + "NLD_KOL",
    "en": "Koggenland",
  },
  {
    "value": prefix + "NLD_KUN",
    "en": "Kollumerland en Nieuwkruisland",
  },
  {
    "value": prefix + "NLD_KOI",
    "en": "Korendijk",
  },
  {
    "value": prefix + "NLD_KAI",
    "en": "Krimpen aan den Ijssel",
  },
  {
    "value": prefix + "NLD_KIN",
    "en": "Krimpenerwaard",
  },
  {
    "value": prefix + "NLD_LAA",
    "en": "Laarbeek",
  },
  {
    "value": prefix + "NLD_LAD",
    "en": "Landerd",
  },
  {
    "value": prefix + "NLD_LAF",
    "en": "Landgraaf",
  },
  {
    "value": prefix + "NLD_LAM",
    "en": "Landsmeer",
  },
  {
    "value": prefix + "NLD_LIK",
    "en": "Langedijk",
  },
  {
    "value": prefix + "NLD_LSG",
    "en": "Lansingerland",
  },
  {
    "value": prefix + "NLD_LAR",
    "en": "Laren",
  },
  {
    "value": prefix + "NLD_LEE",
    "en": "Leek",
  },
  {
    "value": prefix + "NLD_LRD",
    "en": "Leerdam",
  },
  {
    "value": prefix + "NLD_LUW",
    "en": "Leeuwarderadeel",
  },
  {
    "value": prefix + "NLD_LDD",
    "en": "Leiderdorp",
  },
  {
    "value": prefix + "NLD_LSV",
    "en": "Leidschendam-Voorburg",
  },
  {
    "value": prefix + "NLD_LED",
    "en": "Leudal",
  },
  {
    "value": prefix + "NLD_LEU",
    "en": "Leusden",
  },
  {
    "value": prefix + "NLD_LIW",
    "en": "Lingewaal",
  },
  {
    "value": prefix + "NLD_LIR",
    "en": "Lingewaard",
  },
  {
    "value": prefix + "NLD_QDG",
    "en": "Lisse",
  },
  {
    "value": prefix + "NLD_LIL",
    "en": "Littenseradeel",
  },
  {
    "value": prefix + "NLD_LCH",
    "en": "Lochem",
  },
  {
    "value": prefix + "NLD_LOZ",
    "en": "Loon op Zand",
  },
  {
    "value": prefix + "NLD_LPK",
    "en": "Lopik",
  },
  {
    "value": prefix + "NLD_LPM",
    "en": "Loppersum",
  },
  {
    "value": prefix + "NLD_LOS",
    "en": "Losser",
  },
  {
    "value": prefix + "NLD_MDR",
    "en": "Maasdriel",
  },
  {
    "value": prefix + "NLD_MGW",
    "en": "Maasgouw",
  },
  {
    "value": prefix + "NLD_MSL",
    "en": "Maassluis",
  },
  {
    "value": prefix + "NLD_MRR",
    "en": "Marum",
  },
  {
    "value": prefix + "NLD_MDM",
    "en": "Medemblik",
  },
  {
    "value": prefix + "NLD_MLD",
    "en": "Menaldumadeel",
  },
  {
    "value": prefix + "NLD_MTW",
    "en": "Menterwolde",
  },
  {
    "value": prefix + "NLD_MDF",
    "en": "Midden-Delfland",
  },
  {
    "value": prefix + "NLD_MDD",
    "en": "Midden-Drenthe",
  },
  {
    "value": prefix + "NLD_MSH",
    "en": "Mill en Sint Hubert",
  },
  {
    "value": prefix + "NLD_MOE",
    "en": "Moerdijk",
  },
  {
    "value": prefix + "NLD_MLW",
    "en": "Molenwaard",
  },
  {
    "value": prefix + "NLD_MTL",
    "en": "Montferland",
  },
  {
    "value": prefix + "NLD_MNT",
    "en": "Montfoort",
  },
  {
    "value": prefix + "NLD_MOM",
    "en": "Mook en Middelaar",
  },
  {
    "value": prefix + "NLD_MUD",
    "en": "Muiden",
  },
  {
    "value": prefix + "NLD_NAA",
    "en": "Naarden",
  },
  {
    "value": prefix + "NLD_NBW",
    "en": "Neder-Betuwe",
  },
  {
    "value": prefix + "NLD_NRW",
    "en": "Nederweert",
  },
  {
    "value": prefix + "NLD_NEJ",
    "en": "Neerijnen",
  },
  {
    "value": prefix + "NLD_NWG",
    "en": "Nieuwegein",
  },
  {
    "value": prefix + "NLD_NWK",
    "en": "Nieuwkoop",
  },
  {
    "value": prefix + "NLD_NKK",
    "en": "Nijkerk",
  },
  {
    "value": prefix + "NLD_NIW",
    "en": "Nissewaard",
  },
  {
    "value": prefix + "NLD_NBN",
    "en": "Noord-Beveland",
  },
  {
    "value": prefix + "NLD_NOV",
    "en": "Noordenveld",
  },
  {
    "value": prefix + "NLD_NOP",
    "en": "Noordoostpolder",
  },
  {
    "value": prefix + "NLD_NDW",
    "en": "Noordwijk",
  },
  {
    "value": prefix + "NLD_NOJ",
    "en": "Noordwijkerhout",
  },
  {
    "value": prefix + "NLD_NGN",
    "en": "Nuenen, Gerwen en Nederwetten",
  },
  {
    "value": prefix + "NLD_NUN",
    "en": "Nunspeet",
  },
  {
    "value": prefix + "NLD_NTH",
    "en": "Nuth",
  },
  {
    "value": prefix + "NLD_OGE",
    "en": "Oegstgeest",
  },
  {
    "value": prefix + "NLD_OIH",
    "en": "Oirschot",
  },
  {
    "value": prefix + "NLD_OIW",
    "en": "Oisterwijk",
  },
  {
    "value": prefix + "NLD_OBT",
    "en": "Oldambt",
  },
  {
    "value": prefix + "NLD_OLB",
    "en": "Oldebroek",
  },
  {
    "value": prefix + "NLD_OLZ",
    "en": "Oldenzaal",
  },
  {
    "value": prefix + "NLD_OWI",
    "en": "Olst-Wijhe",
  },
  {
    "value": prefix + "NLD_OMM",
    "en": "Ommen",
  },
  {
    "value": prefix + "NLD_OBK",
    "en": "Onderbanken",
  },
  {
    "value": prefix + "NLD_OOL",
    "en": "Oost Gelre",
  },
  {
    "value": prefix + "NLD_OOS",
    "en": "Oosterhout",
  },
  {
    "value": prefix + "NLD_OOW",
    "en": "Ooststellingwerf",
  },
  {
    "value": prefix + "NLD_OSZ",
    "en": "Oostzaan",
  },
  {
    "value": prefix + "NLD_ZBQ",
    "en": "Opmeer",
  },
  {
    "value": prefix + "NLD_OPT",
    "en": "Opsterland",
  },
  {
    "value": prefix + "NLD_OSS",
    "en": "Oss",
  },
  {
    "value": prefix + "NLD_OUT",
    "en": "Oude IJsselstreek",
  },
  {
    "value": prefix + "NLD_OAT",
    "en": "Ouder-Amstel",
  },
  {
    "value": prefix + "NLD_ODW",
    "en": "Oudewater",
  },
  {
    "value": prefix + "NLD_OVB",
    "en": "Overbetuwe",
  },
  {
    "value": prefix + "NLD_PAP",
    "en": "Papendrecht",
  },
  {
    "value": prefix + "NLD_PEE",
    "en": "Peel en Maas",
  },
  {
    "value": prefix + "NLD_PEK",
    "en": "Pekela",
  },
  {
    "value": prefix + "NLD_PIN",
    "en": "Pijnacker-Nootdorp",
  },
  {
    "value": prefix + "NLD_PUM",
    "en": "Purmerend",
  },
  {
    "value": prefix + "NLD_PTN",
    "en": "Putten",
  },
  {
    "value": prefix + "NLD_QDS",
    "en": "Raalte",
  },
  {
    "value": prefix + "NLD_REW",
    "en": "Reimerswaal",
  },
  {
    "value": prefix + "NLD_RNK",
    "en": "Renkum",
  },
  {
    "value": prefix + "NLD_RWD",
    "en": "Renswoude",
  },
  {
    "value": prefix + "NLD_RDM",
    "en": "Reusel-De Mierden",
  },
  {
    "value": prefix + "NLD_RHD",
    "en": "Rheden",
  },
  {
    "value": prefix + "NLD_RHE",
    "en": "Rhenen",
  },
  {
    "value": prefix + "NLD_RID",
    "en": "Ridderkerk",
  },
  {
    "value": prefix + "NLD_RIW",
    "en": "Rijnwaarden",
  },
  {
    "value": prefix + "NLD_RIH",
    "en": "Rijssen-Holten",
  },
  {
    "value": prefix + "NLD_RYS",
    "en": "Rijswijk",
  },
  {
    "value": prefix + "NLD_ROE",
    "en": "Roerdalen",
  },
  {
    "value": prefix + "NLD_ROO",
    "en": "Roosendaal",
  },
  {
    "value": prefix + "NLD_RZD",
    "en": "Rozendaal",
  },
  {
    "value": prefix + "NLD_RCP",
    "en": "Rucphen",
  },
  {
    "value": prefix + "NLD_SCH",
    "en": "Schagen",
  },
  {
    "value": prefix + "NLD_SRP",
    "en": "Scherpenzeel",
  },
  {
    "value": prefix + "NLD_SMO",
    "en": "Schiermonnikoog",
  },
  {
    "value": prefix + "NLD_SND",
    "en": "Schijndel",
  },
  {
    "value": prefix + "NLD_SCN",
    "en": "Schinnen",
  },
  {
    "value": prefix + "NLD_SWD",
    "en": "Schouwen-Duiveland",
  },
  {
    "value": prefix + "NLD_SIM",
    "en": "Simpelveld",
  },
  {
    "value": prefix + "NLD_SIN",
    "en": "Sint Anthonis",
  },
  {
    "value": prefix + "NLD_SMG",
    "en": "Sint-Michielsgestel",
  },
  {
    "value": prefix + "NLD_OED",
    "en": "Sint-Oedenrode",
  },
  {
    "value": prefix + "NLD_SIG",
    "en": "Sittard-Geleen",
  },
  {
    "value": prefix + "NLD_SLD",
    "en": "Sliedrecht",
  },
  {
    "value": prefix + "NLD_SLO",
    "en": "Slochteren",
  },
  {
    "value": prefix + "NLD_SLS",
    "en": "Sluis",
  },
  {
    "value": prefix + "NLD_SML",
    "en": "Smallingerland",
  },
  {
    "value": prefix + "NLD_SOE",
    "en": "Soest",
  },
  {
    "value": prefix + "NLD_SOM",
    "en": "Someren",
  },
  {
    "value": prefix + "NLD_SBR",
    "en": "Son en Breugel",
  },
  {
    "value": prefix + "NLD_STK",
    "en": "Stadskanaal",
  },
  {
    "value": prefix + "NLD_STH",
    "en": "Staphorst",
  },
  {
    "value": prefix + "NLD_SBC",
    "en": "Stede Broec",
  },
  {
    "value": prefix + "NLD_STE",
    "en": "Steenbergen",
  },
  {
    "value": prefix + "NLD_SEW",
    "en": "Steenwijkerland",
  },
  {
    "value": prefix + "NLD_STI",
    "en": "Stein",
  },
  {
    "value": prefix + "NLD_SVT",
    "en": "Stichtse Vecht",
  },
  {
    "value": prefix + "NLD_TRJ",
    "en": "Strijen",
  },
  {
    "value": prefix + "NLD_NTO",
    "en": "Ten Boer",
  },
  {
    "value": prefix + "NLD_TSL",
    "en": "Terschelling",
  },
  {
    "value": prefix + "NLD_TEX",
    "en": "Texel",
  },
  {
    "value": prefix + "NLD_TEY",
    "en": "Teylingen",
  },
  {
    "value": prefix + "NLD_THO",
    "en": "Tholen",
  },
  {
    "value": prefix + "NLD_TYT",
    "en": "Tytsjerksteradiel",
  },
  {
    "value": prefix + "NLD_TBB",
    "en": "Tubbergen",
  },
  {
    "value": prefix + "NLD_TWT",
    "en": "Twenterand",
  },
  {
    "value": prefix + "NLD_TNO",
    "en": "Tynaarlo",
  },
  {
    "value": prefix + "NLD_UDE",
    "en": "Uden",
  },
  {
    "value": prefix + "NLD_UTG",
    "en": "Uitgeest",
  },
  {
    "value": prefix + "NLD_UIT",
    "en": "Uithoorn",
  },
  {
    "value": prefix + "NLD_URK",
    "en": "Urk",
  },
  {
    "value": prefix + "NLD_UTH",
    "en": "Utrechtse Heuvelrug",
  },
  {
    "value": prefix + "NLD_VLS",
    "en": "Vaals",
  },
  {
    "value": prefix + "NLD_VLK",
    "en": "Valkenburg aan de Geul",
  },
  {
    "value": prefix + "NLD_VAL",
    "en": "Valkenswaard",
  },
  {
    "value": prefix + "NLD_VEE",
    "en": "Veenendaal",
  },
  {
    "value": prefix + "NLD_VER",
    "en": "Veere",
  },
  {
    "value": prefix + "NLD_VEG",
    "en": "Veghel",
  },
  {
    "value": prefix + "NLD_VDH",
    "en": "Veldhoven",
  },
  {
    "value": prefix + "NLD_VEL",
    "en": "Velsen",
  },
  {
    "value": prefix + "NLD_VNR",
    "en": "Venray",
  },
  {
    "value": prefix + "NLD_VAN",
    "en": "Vianen",
  },
  {
    "value": prefix + "NLD_VLA",
    "en": "Vlaardingen",
  },
  {
    "value": prefix + "NLD_VWD",
    "en": "Vlagtwedde",
  },
  {
    "value": prefix + "NLD_VLL",
    "en": "Vlieland",
  },
  {
    "value": prefix + "NLD_VDL",
    "en": "Voerendaal",
  },
  {
    "value": prefix + "NLD_VOS",
    "en": "Voorschoten",
  },
  {
    "value": prefix + "NLD_VRS",
    "en": "Voorst",
  },
  {
    "value": prefix + "NLD_VGT",
    "en": "Vught",
  },
  {
    "value": prefix + "NLD_WAA",
    "en": "Waalre",
  },
  {
    "value": prefix + "NLD_WLK",
    "en": "Waalwijk",
  },
  {
    "value": prefix + "NLD_WAD",
    "en": "Waddinxveen",
  },
  {
    "value": prefix + "NLD_WSS",
    "en": "Wassenaar",
  },
  {
    "value": prefix + "NLD_WTL",
    "en": "Waterland",
  },
  {
    "value": prefix + "NLD_WRT",
    "en": "Weert",
  },
  {
    "value": prefix + "NLD_WSP",
    "en": "Weesp",
  },
  {
    "value": prefix + "NLD_WKD",
    "en": "Werkendam",
  },
  {
    "value": prefix + "NLD_WMW",
    "en": "West Maas en Waal",
  },
  {
    "value": prefix + "NLD_WTV",
    "en": "Westerveld",
  },
  {
    "value": prefix + "NLD_WEV",
    "en": "Westervoort",
  },
  {
    "value": prefix + "NLD_WET",
    "en": "Westland",
  },
  {
    "value": prefix + "NLD_WSW",
    "en": "Weststellingwerf",
  },
  {
    "value": prefix + "NLD_WVO",
    "en": "Westvoorne",
  },
  {
    "value": prefix + "NLD_WID",
    "en": "Wierden",
  },
  {
    "value": prefix + "NLD_WCH",
    "en": "Wijchen",
  },
  {
    "value": prefix + "NLD_WIM",
    "en": "Wijdemeren",
  },
  {
    "value": prefix + "NLD_WBD",
    "en": "Wijk bij Duurstede",
  },
  {
    "value": prefix + "NLD_WNS",
    "en": "Winsum",
  },
  {
    "value": prefix + "NLD_WTW",
    "en": "Winterswijk",
  },
  {
    "value": prefix + "NLD_WOE",
    "en": "Woensdrecht",
  },
  {
    "value": prefix + "NLD_WOR",
    "en": "Woerden",
  },
  {
    "value": prefix + "NLD_WOM",
    "en": "Wormerland",
  },
  {
    "value": prefix + "NLD_WDB",
    "en": "Woudenberg",
  },
  {
    "value": prefix + "NLD_WCM",
    "en": "Woudrichem",
  },
  {
    "value": prefix + "NLD_ZLB",
    "en": "Zaltbommel",
  },
  {
    "value": prefix + "NLD_ZDV",
    "en": "Zandvoort",
  },
  {
    "value": prefix + "NLD_ZDK",
    "en": "Zederik",
  },
  {
    "value": prefix + "NLD_ZEE",
    "en": "Zeevang",
  },
  {
    "value": prefix + "NLD_ZEW",
    "en": "Zeewolde",
  },
  {
    "value": prefix + "NLD_ZIT",
    "en": "Zeist",
  },
  {
    "value": prefix + "NLD_ZEV",
    "en": "Zevenaar",
  },
  {
    "value": prefix + "NLD_ZTM",
    "en": "Zoetermeer",
  },
  {
    "value": prefix + "NLD_ZOU",
    "en": "Zoeterwoude",
  },
  {
    "value": prefix + "NLD_ZUI",
    "en": "Zuidhorn",
  },
  {
    "value": prefix + "NLD_ZDP",
    "en": "Zuidplas",
  },
  {
    "value": prefix + "NLD_SWF",
    "en": "Súdwest-Fryslân",
  },
  {
    "value": prefix + "NLD_ZUD",
    "en": "Zundert",
  },
  {
    "value": prefix + "NLD_ZWT",
    "en": "Zwartewaterland",
  },
  {
    "value": prefix + "NLD_ZWI",
    "en": "Zwijndrecht",
  },
  {
    "value": prefix + "POL_GLB",
    "cs": "Hlubčice",
    "en": "Głubczyce",
  },
  {
    "value": prefix + "POL_NAK",
    "en": "Nakło nad Notecią",
  },
  {
    "value": prefix + "POL_OLU",
    "en": "Opole Lubelskie",
  },
  {
    "value": prefix + "POL_SEJ",
    "en": "Sejny",
  },
  {
    "value": prefix + "POL_TRI",
    "en": "Trzebnica",
  },
  {
    "value": prefix + "POL_WLD",
    "en": "Włodawa",
  },
  {
    "value": prefix + "POL_ZUM",
    "en": "Żuromin",
  },
  {
    "value": prefix + "SVN_BLO",
    "en": "Bloke",
  },
  {
    "value": prefix + "SVN_BRD",
    "en": "Brda",
  },
  {
    "value": prefix + "SVN_CIK",
    "en": "Cirkulane",
  },
  {
    "value": prefix + "SVN_DOJ",
    "en": "Dobje",
  },
  {
    "value": prefix + "SVN_DBJ",
    "en": "Dobrepolje",
  },
  {
    "value": prefix + "SVN_DBR",
    "en": "Dobrna",
  },
  {
    "value": prefix + "SVN_DBP",
    "en": "Dobrova-Polhov Gradec",
  },
  {
    "value": prefix + "SVN_GVJ",
    "en": "Gorenja vas-Poljane",
  },
  {
    "value": prefix + "SVN_GOR",
    "en": "Gorišnica",
  },
  {
    "value": prefix + "SVN_COJ",
    "en": "Gorje",
  },
  {
    "value": prefix + "SVN_GIP",
    "en": "Gornji Petrovci",
  },
  {
    "value": prefix + "SVN_GRA",
    "en": "Grad",
  },
  {
    "value": prefix + "SVN_HAJ",
    "en": "Hajdina",
  },
  {
    "value": prefix + "SVN_HOS",
    "en": "Hoče-Slivnica",
  },
  {
    "value": prefix + "SVN_HOD",
    "en": "Hodoš",
  },
  {
    "value": prefix + "SVN_DHP",
    "en": "Horjul",
  },
  {
    "value": prefix + "SVN_HRK",
    "en": "Hrpelje-Kozina",
  },
  {
    "value": prefix + "SVN_JEZ",
    "en": "Jezersko",
  },
  {
    "value": prefix + "SVN_JUR",
    "en": "Juršinci",
  },
  {
    "value": prefix + "SVN_KOS",
    "en": "Kostel",
  },
  {
    "value": prefix + "SVN_KRZ",
    "en": "Križevci",
  },
  {
    "value": prefix + "SVN_KUN",
    "en": "Kungota",
  },
  {
    "value": prefix + "SVN_LJB",
    "en": "Ljubno",
  },
  {
    "value": prefix + "SVN_LOD",
    "en": "Log-Dragomer",
  },
  {
    "value": prefix + "SVN_LSK",
    "en": "Loška dolina",
  },
  {
    "value": prefix + "SVN_LSP",
    "en": "Loški potok",
  },
  {
    "value": prefix + "SVN_MAJ",
    "en": "Majšperk",
  },
  {
    "value": prefix + "SVN_MIS",
    "en": "Mislinja",
  },
  {
    "value": prefix + "SVN_MOT",
    "en": "Mokronog-Trebelno",
  },
  {
    "value": prefix + "SVN_MVT",
    "en": "Moravske Toplice",
  },
  {
    "value": prefix + "SVN_NAZ",
    "en": "Nazarje",
  },
  {
    "value": prefix + "SVN_OSI",
    "en": "Osilnica",
  },
  {
    "value": prefix + "SVN_RAF",
    "en": "Rače-Fram",
  },
  {
    "value": prefix + "SVN_RAZ",
    "en": "Razkrižje",
  },
  {
    "value": prefix + "SVN_ROS",
    "en": "Rečica ob Savinji",
  },
  {
    "value": prefix + "SVN_SPV",
    "en": "Šempeter-Vrtojba",
  },
  {
    "value": prefix + "SVN_SET",
    "en": "Šentilj",
  },
  {
    "value": prefix + "SVN_SEP",
    "en": "Šentrupert",
  },
  {
    "value": prefix + "SVN_SJT",
    "en": "Šmarješke Toplice",
  },
  {
    "value": prefix + "SVN_SVA",
    "en": "Sveta Ana",
  },
  {
    "value": prefix + "SVN_STS",
    "en": "Sveta Trojica v Slovenskih goricah",
  },
  {
    "value": prefix + "SVN_SNS",
    "en": "Sveti Andraž v Slovenskih goricah",
  },
  {
    "value": prefix + "SVN_SJS",
    "en": "Sveti Jurij ob Ščavnici",
  },
  {
    "value": prefix + "SVN_SJU",
    "en": "Sveti Jurij v Slovenskih goricah",
  },
  {
    "value": prefix + "SVN_SVT",
    "en": "Sveti Tomaž",
  },
  {
    "value": prefix + "MTL_FLY",
    "en": "Fleur-de-Lys",
  },
  {
    "value": prefix + "MLT_ISR",
    "en": "Is-Swatar",
  },
  {
    "value": prefix + "MLT_GWA",
    "en": "Gwardamanġa",
  },
  {
    "value": prefix + "MLT_PAC",
    "en": "Paceville",
  },
  {
    "value": prefix + "MLT_KAP",
    "en": "Il-Kappara",
  },
  {
    "value": prefix + "MLT_XLE",
    "en": "Ix-Xlendi",
  },
  {
    "value": prefix + "MLT_MSF",
    "en": "Marsalforn",
  },
  {
    "value": prefix + "MLT_FAR",
    "en": "Ħal Farruġ",
  },
  {
    "value": prefix + "MLT_BUB",
    "en": "Bubaqra",
  },
  {
    "value": prefix + "MLT_SPE",
    "en": "St Peter's",
  },
  {
    "value": prefix + "MLT_BIC",
    "en": "Baħar iċ-Ċagħaq",
  },
  {
    "value": prefix + "MLT_BAH",
    "en": "Baħrija",
  },
  {
    "value": prefix + "MLT_TVU",
    "en": "Tal-Virtù",
  },
  {
    "value": prefix + "MLT_BUR",
    "en": "Burmarrad",
  },
  {
    "value": prefix + "MLT_MDL",
    "en": "Il-Madliena",
  },
  {
    "value": prefix + "CZE_BRQ",
    "en": "Brno",
  },
  {
    "value": prefix + "SVK_MAC",
    "en": "Malacky",
  },
  {
    "value": prefix + "SVK_PZK",
    "en": "Pezinok",
  },
  {
    "value": prefix + "SVK_SNE",
    "en": "Senec",
  },
  {
    "value": prefix + "SVK_DJA",
    "en": "Dunajská Streda",
  },
  {
    "value": prefix + "SVK_GLT",
    "en": "Galanta",
  },
  {
    "value": prefix + "SVK_HLO",
    "en": "Hlohovec",
  },
  {
    "value": prefix + "SVK_PZY",
    "en": "Piešťany",
  },
  {
    "value": prefix + "SVK_SEA",
    "en": "Senica",
  },
  {
    "value": prefix + "SVK_SKA",
    "en": "Skalica",
  },
  {
    "value": prefix + "SVK_TNA",
    "en": "Trnava",
  },
  {
    "value": prefix + "SVK_BNB",
    "en": "Bánovce nad Bebravou",
  },
  {
    "value": prefix + "SVK_ILV",
    "en": "Ilava",
  },
  {
    "value": prefix + "SVK_MYJ",
    "en": "Myjava",
  },
  {
    "value": prefix + "SVK_NMV",
    "en": "Nové Mesto nad Váhom",
  },
  {
    "value": prefix + "SVK_PAR",
    "en": "Partizánske",
  },
  {
    "value": prefix + "SVK_PBY",
    "en": "Považská Bystrica",
  },
  {
    "value": prefix + "SVK_PZA",
    "en": "Prievidza",
  },
  {
    "value": prefix + "SVK_PCV",
    "en": "Púchov",
  },
  {
    "value": prefix + "SVK_TRE",
    "en": "Trenčín",
  },
  {
    "value": prefix + "SVK_KNA",
    "en": "Komárno",
  },
  {
    "value": prefix + "SVK_LVE",
    "en": "Levice",
  },
  {
    "value": prefix + "SVK_NRA",
    "en": "Nitra",
  },
  {
    "value": prefix + "SVK_NOV",
    "en": "Nové Zámky",
  },
  {
    "value": prefix + "SVK_SLA",
    "en": "Šaľa",
  },
  {
    "value": prefix + "SVK_TCY",
    "en": "Topoľčany",
  },
  {
    "value": prefix + "SVK_ZLM",
    "en": "Zlaté Moravce",
  },
  {
    "value": prefix + "SVK_BCA",
    "en": "Bytča",
  },
  {
    "value": prefix + "SVK_CAD",
    "en": "Čadca",
  },
  {
    "value": prefix + "SVK_DOK",
    "en": "Dolný Kubín",
  },
  {
    "value": prefix + "SVK_KNM",
    "en": "Kysucké Nové Mesto",
  },
  {
    "value": prefix + "SVK_LIM",
    "en": "Liptovský Mikuláš",
  },
  {
    "value": prefix + "SVK_MRT",
    "en": "Martin",
  },
  {
    "value": prefix + "SVK_NSO",
    "en": "Námestovo",
  },
  {
    "value": prefix + "SVK_RZK",
    "en": "Ružomberok",
  },
  {
    "value": prefix + "SVK_TUT",
    "en": "Turčianske Teplice",
  },
  {
    "value": prefix + "SVK_TVR",
    "en": "Tvrdošín",
  },
  {
    "value": prefix + "SVK_ILZ",
    "en": "Žilina",
  },
  {
    "value": prefix + "SVK_BBY",
    "en": "Banská Bystrica",
  },
  {
    "value": prefix + "SVK_SZN",
    "en": "Banská Štiavnica",
  },
  {
    "value": prefix + "SVK_BZO",
    "en": "Brezno",
  },
  {
    "value": prefix + "SVK_DTA",
    "en": "Detva",
  },
  {
    "value": prefix + "SVK_KRU",
    "en": "Krupina",
  },
  {
    "value": prefix + "SVK_LUE",
    "en": "Lučenec",
  },
  {
    "value": prefix + "SVK_PLT",
    "en": "Poltár",
  },
  {
    "value": prefix + "SVK_REV",
    "en": "Revúca",
  },
  {
    "value": prefix + "SVK_RST",
    "en": "Rimavská Sobota",
  },
  {
    "value": prefix + "SVK_VKS",
    "en": "Veľký Krtíš",
  },
  {
    "value": prefix + "SVK_ZVN",
    "en": "Zvolen",
  },
  {
    "value": prefix + "SVK_ZAR",
    "en": "Žarnovica",
  },
  {
    "value": prefix + "SVK_ZIA",
    "en": "Žiar nad Hronom",
  },
  {
    "value": prefix + "SVK_GLA",
    "en": "Gelnica",
  },
  {
    "value": prefix + "SVK_MHC",
    "en": "Michalovce",
  },
  {
    "value": prefix + "SVK_ROZ",
    "en": "Rožňava",
  },
  {
    "value": prefix + "SVK_SOB",
    "en": "Sobrance",
  },
  {
    "value": prefix + "SVK_SNV",
    "en": "Spišská Nová Ves",
  },
  {
    "value": prefix + "SVK_TEB",
    "en": "Trebišov",
  },
  {
    "value": prefix + "SVK_BDV",
    "en": "Bardejov",
  },
  {
    "value": prefix + "SVK_HNE",
    "en": "Humenné",
  },
  {
    "value": prefix + "SVK_KZK",
    "en": "Kežmarok",
  },
  {
    "value": prefix + "SVK_VOA",
    "en": "Levoča",
  },
  {
    "value": prefix + "SVK_MEZ",
    "en": "Medzilaborce",
  },
  {
    "value": prefix + "SVK_POP",
    "en": "Poprad",
  },
  {
    "value": prefix + "SVK_POV",
    "en": "Prešov",
  },
  {
    "value": prefix + "SVK_SAB",
    "en": "Sabinov",
  },
  {
    "value": prefix + "SVK_SNA",
    "en": "Snina",
  },
  {
    "value": prefix + "SVK_SLB",
    "en": "Stará Ľubovňa",
  },
  {
    "value": prefix + "SVK_SPV",
    "en": "Stropkov",
  },
  {
    "value": prefix + "SVK_SVK",
    "en": "Svidník",
  },
  {
    "value": prefix + "SVK_VRA",
    "en": "Vranov nad Topľou",
  },
  {
    "value": prefix + "BGR_ARD",
    "en": "Ardino",
  },
  {
    "value": prefix + "BGR_AND",
    "en": "Asenovgrad",
  },
  {
    "value": prefix + "BGR_AIO",
    "en": "Aitos",
  },
  {
    "value": prefix + "BGR_BAL",
    "en": "Balchik",
  },
  {
    "value": prefix + "BGR_BDK",
    "en": "Belogradchik",
  },
  {
    "value": prefix + "BGR_BRK",
    "en": "Berkovitsa",
  },
  {
    "value": prefix + "BGR_BRF",
    "en": "Botevgrad",
  },
  {
    "value": prefix + "BGR_BRZ",
    "en": "Breznik",
  },
  {
    "value": prefix + "BGR_BYL",
    "en": "Byala",
  },
  {
    "value": prefix + "BGR_BSL",
    "en": "Byala Slatina",
  },
  {
    "value": prefix + "BGR_CPA",
    "en": "Chepelare",
  },
  {
    "value": prefix + "BGR_CHV",
    "en": "Cherven Bryag",
  },
  {
    "value": prefix + "BGR_CPW",
    "en": "Chirpan",
  },
  {
    "value": prefix + "BGR_DEV",
    "en": "Devin",
  },
  {
    "value": prefix + "BGR_DNJ",
    "en": "Devnya",
  },
  {
    "value": prefix + "BGR_DTG",
    "en": "Dimitrovgrad",
  },
  {
    "value": prefix + "BGR_DNV",
    "en": "Dryanovo",
  },
  {
    "value": prefix + "BGR_DLV",
    "en": "Dulovo",
  },
  {
    "value": prefix + "BGR_DUP",
    "en": "Dupnitsa",
  },
  {
    "value": prefix + "BGR_ELE",
    "en": "Elena",
  },
  {
    "value": prefix + "BGR_EHO",
    "en": "Elhovo",
  },
  {
    "value": prefix + "BGR_EPE",
    "en": "Elin Pelin",
  },
  {
    "value": prefix + "BGR_ETS",
    "en": "Etropole",
  },
  {
    "value": prefix + "BGR_GAL",
    "en": "Galabovo",
  },
  {
    "value": prefix + "BGR_TOS",
    "en": "General Toshevo",
  },
  {
    "value": prefix + "BGR_GOZ",
    "en": "Gorna Oryahovitsa",
  },
  {
    "value": prefix + "BGR_GDU",
    "en": "Gotse Delchev",
  },
  {
    "value": prefix + "BGR_HRM",
    "en": "Harmanli",
  },
  {
    "value": prefix + "BGR_IHT",
    "en": "Ihtiman",
  },
  {
    "value": prefix + "BGR_ISP",
    "en": "Isperih",
  },
  {
    "value": prefix + "BGR_IVL",
    "en": "Ivailovgrad",
  },
  {
    "value": prefix + "BGR_KVO",
    "en": "Karlovo",
  },
  {
    "value": prefix + "BGR_KBT",
    "en": "Karnobat",
  },
  {
    "value": prefix + "BGR_KVN",
    "en": "Kavarna",
  },
  {
    "value": prefix + "BGR_KZK",
    "en": "Kazanlak",
  },
  {
    "value": prefix + "BGR_KNE",
    "en": "Knezha",
  },
  {
    "value": prefix + "BGR_KBR",
    "en": "Kostinbrod",
  },
  {
    "value": prefix + "BGR_KOT",
    "en": "Kotel",
  },
  {
    "value": prefix + "BGR_KOZ",
    "en": "Kozloduy",
  },
  {
    "value": prefix + "BGR_KRU",
    "en": "Krumovgrad",
  },
  {
    "value": prefix + "BGR_KUB",
    "en": "Kubrat",
  },
  {
    "value": prefix + "BGR_KUL",
    "en": "Kula",
  },
  {
    "value": prefix + "BGR_LSD",
    "en": "Levski",
  },
  {
    "value": prefix + "BGR_LOM",
    "en": "Lom",
  },
  {
    "value": prefix + "BGR_LUK",
    "en": "Lukovit",
  },
  {
    "value": prefix + "BGR_MAD",
    "en": "Madan",
  },
  {
    "value": prefix + "BGR_MTI",
    "en": "Malko Tarnovo",
  },
  {
    "value": prefix + "BGR_MEZ",
    "en": "Mezdra",
  },
  {
    "value": prefix + "BGR_MOT",
    "en": "Momchilgrad",
  },
  {
    "value": prefix + "BGR_NES",
    "en": "Nesebar",
  },
  {
    "value": prefix + "BGR_NPO",
    "en": "Nikopol",
  },
  {
    "value": prefix + "BGR_NZG",
    "en": "Nova Zagora",
  },
  {
    "value": prefix + "BGR_NPZ",
    "en": "Novi Pazar",
  },
  {
    "value": prefix + "BGR_OMU",
    "en": "Omurtag",
  },
  {
    "value": prefix + "BGR_OKH",
    "en": "Oryahovo",
  },
  {
    "value": prefix + "BGR_PPE",
    "en": "Panagyurishte",
  },
  {
    "value": prefix + "BGR_PVM",
    "en": "Parvomay",
  },
  {
    "value": prefix + "BGR_PIV",
    "en": "Pavlikeni",
  },
  {
    "value": prefix + "BGR_PEC",
    "en": "Peshtera",
  },
  {
    "value": prefix + "BGR_PEG",
    "en": "Petrich",
  },
  {
    "value": prefix + "BGR_PIR",
    "en": "Pirdop",
  },
  {
    "value": prefix + "BGR_POR",
    "en": "Pomorie",
  },
  {
    "value": prefix + "BGR_POK",
    "en": "Popovo",
  },
  {
    "value": prefix + "BGR_PDA",
    "en": "Provadia",
  },
  {
    "value": prefix + "BGR_RDV",
    "en": "Radnevo",
  },
  {
    "value": prefix + "BGR_RDI",
    "en": "Radomir",
  },
  {
    "value": prefix + "BGR_RAZ",
    "en": "Razlog",
  },
  {
    "value": prefix + "BGR_SAM",
    "en": "Samokov",
  },
  {
    "value": prefix + "BGR_SDM",
    "en": "Sandanski",
  },
  {
    "value": prefix + "BGR_SLU",
    "en": "Sevlievo",
  },
  {
    "value": prefix + "BGR_SLN",
    "en": "Slivnitsa",
  },
  {
    "value": prefix + "BGR_SDE",
    "en": "Sredets",
  },
  {
    "value": prefix + "BGR_SWG",
    "en": "Svilengrad",
  },
  {
    "value": prefix + "BGR_SVZ",
    "en": "Svishtov",
  },
  {
    "value": prefix + "BGR_SVG",
    "en": "Svoge",
  },
  {
    "value": prefix + "BGR_TER",
    "en": "Tervel",
  },
  {
    "value": prefix + "BGR_TTV",
    "en": "Teteven",
  },
  {
    "value": prefix + "BGR_TGA",
    "en": "Topolovgrad",
  },
  {
    "value": prefix + "BGR_TRN",
    "en": "Tran",
  },
  {
    "value": prefix + "BGR_TRY",
    "en": "Troyan",
  },
  {
    "value": prefix + "BGR_TRA",
    "en": "Tryavna",
  },
  {
    "value": prefix + "BGR_TRV",
    "en": "Tsarevo",
  },
  {
    "value": prefix + "BGR_TRP",
    "en": "Tutrakan",
  },
  {
    "value": prefix + "BGR_VEP",
    "en": "Veliki Preslav",
  },
  {
    "value": prefix + "BGR_VLE",
    "en": "Velingrad",
  },
  {
    "value": prefix + "BGR_ZLH",
    "en": "Zlatograd",
  },
  {
    "value": prefix + "DNK_AAB",
    "en": "Aabenraa",
  },
  {
    "value": prefix + "DNK_AAL",
    "en": "Aalborg",
  },
  {
    "value": prefix + "DNK_ASN",
    "en": "Assens",
  },
  {
    "value": prefix + "DNK_BHL",
    "en": "Bornholm",
  },
  {
    "value": prefix + "DNK_BSU",
    "en": "Brædstrup",
  },
  {
    "value": prefix + "DNK_BRY",
    "en": "Brøndby",
  },
  {
    "value": prefix + "DNK_BRO",
    "en": "Brønderslev",
  },
  {
    "value": prefix + "DNK_EBJ",
    "en": "Esbjerg",
  },
  {
    "value": prefix + "DNK_FAA",
    "en": "Faaborg",
  },
  {
    "value": prefix + "DNK_FJV",
    "en": "Fjerittslev",
  },
  {
    "value": prefix + "DNK_FRC",
    "en": "Fredericia",
  },
  {
    "value": prefix + "DNK_FBG",
    "en": "Frederiksberg",
  },
  {
    "value": prefix + "DNK_FDH",
    "en": "Frederikshavn",
  },
  {
    "value": prefix + "DNK_FDS",
    "en": "Frederikssund",
  },
  {
    "value": prefix + "DNK_GFE",
    "en": "Gentofte",
  },
  {
    "value": prefix + "DNK_GLX",
    "en": "Gladsaxe",
  },
  {
    "value": prefix + "DNK_GLS",
    "en": "Glostrup",
  },
  {
    "value": prefix + "DNK_GRA",
    "en": "Gråsten",
  },
  {
    "value": prefix + "DNK_GRE",
    "en": "Grenaa",
  },
  {
    "value": prefix + "DNK_GRN",
    "en": "Grindsted",
  },
  {
    "value": prefix + "DNK_HAD",
    "en": "Haderslev",
  },
  {
    "value": prefix + "DNK_HEL",
    "en": "Helsinge",
  },
  {
    "value": prefix + "DNK_HER",
    "en": "Herning",
  },
  {
    "value": prefix + "DNK_HIL",
    "en": "Hillerød",
  },
  {
    "value": prefix + "DNK_HJG",
    "en": "Hjørring",
  },
  {
    "value": prefix + "DNK_HBO",
    "en": "Hobro",
  },
  {
    "value": prefix + "DNK_HBK",
    "en": "Holbæk",
  },
  {
    "value": prefix + "DNK_HSB",
    "en": "Holstebro",
  },
  {
    "value": prefix + "DNK_HST",
    "en": "Holsted",
  },
  {
    "value": prefix + "DNK_HOR",
    "en": "Horsens",
  },
  {
    "value": prefix + "DNK_HHM",
    "en": "Hørsholm",
  },
  {
    "value": prefix + "DNK_HVV",
    "en": "Hvidovre",
  },
  {
    "value": prefix + "DNK_KAL",
    "en": "Kalundborg",
  },
  {
    "value": prefix + "DNK_KTP",
    "en": "Kastrup",
  },
  {
    "value": prefix + "DNK_KJE",
    "en": "Kjellerup",
  },
  {
    "value": prefix + "DNK_BLP",
    "en": "Ballerup",
  },
  {
    "value": prefix + "DNK_KOG",
    "en": "Køge",
  },
  {
    "value": prefix + "DNK_KOL",
    "en": "Kolding",
  },
  {
    "value": prefix + "DNK_KRR",
    "en": "Korsør",
  },
  {
    "value": prefix + "DNK_LVG",
    "en": "Lemvig",
  },
  {
    "value": prefix + "DNK_LYN",
    "en": "Lyngby",
  },
  {
    "value": prefix + "DNK_MRR",
    "en": "Mariager",
  },
  {
    "value": prefix + "DNK_MRV",
    "en": "Maribo",
  },
  {
    "value": prefix + "DNK_MID",
    "en": "Middelfart",
  },
  {
    "value": prefix + "DNK_NVD",
    "en": "Næstved",
  },
  {
    "value": prefix + "DNK_NAK",
    "en": "Nakskov",
  },
  {
    "value": prefix + "DNK_NIB",
    "en": "Nibe",
  },
  {
    "value": prefix + "DNK_NBG",
    "en": "Nyborg",
  },
  {
    "value": prefix + "DNK_NYF",
    "en": "Nykøbing F.",
  },
  {
    "value": prefix + "DNK_NYM",
    "en": "Nykøbing Mors",
  },
  {
    "value": prefix + "DNK_N3S",
    "en": "Nykøbing Sjælland",
  },
  {
    "value": prefix + "DNK_ODE",
    "en": "Odense",
  },
  {
    "value": prefix + "DNK_RAN",
    "en": "Randers",
  },
  {
    "value": prefix + "DNK_RIB",
    "en": "Ribe",
  },
  {
    "value": prefix + "DNK_RKG",
    "en": "Ringkøbing",
  },
  {
    "value": prefix + "DNK_RNG",
    "en": "Ringsted",
  },
  {
    "value": prefix + "DNK_RDG",
    "en": "Rødding",
  },
  {
    "value": prefix + "DNK_RDV",
    "en": "Rødovre",
  },
  {
    "value": prefix + "DNK_RNN",
    "en": "Rønne",
  },
  {
    "value": prefix + "DNK_RKE",
    "en": "Roskilde",
  },
  {
    "value": prefix + "DNK_RKB",
    "en": "Rudkøbing",
  },
  {
    "value": prefix + "DNK_SAE",
    "en": "Sæby",
  },
  {
    "value": prefix + "DNK_SLB",
    "en": "Silkeborg",
  },
  {
    "value": prefix + "DNK_SKG",
    "en": "Skanderborg",
  },
  {
    "value": prefix + "DNK_SKV",
    "en": "Skive",
  },
  {
    "value": prefix + "DNK_SKJ",
    "en": "Skjern",
  },
  {
    "value": prefix + "DNK_SLG",
    "en": "Slagelse",
  },
  {
    "value": prefix + "DNK_SGD",
    "en": "Sønderborg",
  },
  {
    "value": prefix + "DNK_SRO",
    "en": "Sorø",
  },
  {
    "value": prefix + "DNK_SH6",
    "en": "Store Heddinge",
  },
  {
    "value": prefix + "DNK_STR",
    "en": "Struer",
  },
  {
    "value": prefix + "DNK_SVE",
    "en": "Svendborg",
  },
  {
    "value": prefix + "DNK_TAA",
    "en": "Taastrup",
  },
  {
    "value": prefix + "DNK_TER",
    "en": "Terndrup",
  },
  {
    "value": prefix + "DNK_TED",
    "en": "Thisted",
  },
  {
    "value": prefix + "DNK_TON",
    "en": "Tønder",
  },
  {
    "value": prefix + "DNK_VDE",
    "en": "Varde",
  },
  {
    "value": prefix + "DNK_VEJ",
    "en": "Vejle",
  },
  {
    "value": prefix + "DNK_VIB",
    "en": "Viborg",
  },
  {
    "value": prefix + "DNK_VOR",
    "en": "Vordingborg",
  },
  {
    "value": prefix + "GRL_JJU",
    "en": "Julianehåb",
  },
  {
    "value": prefix + "GRL_JHS",
    "en": "Holsteinsborg",
  },
  {
    "value": prefix + "GRL_JAV",
    "en": "Jakobshavn",
  },
  {
    "value": prefix + "DEU_EGG",
    "en": "Eggenfelden",
  },
  {
    "value": prefix + "IRL_GWY",
    "en": "Galway",
  },
  {
    "value": prefix + "NLD_BRX",
    "en": "Bergen",
  },
  {
    "value": prefix + "POL_KOS",
    "en": "Kościerzyna",
  },
  {
    "value": prefix + "USA_NUQ",
    "en": "Mountain View",
  },
  {
    "value": prefix + "USA_BOS",
    "en": "Boston",
  },
  {
    "value": prefix + "HUN_AJK",
    "en": "Ajka",
  },
  {
    "value": prefix + "HUN_BAA",
    "en": "Baja",
  },
  {
    "value": prefix + "HUN_BAL",
    "en": "Balassagyarmat",
  },
  {
    "value": prefix + "HUN_HAN",
    "en": "Barcs",
  },
  {
    "value": prefix + "HUN_BON",
    "en": "Bonyhád",
  },
  {
    "value": prefix + "HUN_BUA",
    "en": "Budaörs",
  },
  {
    "value": prefix + "HUN_CEG",
    "en": "Cegléd",
  },
  {
    "value": prefix + "HUN_HAC",
    "en": "Dabas",
  },
  {
    "value": prefix + "HUN_DOB",
    "en": "Dombóvár",
  },
  {
    "value": prefix + "HUN_DKZ",
    "en": "Dunakeszi",
  },
  {
    "value": prefix + "HUN_ENC",
    "en": "Encs",
  },
  {
    "value": prefix + "HUN_EST",
    "en": "Esztergom",
  },
  {
    "value": prefix + "HUN_FGA",
    "en": "Fehérgyarmat",
  },
  {
    "value": prefix + "HUN_FUY",
    "en": "Füzesabony",
  },
  {
    "value": prefix + "HUN_GDL",
    "en": "Gödöllő",
  },
  {
    "value": prefix + "HUN_GGY",
    "en": "Gyöngyös",
  },
  {
    "value": prefix + "HUN_GYU",
    "en": "Gyula",
  },
  {
    "value": prefix + "HUN_HAJ",
    "en": "Hajdúböszörmény",
  },
  {
    "value": prefix + "HUN_HAT",
    "en": "Hatvan",
  },
  {
    "value": prefix + "HUN_JAS",
    "en": "Jászberény",
  },
  {
    "value": prefix + "HUN_KCO",
    "en": "Kalocsa",
  },
  {
    "value": prefix + "HUN_KAR",
    "en": "Karcag",
  },
  {
    "value": prefix + "HUN_KAZ",
    "en": "Kazincbarcika",
  },
  {
    "value": prefix + "HUN_KEZ",
    "en": "Keszthely",
  },
  {
    "value": prefix + "HUN_KKS",
    "en": "Kiskőrös",
  },
  {
    "value": prefix + "HUN_KIS",
    "en": "Kiskunfélegyháza",
  },
  {
    "value": prefix + "HUN_KSK",
    "en": "Kiskunhalas",
  },
  {
    "value": prefix + "HUN_KIA",
    "en": "Kisvárda",
  },
  {
    "value": prefix + "HUN_KOM",
    "en": "Komárom",
  },
  {
    "value": prefix + "HUN_KOR",
    "en": "Körmend",
  },
  {
    "value": prefix + "HUN_KOS",
    "en": "Kőszeg",
  },
  {
    "value": prefix + "HUN_KZT",
    "en": "Kunszentmárton",
  },
  {
    "value": prefix + "HUN_KZM",
    "en": "Kunszentmiklós",
  },
  {
    "value": prefix + "HUN_LEN",
    "en": "Lenti",
  },
  {
    "value": prefix + "HUN_MKO",
    "en": "Makó",
  },
  {
    "value": prefix + "HUN_MAR",
    "en": "Marcali",
  },
  {
    "value": prefix + "HUN_MAT",
    "en": "Mátészalka",
  },
  {
    "value": prefix + "HUN_MEZ",
    "en": "Mezőkövesd",
  },
  {
    "value": prefix + "HUN_MZO",
    "en": "Mezőtúr",
  },
  {
    "value": prefix + "HUN_MOH",
    "en": "Mohács",
  },
  {
    "value": prefix + "HUN_MON",
    "en": "Monor",
  },
  {
    "value": prefix + "HUN_MNM",
    "en": "Mosonmagyaróvár",
  },
  {
    "value": prefix + "HUN_NGT",
    "en": "Nagyatád",
  },
  {
    "value": prefix + "HUN_NAA",
    "en": "Nagykáta",
  },
  {
    "value": prefix + "HUN_NKS",
    "en": "Nagykőrös",
  },
  {
    "value": prefix + "HUN_NBR",
    "en": "Nyírbátor",
  },
  {
    "value": prefix + "HUN_ORS",
    "en": "Orosháza",
  },
  {
    "value": prefix + "HUN_OZD",
    "en": "Ózd",
  },
  {
    "value": prefix + "HUN_PAK",
    "en": "Paks",
  },
  {
    "value": prefix + "HUN_PAP",
    "en": "Pápa",
  },
  {
    "value": prefix + "HUN_PAS",
    "en": "Pásztó",
  },
  {
    "value": prefix + "HUN_RAA",
    "en": "Ráckeve",
  },
  {
    "value": prefix + "HUN_SVR",
    "en": "Sárvár",
  },
  {
    "value": prefix + "HUN_SAT",
    "en": "Sátoraljaújhely",
  },
  {
    "value": prefix + "HUN_SIK",
    "en": "Siklós",
  },
  {
    "value": prefix + "HUN_SIO",
    "en": "Siófok",
  },
  {
    "value": prefix + "HUN_SVS",
    "en": "Szarvas",
  },
  {
    "value": prefix + "HUN_SHA",
    "en": "Szeghalom",
  },
  {
    "value": prefix + "HUN_SZS",
    "en": "Szentes",
  },
  {
    "value": prefix + "HUN_SZC",
    "en": "Szerencs",
  },
  {
    "value": prefix + "HUN_SZI",
    "en": "Szigetvár",
  },
  {
    "value": prefix + "HUN_SZ2",
    "en": "Szikszó",
  },
  {
    "value": prefix + "HUN_TMS",
    "en": "Tamási",
  },
  {
    "value": prefix + "HUN_TAP",
    "en": "Tapolca",
  },
  {
    "value": prefix + "HUN_TAT",
    "en": "Tata",
  },
  {
    "value": prefix + "HUN_TFD",
    "en": "Tiszafüred",
  },
  {
    "value": prefix + "HUN_TZS",
    "en": "Tiszaújváros",
  },
  {
    "value": prefix + "HUN_VAC",
    "en": "Vác",
  },
  {
    "value": prefix + "HUN_VSY",
    "en": "Vásárosnamény",
  },
  {
    "value": prefix + "HUN_ZRC",
    "en": "Zirc",
  },
  {
    "value": prefix + "HUN_BAT",
    "en": "Battonya",
  },
  {
    "value": prefix + "HUN_FON",
    "en": "Fonyód",
  },
  {
    "value": prefix + "HUN_HSZ",
    "en": "Hajdúszoboszló",
  },
  {
    "value": prefix + "HUN_KLO",
    "en": "Komló",
  },
  {
    "value": prefix + "HUN_PPL",
    "en": "Püspökladány",
  },
  {
    "value": prefix + "IRL_LOG",
    "en": "Loughlinstown",
  },
  {
    "value": prefix + "LBY_JAZ",
    "en": "Janzur",
  },
  {
    "value": prefix + "SWE_SOL",
    "en": "Solna",
  },
  {
    "value": prefix + "AUS_YRL",
    "en": "Yarralumla",
  },
  {
    "value": prefix + "HKG_CL4",
    "en": "Hong Kong Central",
  },
  {
    "value": prefix + "NGA_GRK",
    "en": "Garki",
  },
  {
    "value": prefix + "ITA_OTA",
    "cs": "Prato",
    "en": "Prato",
  },
  {
    "value": prefix + "ROU_TSR",
    "en": "Timisoara",
  },
  {
    "value": prefix + "GRC_FLS",
    "en": "Elefsina",
  },
  {
    "value": prefix + "SRB_NVS",
    "en": "Novi Sad",
  },
  {
    "value": prefix + "FRA_CXP",
    "en": "Carhaix-Plouguer",
  },
  {
    "value": prefix + "VAT_VAT",
    "cs": "Vatikán",
    "en": "Vatican City",
  },
  {
    "value": prefix + "NLD_BUU",
    "en": "Burum",
  },
  {
    "value": prefix + "BDI_GID",
    "cs": "Gitega",
    "en": "Gitega",
  },
  {
    "value": prefix + "OP_DATPRO",
    "cs": "Předběžné údaje",
    "en": "Provisional data",
  },

];

export default codelist;

export function getLabel(iri, lang) {
  for (let index in codelist) {
    if (codelist[index]["value"] === iri) {
      return codelist[index][lang];
    }
  }
  return iri;
}
