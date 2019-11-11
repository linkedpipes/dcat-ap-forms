const prefix = "http://publications.europa.eu/resource/authority/country/";

const codelist = [
  {
    "value": prefix + "AND",
    "cs": "Andorra",
    "en": "Andorra",
  },
  {
    "value": prefix + "ALB",
    "cs": "Albánie",
    "en": "Albania",
  },
  {
    "value": prefix + "AUT",
    "cs": "Rakousko",
    "en": "Austria",
  },
  {
    "value": prefix + "BIH",
    "cs": "Bosna a Hercegovina",
    "en": "Bosnia and Herzegovina",
  },
  {
    "value": prefix + "BEL",
    "cs": "Belgie",
    "en": "Belgium",
  },
  {
    "value": prefix + "BLR",
    "cs": "Bělorusko",
    "en": "Belarus",
  },
  {
    "value": prefix + "BYS",
    "cs": "Bělorusko",
    "en": "Belarus",
  },
  {
    "value": prefix + "CHE",
    "cs": "Švýcarsko",
    "en": "Switzerland",
  },
  {
    "value": prefix + "SCG",
    "cs": "Srbsko a Černá Hora",
    "en": "Serbia and Montenegro",
  },
  {
    "value": prefix + "CYP",
    "cs": "Kypr",
    "en": "Cyprus",
  },
  {
    "value": prefix + "DDR",
    "cs": "Východní Německo",
    "en": "East Germany",
  },
  {
    "value": prefix + "DNK",
    "cs": "Dánsko",
    "en": "Denmark",
  },
  {
    "value": prefix + "EST",
    "cs": "Estonsko",
    "en": "Estonia",
  },
  {
    "value": prefix + "GRC",
    "cs": "Řecko",
    "en": "Greece",
  },
  {
    "value": prefix + "ESP",
    "cs": "Španělsko",
    "en": "Spain",
  },
  {
    "value": prefix + "FIN",
    "cs": "Finsko",
    "en": "Finland",
  },
  {
    "value": prefix + "FRO",
    "cs": "Faerské ostrovy",
    "en": "Faroes",
  },
  {
    "value": prefix + "FRA",
    "cs": "Francie",
    "en": "France",
  },
  {
    "value": prefix + "GGY",
    "cs": "Guernsey",
    "en": "Guernsey",
  },
  {
    "value": prefix + "GIB",
    "cs": "Gibraltar",
    "en": "Gibraltar",
  },
  {
    "value": prefix + "GRL",
    "cs": "Grónsko",
    "en": "Greenland",
  },
  {
    "value": prefix + "HRV",
    "cs": "Chorvatsko",
    "en": "Croatia",
  },
  {
    "value": prefix + "IRL",
    "cs": "Irsko",
    "en": "Ireland",
  },
  {
    "value": prefix + "IMN",
    "cs": "Ostrov Man",
    "en": "Isle of Man",
  },
  {
    "value": prefix + "ISL",
    "cs": "Island",
    "en": "Iceland",
  },
  {
    "value": prefix + "ITA",
    "cs": "Itálie",
    "en": "Italy",
  },
  {
    "value": prefix + "JEY",
    "cs": "Jersey",
    "en": "Jersey",
  },
  {
    "value": prefix + "LIE",
    "cs": "Lichtenštejnsko",
    "en": "Liechtenstein",
  },
  {
    "value": prefix + "LTU",
    "cs": "Litva",
    "en": "Lithuania",
  },
  {
    "value": prefix + "LUX",
    "cs": "Lucembursko",
    "en": "Luxembourg",
  },
  {
    "value": prefix + "LVA",
    "cs": "Lotyšsko",
    "en": "Latvia",
  },
  {
    "value": prefix + "MCO",
    "cs": "Monako",
    "en": "Monaco",
  },
  {
    "value": prefix + "MDA",
    "cs": "Moldavsko",
    "en": "Moldova",
  },
  {
    "value": prefix + "MNE",
    "cs": "Černá Hora",
    "en": "Montenegro",
  },
  {
    "value": prefix + "MLT",
    "cs": "Malta",
    "en": "Malta",
  },
  {
    "value": prefix + "NLD",
    "cs": "Nizozemsko",
    "en": "Netherlands",
  },
  {
    "value": prefix + "NOR",
    "cs": "Norsko",
    "en": "Norway",
  },
  {
    "value": prefix + "POL",
    "cs": "Polsko",
    "en": "Poland",
  },
  {
    "value": prefix + "PRT",
    "cs": "Portugalsko",
    "en": "Portugal",
  },
  {
    "value": prefix + "ROU",
    "cs": "Rumunsko",
    "en": "Romania",
  },
  {
    "value": prefix + "SRB",
    "cs": "Srbsko",
    "en": "Serbia",
  },
  {
    "value": prefix + "RUS",
    "cs": "Rusko",
    "en": "Russia",
  },
  {
    "value": prefix + "SWE",
    "cs": "Švédsko",
    "en": "Sweden",
  },
  {
    "value": prefix + "SVN",
    "cs": "Slovinsko",
    "en": "Slovenia",
  },
  {
    "value": prefix + "SVK",
    "cs": "Slovensko",
    "en": "Slovakia",
  },
  {
    "value": prefix + "SMR",
    "cs": "San Marino",
    "en": "San Marino",
  },
  {
    "value": prefix + "SUN",
    "cs": "Sovětský svaz",
    "en": "Soviet Union",
  },
  {
    "value": prefix + "TUR",
    "cs": "Turecko",
    "en": "Turkey",
  },
  {
    "value": prefix + "UKR",
    "cs": "Ukrajina",
    "en": "Ukraine",
  },
  {
    "value": prefix + "GBR",
    "cs": "Spojené království",
    "en": "United Kingdom",
  },
  {
    "value": prefix + "VAT",
    "cs": "Městský stát Vatikán",
    "en": "Vatican City",
  },
  {
    "value": prefix + "YUG",
    "cs": "Jugoslávie",
    "en": "Yugoslavia",
  },
  {
    "value": prefix + "CSK",
    "cs": "Československo",
    "en": "Czechoslovakia",
  },
  {
    "value": prefix + "BGR",
    "cs": "Bulharsko",
    "en": "Bulgaria",
  },
  {
    "value": prefix + "DEU",
    "cs": "Německo",
    "en": "Germany",
  },
  {
    "value": prefix + "ALA",
    "cs": "Alandy",
    "en": "Åland Islands",
  },
  {
    "value": prefix + "DZA",
    "cs": "Alžírsko",
    "en": "Algeria",
  },
  {
    "value": prefix + "ASM",
    "cs": "Americká Samoa",
    "en": "American Samoa",
  },
  {
    "value": prefix + "AGO",
    "cs": "Angola",
    "en": "Angola",
  },
  {
    "value": prefix + "AIA",
    "cs": "Anguilla",
    "en": "Anguilla",
  },
  {
    "value": prefix + "ATA",
    "cs": "Antarktida",
    "en": "Antarctica",
  },
  {
    "value": prefix + "ATG",
    "cs": "Antigua a Barbuda",
    "en": "Antigua and Barbuda",
  },
  {
    "value": prefix + "ARG",
    "cs": "Argentina",
    "en": "Argentina",
  },
  {
    "value": prefix + "ARM",
    "cs": "Arménie",
    "en": "Armenia",
  },
  {
    "value": prefix + "ABW",
    "cs": "Aruba",
    "en": "Aruba",
  },
  {
    "value": prefix + "AUS",
    "cs": "Austrálie",
    "en": "Australia",
  },
  {
    "value": prefix + "AZE",
    "cs": "Ázerbájdžán",
    "en": "Azerbaijan",
  },
  {
    "value": prefix + "BHS",
    "cs": "Bahamy",
    "en": "Bahamas",
  },
  {
    "value": prefix + "BHR",
    "cs": "Bahrajn",
    "en": "Bahrain",
  },
  {
    "value": prefix + "BGD",
    "cs": "Bangladéš",
    "en": "Bangladesh",
  },
  {
    "value": prefix + "BRB",
    "cs": "Barbados",
    "en": "Barbados",
  },
  {
    "value": prefix + "BLZ",
    "cs": "Belize",
    "en": "Belize",
  },
  {
    "value": prefix + "BEN",
    "cs": "Benin",
    "en": "Benin",
  },
  {
    "value": prefix + "BMU",
    "cs": "Bermudy",
    "en": "Bermuda",
  },
  {
    "value": prefix + "BTN",
    "cs": "Bhútán",
    "en": "Bhutan",
  },
  {
    "value": prefix + "BOL",
    "cs": "Bolívie",
    "en": "Bolivia",
  },
  {
    "value": prefix + "BWA",
    "cs": "Botswana",
    "en": "Botswana",
  },
  {
    "value": prefix + "BVT",
    "cs": "Bouvetův ostrov",
    "en": "Bouvet Island",
  },
  {
    "value": prefix + "BRA",
    "cs": "Brazílie",
    "en": "Brazil",
  },
  {
    "value": prefix + "IOT",
    "cs": "Britské indickooceánské území",
    "en": "British Indian Ocean Territory",
  },
  {
    "value": prefix + "VGB",
    "cs": "Britské Panenské ostrovy",
    "en": "British Virgin Islands",
  },
  {
    "value": prefix + "BRN",
    "cs": "Brunej",
    "en": "Brunei",
  },
  {
    "value": prefix + "BFA",
    "cs": "Burkina Faso",
    "en": "Burkina Faso",
  },
  {
    "value": prefix + "BDI",
    "cs": "Burundi",
    "en": "Burundi",
  },
  {
    "value": prefix + "KHM",
    "cs": "Kambodža",
    "en": "Cambodia",
  },
  {
    "value": prefix + "CMR",
    "cs": "Kamerun",
    "en": "Cameroon",
  },
  {
    "value": prefix + "CAN",
    "cs": "Kanada",
    "en": "Canada",
  },
  {
    "value": prefix + "CPV",
    "cs": "Kapverdy",
    "en": "Cape Verde",
  },
  {
    "value": prefix + "CYM",
    "cs": "Kajmanské ostrovy",
    "en": "Cayman Islands",
  },
  {
    "value": prefix + "CAF",
    "cs": "Středoafrická republika",
    "en": "Central African Republic",
  },
  {
    "value": prefix + "TCD",
    "cs": "Čad",
    "en": "Chad",
  },
  {
    "value": prefix + "CHL",
    "cs": "Chile",
    "en": "Chile",
  },
  {
    "value": prefix + "CHN",
    "cs": "Čína",
    "en": "China",
  },
  {
    "value": prefix + "CXR",
    "cs": "Vánoční ostrov",
    "en": "Christmas Island",
  },
  {
    "value": prefix + "CPT",
    "cs": "Clipperton",
    "en": "Clipperton",
  },
  {
    "value": prefix + "CCK",
    "cs": "Kokosové (Keelingovy) ostrovy",
    "en": "Cocos (Keeling) Islands",
  },
  {
    "value": prefix + "COL",
    "cs": "Kolumbie",
    "en": "Colombia",
  },
  {
    "value": prefix + "COM",
    "cs": "Komory",
    "en": "Comoros",
  },
  {
    "value": prefix + "COG",
    "cs": "Kongo",
    "en": "Congo",
  },
  {
    "value": prefix + "COK",
    "cs": "Cookovy ostrovy",
    "en": "Cook Islands",
  },
  {
    "value": prefix + "CRI",
    "cs": "Kostarika",
    "en": "Costa Rica",
  },
  {
    "value": prefix + "CIV",
    "cs": "Pobřeží slonoviny",
    "en": "Côte d’Ivoire",
  },
  {
    "value": prefix + "CUB",
    "cs": "Kuba",
    "en": "Cuba",
  },
  {
    "value": prefix + "COD",
    "cs": "Demokratická republika Kongo",
    "en": "Democratic Republic of the Congo",
  },
  {
    "value": prefix + "DJI",
    "cs": "Džibutsko",
    "en": "Djibouti",
  },
  {
    "value": prefix + "DMA",
    "cs": "Dominika",
    "en": "Dominica",
  },
  {
    "value": prefix + "DOM",
    "cs": "Dominikánská republika",
    "en": "Dominican Republic",
  },
  {
    "value": prefix + "TLS",
    "cs": "Východní Timor",
    "en": "Timor-Leste",
  },
  {
    "value": prefix + "ECU",
    "cs": "Ekvádor",
    "en": "Ecuador",
  },
  {
    "value": prefix + "EGY",
    "cs": "Egypt",
    "en": "Egypt",
  },
  {
    "value": prefix + "SLV",
    "cs": "Salvador",
    "en": "El Salvador",
  },
  {
    "value": prefix + "GNQ",
    "cs": "Rovníková Guinea",
    "en": "Equatorial Guinea",
  },
  {
    "value": prefix + "ERI",
    "cs": "Eritrea",
    "en": "Eritrea",
  },
  {
    "value": prefix + "ETH",
    "cs": "Etiopie",
    "en": "Ethiopia",
  },
  {
    "value": prefix + "FLK",
    "cs": "Falklandské ostrovy",
    "en": "Falkland Islands",
  },
  {
    "value": prefix + "FJI",
    "cs": "Fidži",
    "en": "Fiji",
  },
  {
    "value": prefix + "GUF",
    "cs": "Francouzská Guyana",
    "en": "French Guiana",
  },
  {
    "value": prefix + "PYF",
    "cs": "Francouzská Polynésie",
    "en": "French Polynesia",
  },
  {
    "value": prefix + "ATF",
    "cs": "Francouzská jižní území",
    "en": "French Southern Lands",
  },
  {
    "value": prefix + "GAB",
    "cs": "Gabon",
    "en": "Gabon",
  },
  {
    "value": prefix + "GMB",
    "cs": "Gambie",
    "en": "The Gambia",
  },
  {
    "value": prefix + "GEO",
    "cs": "Gruzie",
    "en": "Georgia",
  },
  {
    "value": prefix + "GHA",
    "cs": "Ghana",
    "en": "Ghana",
  },
  {
    "value": prefix + "GRD",
    "cs": "Grenada",
    "en": "Grenada",
  },
  {
    "value": prefix + "GLP",
    "cs": "Guadeloupe",
    "en": "Guadeloupe",
  },
  {
    "value": prefix + "GUM",
    "cs": "Guam",
    "en": "Guam",
  },
  {
    "value": prefix + "GTM",
    "cs": "Guatemala",
    "en": "Guatemala",
  },
  {
    "value": prefix + "GIN",
    "cs": "Guinea",
    "en": "Guinea",
  },
  {
    "value": prefix + "GNB",
    "cs": "Guinea-Bissau",
    "en": "Guinea-Bissau",
  },
  {
    "value": prefix + "GUY",
    "cs": "Guyana",
    "en": "Guyana",
  },
  {
    "value": prefix + "HTI",
    "cs": "Haiti",
    "en": "Haiti",
  },
  {
    "value": prefix + "HMD",
    "cs": "Heardův ostrov a McDonaldovy ostrovy",
    "en": "Heard Island and McDonald Islands",
  },
  {
    "value": prefix + "HND",
    "cs": "Honduras",
    "en": "Honduras",
  },
  {
    "value": prefix + "HKG",
    "cs": "Hongkong",
    "en": "Hong Kong",
  },
  {
    "value": prefix + "IND",
    "cs": "Indie",
    "en": "India",
  },
  {
    "value": prefix + "IDN",
    "cs": "Indonésie",
    "en": "Indonesia",
  },
  {
    "value": prefix + "IRN",
    "cs": "Írán",
    "en": "Iran",
  },
  {
    "value": prefix + "IRQ",
    "cs": "Irák",
    "en": "Iraq",
  },
  {
    "value": prefix + "ISR",
    "cs": "Izrael",
    "en": "Israel",
  },
  {
    "value": prefix + "JAM",
    "cs": "Jamajka",
    "en": "Jamaica",
  },
  {
    "value": prefix + "JPN",
    "cs": "Japonsko",
    "en": "Japan",
  },
  {
    "value": prefix + "JOR",
    "cs": "Jordánsko",
    "en": "Jordan",
  },
  {
    "value": prefix + "KAZ",
    "cs": "Kazachstán",
    "en": "Kazakhstan",
  },
  {
    "value": prefix + "KEN",
    "cs": "Keňa",
    "en": "Kenya",
  },
  {
    "value": prefix + "KIR",
    "cs": "Kiribati",
    "en": "Kiribati",
  },
  {
    "value": prefix + "KWT",
    "cs": "Kuvajt",
    "en": "Kuwait",
  },
  {
    "value": prefix + "KGZ",
    "cs": "Kyrgyzstán",
    "en": "Kyrgyzstan",
  },
  {
    "value": prefix + "LAO",
    "cs": "Laos",
    "en": "Laos",
  },
  {
    "value": prefix + "LBN",
    "cs": "Libanon",
    "en": "Lebanon",
  },
  {
    "value": prefix + "LSO",
    "cs": "Lesotho",
    "en": "Lesotho",
  },
  {
    "value": prefix + "LBR",
    "cs": "Libérie",
    "en": "Liberia",
  },
  {
    "value": prefix + "MAC",
    "cs": "Macao",
    "en": "Macau",
  },
  {
    "value": prefix + "MDG",
    "cs": "Madagaskar",
    "en": "Madagascar",
  },
  {
    "value": prefix + "MWI",
    "cs": "Malawi",
    "en": "Malawi",
  },
  {
    "value": prefix + "MYS",
    "cs": "Malajsie",
    "en": "Malaysia",
  },
  {
    "value": prefix + "MDV",
    "cs": "Maledivy",
    "en": "Maldives",
  },
  {
    "value": prefix + "MLI",
    "cs": "Mali",
    "en": "Mali",
  },
  {
    "value": prefix + "MHL",
    "cs": "Marshallovy ostrovy",
    "en": "Marshall Islands",
  },
  {
    "value": prefix + "MTQ",
    "cs": "Martinik",
    "en": "Martinique",
  },
  {
    "value": prefix + "MRT",
    "cs": "Mauritánie",
    "en": "Mauritania",
  },
  {
    "value": prefix + "MUS",
    "cs": "Mauricius",
    "en": "Mauritius",
  },
  {
    "value": prefix + "MEX",
    "cs": "Mexiko",
    "en": "Mexico",
  },
  {
    "value": prefix + "FSM",
    "cs": "Mikronésie",
    "en": "Micronesia",
  },
  {
    "value": prefix + "MNG",
    "cs": "Mongolsko",
    "en": "Mongolia",
  },
  {
    "value": prefix + "MSR",
    "cs": "Montserrat",
    "en": "Montserrat",
  },
  {
    "value": prefix + "MAR",
    "cs": "Maroko",
    "en": "Morocco",
  },
  {
    "value": prefix + "MOZ",
    "cs": "Mosambik",
    "en": "Mozambique",
  },
  {
    "value": prefix + "NAM",
    "cs": "Namibie",
    "en": "Namibia",
  },
  {
    "value": prefix + "NRU",
    "cs": "Nauru",
    "en": "Nauru",
  },
  {
    "value": prefix + "ANT",
    "cs": "Nizozemské Antily",
    "en": "Netherlands Antilles",
  },
  {
    "value": prefix + "NZL",
    "cs": "Nový Zéland",
    "en": "New Zealand",
  },
  {
    "value": prefix + "NIC",
    "cs": "Nikaragua",
    "en": "Nicaragua",
  },
  {
    "value": prefix + "NER",
    "cs": "Niger",
    "en": "Niger",
  },
  {
    "value": prefix + "NGA",
    "cs": "Nigérie",
    "en": "Nigeria",
  },
  {
    "value": prefix + "NIU",
    "cs": "Niue",
    "en": "Niue",
  },
  {
    "value": prefix + "NFK",
    "cs": "Ostrov Norfolk",
    "en": "Norfolk Island",
  },
  {
    "value": prefix + "PRK",
    "cs": "Severní Korea",
    "en": "North Korea",
  },
  {
    "value": prefix + "MNP",
    "cs": "Ostrovy Severní Mariany",
    "en": "Northern Mariana Islands",
  },
  {
    "value": prefix + "OMN",
    "cs": "Omán",
    "en": "Oman",
  },
  {
    "value": prefix + "PAK",
    "cs": "Pákistán",
    "en": "Pakistan",
  },
  {
    "value": prefix + "PLW",
    "cs": "Palau",
    "en": "Palau",
  },
  {
    "value": prefix + "PSE",
    "cs": "Palestina",
    "en": "Palestine",
  },
  {
    "value": prefix + "PAN",
    "cs": "Panama",
    "en": "Panama",
  },
  {
    "value": prefix + "PNG",
    "cs": "Papua-Nová Guinea",
    "en": "Papua New Guinea",
  },
  {
    "value": prefix + "PRY",
    "cs": "Paraguay",
    "en": "Paraguay",
  },
  {
    "value": prefix + "PER",
    "cs": "Peru",
    "en": "Peru",
  },
  {
    "value": prefix + "PHL",
    "cs": "Filipíny",
    "en": "Philippines",
  },
  {
    "value": prefix + "PCN",
    "cs": "Pitcairn",
    "en": "Pitcairn Islands",
  },
  {
    "value": prefix + "PRI",
    "cs": "Portoriko",
    "en": "Puerto Rico",
  },
  {
    "value": prefix + "QAT",
    "cs": "Katar",
    "en": "Qatar",
  },
  {
    "value": prefix + "REU",
    "cs": "Réunion",
    "en": "Réunion",
  },
  {
    "value": prefix + "RWA",
    "cs": "Rwanda",
    "en": "Rwanda",
  },
  {
    "value": prefix + "BLM",
    "cs": "Saint-Barthélemy",
    "en": "Saint Barthélemy",
  },
  {
    "value": prefix + "KNA",
    "cs": "Svatý Kryštof a Nevis",
    "en": "Saint Kitts and Nevis",
  },
  {
    "value": prefix + "LCA",
    "cs": "Svatá Lucie",
    "en": "Saint Lucia",
  },
  {
    "value": prefix + "MAF",
    "cs": "Svatý Martin",
    "en": "Saint Martin",
  },
  {
    "value": prefix + "SPM",
    "cs": "Saint-Pierre a Miquelon",
    "en": "Saint Pierre and Miquelon",
  },
  {
    "value": prefix + "VCT",
    "cs": "Svatý Vincenc a Grenadiny",
    "en": "Saint Vincent and the Grenadines",
  },
  {
    "value": prefix + "WSM",
    "cs": "Samoa",
    "en": "Samoa",
  },
  {
    "value": prefix + "STP",
    "cs": "Svatý Tomáš a Princův ostrov",
    "en": "São Tomé and Príncipe",
  },
  {
    "value": prefix + "SAU",
    "cs": "Saúdská Arábie",
    "en": "Saudi Arabia",
  },
  {
    "value": prefix + "SEN",
    "cs": "Senegal",
    "en": "Senegal",
  },
  {
    "value": prefix + "SYC",
    "cs": "Seychely",
    "en": "Seychelles",
  },
  {
    "value": prefix + "SLE",
    "cs": "Sierra Leone",
    "en": "Sierra Leone",
  },
  {
    "value": prefix + "SGP",
    "cs": "Singapur",
    "en": "Singapore",
  },
  {
    "value": prefix + "SLB",
    "cs": "Šalamounovy ostrovy",
    "en": "Solomon Islands",
  },
  {
    "value": prefix + "ZAF",
    "cs": "Jižní Afrika",
    "en": "South Africa",
  },
  {
    "value": prefix + "SGS",
    "cs": "Jižní Georgie a Jižní Sandwichovy ostrovy",
    "en": "South Georgia and the South Sandwich Islands",
  },
  {
    "value": prefix + "KOR",
    "cs": "Jižní Korea",
    "en": "South Korea",
  },
  {
    "value": prefix + "LKA",
    "cs": "Šrí Lanka",
    "en": "Sri Lanka",
  },
  {
    "value": prefix + "SDN",
    "cs": "Súdán",
    "en": "Sudan",
  },
  {
    "value": prefix + "SUR",
    "cs": "Surinam",
    "en": "Suriname",
  },
  {
    "value": prefix + "SJM",
    "cs": "Svalbard a Jan Mayen",
    "en": "Svalbard and Jan Mayen",
  },
  {
    "value": prefix + "SYR",
    "cs": "Sýrie",
    "en": "Syria",
  },
  {
    "value": prefix + "TWN",
    "cs": "Tchaj-wan",
    "en": "Taiwan",
  },
  {
    "value": prefix + "TJK",
    "cs": "Tádžikistán",
    "en": "Tajikistan",
  },
  {
    "value": prefix + "TZA",
    "cs": "Tanzanie",
    "en": "Tanzania",
  },
  {
    "value": prefix + "THA",
    "cs": "Thajsko",
    "en": "Thailand",
  },
  {
    "value": prefix + "TGO",
    "cs": "Togo",
    "en": "Togo",
  },
  {
    "value": prefix + "TKL",
    "cs": "Tokelau",
    "en": "Tokelau",
  },
  {
    "value": prefix + "TON",
    "cs": "Tonga",
    "en": "Tonga",
  },
  {
    "value": prefix + "TTO",
    "cs": "Trinidad a Tobago",
    "en": "Trinidad and Tobago",
  },
  {
    "value": prefix + "TUN",
    "cs": "Tunisko",
    "en": "Tunisia",
  },
  {
    "value": prefix + "TKM",
    "cs": "Turkmenistán",
    "en": "Turkmenistan",
  },
  {
    "value": prefix + "TCA",
    "cs": "Ostrovy Turks a Caicos",
    "en": "Turks and Caicos Islands",
  },
  {
    "value": prefix + "TUV",
    "cs": "Tuvalu",
    "en": "Tuvalu",
  },
  {
    "value": prefix + "UGA",
    "cs": "Uganda",
    "en": "Uganda",
  },
  {
    "value": prefix + "ARE",
    "cs": "Spojené arabské emiráty",
    "en": "United Arab Emirates",
  },
  {
    "value": prefix + "USA",
    "cs": "Spojené státy",
    "en": "United States",
  },
  {
    "value": prefix + "UMI",
    "cs": "Menší odlehlé ostrovy USA",
    "en": "United States Minor Outlying Islands",
  },
  {
    "value": prefix + "URY",
    "cs": "Uruguay",
    "en": "Uruguay",
  },
  {
    "value": prefix + "VIR",
    "cs": "Americké Panenské ostrovy",
    "en": "US Virgin Islands",
  },
  {
    "value": prefix + "UZB",
    "cs": "Uzbekistán",
    "en": "Uzbekistan",
  },
  {
    "value": prefix + "VUT",
    "cs": "Vanuatu",
    "en": "Vanuatu",
  },
  {
    "value": prefix + "VEN",
    "cs": "Venezuela",
    "en": "Venezuela",
  },
  {
    "value": prefix + "VNM",
    "cs": "Vietnam",
    "en": "Vietnam",
  },
  {
    "value": prefix + "ESH",
    "cs": "Západní Sahara",
    "en": "Western Sahara",
  },
  {
    "value": prefix + "YEM",
    "cs": "Jemen",
    "en": "Yemen",
  },
  {
    "value": prefix + "ZMB",
    "cs": "Zambie",
    "en": "Zambia",
  },
  {
    "value": prefix + "ZWE",
    "cs": "Zimbabwe",
    "en": "Zimbabwe",
  },
  {
    "value": prefix + "AFG",
    "cs": "Afghánistán",
    "en": "Afghanistan",
  },
  {
    "value": prefix + "BUR",
    "en": "Burma",
  },
  {
    "value": prefix + "1A0",
    "cs": "Kosovo",
    "en": "Kosovo",
  },
  {
    "value": prefix + "HVO",
    "en": "Upper Volta",
  },
  {
    "value": prefix + "ZR0",
    "en": "Zaire",
  },
  {
    "value": prefix + "AFI",
    "en": "French Afar and Issas",
  },
  {
    "value": prefix + "ATB",
    "en": "British Antarctic Territory",
  },
  {
    "value": prefix + "CTE",
    "en": "Canton and Enderbury Islands",
  },
  {
    "value": prefix + "DHY",
    "en": "Dahomey",
  },
  {
    "value": prefix + "ATN",
    "en": "Dronning Maud Land",
  },
  {
    "value": prefix + "TMP",
    "en": "East Timor",
  },
  {
    "value": prefix + "FXX",
    "en": "Metropolitan France",
  },
  {
    "value": prefix + "GEL",
    "en": "Gilbert and Ellice Islands",
  },
  {
    "value": prefix + "JTN",
    "en": "Johnston Island",
  },
  {
    "value": prefix + "MID",
    "en": "Midway Islands",
  },
  {
    "value": prefix + "NTZ",
    "en": "Neutral Zone",
  },
  {
    "value": prefix + "NHB",
    "en": "New Hebrides",
  },
  {
    "value": prefix + "PCI",
    "en": "Trust Territory of the Pacific Islands",
  },
  {
    "value": prefix + "PCZ",
    "en": "Panama Canal Zone",
  },
  {
    "value": prefix + "SKM",
    "en": "Sikkim",
  },
  {
    "value": prefix + "RHO",
    "en": "Southern Rhodesia",
  },
  {
    "value": prefix + "PUS",
    "en": "US Miscellaneous Pacific Islands",
  },
  {
    "value": prefix + "VDR",
    "en": "Democratic Republic of Vietnam",
  },
  {
    "value": prefix + "WAK",
    "en": "Wake Islands",
  },
  {
    "value": prefix + "FQ0",
    "cs": "Francouzská jižní a antarktická území",
    "en": "French Southern and Antarctic Lands",
  },
  {
    "value": prefix + "YMD",
    "en": "North Yemen",
  },
  {
    "value": prefix + "NPL",
    "cs": "Nepál",
    "en": "Nepal",
  },
  {
    "value": prefix + "SHN",
    "cs": "Svatá Helena, Ascension a Tristan da Cunha",
    "en": "Saint Helena, Ascension and Tristan da Cunha",
  },
  {
    "value": prefix + "BES",
    "cs": "Bonaire, Svatý Eustach a Saba",
    "en": "Bonaire, Saint Eustatius and Saba",
  },
  {
    "value": prefix + "CUW",
    "cs": "Curaçao",
    "en": "Curaçao",
  },
  {
    "value": prefix + "SXM",
    "cs": "Sint Maarten",
    "en": "Sint Maarten",
  },
  {
    "value": prefix + "HUN",
    "cs": "Maďarsko",
    "en": "Hungary",
  },
  {
    "value": prefix + "SSD",
    "cs": "Jižní Súdán",
    "en": "South Sudan",
  },
  {
    "value": prefix + "NCL",
    "cs": "Nová Kaledonie",
    "en": "New Caledonia",
  },
  {
    "value": prefix + "MYT",
    "cs": "Mayotte",
    "en": "Mayotte",
  },
  {
    "value": prefix + "MMR",
    "cs": "Myanmar/Barma",
    "en": "Myanmar/Burma",
  },
  {
    "value": prefix + "SOM",
    "cs": "Somálsko",
    "en": "Somalia",
  },
  {
    "value": prefix + "EUR",
    "cs": "Evropská unie",
    "en": "European Union",
  },
  {
    "value": prefix + "LBY",
    "cs": "Libye",
    "en": "Libya",
  },
  {
    "value": prefix + "WLF",
    "cs": "Wallis a Futuna",
    "en": "Wallis and Futuna",
  },
  {
    "value": prefix + "CZE",
    "cs": "Česko",
    "en": "Czechia",
  },
  {
    "value": prefix + "SWZ",
    "cs": "Svazijsko",
    "en": "Eswatini",
  },
  {
    "value": prefix + "MKD",
    "cs": "Severní Makedonie",
    "en": "North Macedonia",
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
