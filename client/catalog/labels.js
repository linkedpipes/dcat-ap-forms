export default {
    "nav_catalog": "Katalog",
    "step_catalog": "Katalog",
    "catalog_summary_error": "Formulář pro registraci lokálního katalogu ještě není správně vyplněn.",
    "catalog_summary_download": "Registrační záznam katalogu stáhněte a zašlete jako přílohu do datové schránky ",

    "catalog_title": "Název lokálního katalogu otevřených dat",
    "hint_catalog_title": "Název registrovaného lokálního katalogu otevřených dat. Pokud má instituce jen jeden, může to být třeba \"Katalog otevřených dat XXX\"",
    "help_catalog_title": "<h3>Název lokálního katalogu otevřených dat</h3><p>Typicky to bývá <code>Otevřená data XY</code>. Pokud by jedna instituce měla více lokálních katalogů, pak by je název měl rozlišovat.</p>",
    
    "catalog_contact_point_name": "Jméno správce katalogu",
    "hint_catalog_contact_point_name": "Sem budeme adresovat případné problémy s katalogem.",
    "help_catalog_contact_point_name": "<h3>Jméno správce katalogu</h3><p>Jméno správce lokálního katalogu otevřených dat, se kterým lze komunikovat o případných problémech s katalogem. To může být třeba problém s formátem API, přístupností rozhraní, apod.</p>",
    "catalog_contact_point_name_missing": "Jméno správce katalogu je povinné.",

    "catalog_contact_point_email": "Email správce katalogu",
    "hint_catalog_contact_point_email": "Sem budeme psát s případnými problémy s vaším katalogem.",
    "help_catalog_contact_point_email": "<h3>Email správce katalogu</h3><p>Email správce lokálního katalogu otevřených dat, se kterým lze komunikovat o případných problémech s katalogem. To může být třeba problém s formátem API, přístupností rozhraní, apod.</p>",
    "catalog_contact_point_email_missing": "Email správce katalogu je povinný",
    "catalog_contact_point_email_invalid": "Neplatný email správce katalogu",

    "catalog_type": "Typ API lokálního katalogu",
    "help_catalog_type": "<h3>Typ API lokálního katalogu</h3><p>V současnosti jsou podporovány 2 typy LKOD API. DCAT-AP API je preferovanou volbou zlaoženou na <a href=\"https://joinup.ec.europa.eu/release/dcat-ap-v11\" target=\"_blank\">evropském standardu DCAT-AP v1.1</a>. <a href=\"https://opendata.gov.cz/nastroj:ckan-api\" target=\"_blank\">CKAN API</a> je podporováno v režimu zpětné kompatibility, ale neumožňuje využít všech možností harvestace do NKOD.</p>",

    "catalog_url": "URL LKOD API",
    "hint_catalog_url": "HTTPS URL funkce package_list pro CKAN API, URL instance dcat:Catalog pro DCAT-AP API.",
    "help_catalog_url": "<h3>URL LKOD API</h3><p>Pro DCAT-AP API je toto URL vašeho katalogu, tj. instance třídy <code>dcat:Catalog</code>, například <code>https://data.gov.cz/lkod/mdcr/katalog</code>. Pro CKAN API je to URL funkce <code>package_list</code>, například <code>https://data.cssz.cz/api/3/action/package_list</code>.</p>",
    "catalog_url_missing": "HTTPS URL LKOD API je povinné",
    "catalog_url_invalid": "Nevalidní HTTPS URL LKOD API",
    
    "homepage": "Domácí stránka katalogu",
    "hint_homepage": "URL domácí stránky vašeho lokálního katalogu otevřených dat.",
    "help_homepage": "<h3>Domácí stránka katalogu</h3><p>Uveďte URL domácí stránky vašho katalogu, pokud existuje. Váš lokální katalog může obsahovat větší množství informací a souvislostí, než se dostane do Národního katalogu otevřených dat. Proto můžete chtít, aby se uživatelé po nalezení vaší datové sady v NKOD mohli podívat i do vašeho katalogu.</p>",
    "homepage_invalid": "Domácí stránka katalogu musí být validní HTTPS URL.",

    "catalog_delete_page_title": "Odstranění lokálního katalogu z NKOD",
    "missing-catalog": "Chybí odkaz na dataovou sadu.",
    "catalog_delete_summary_download": "Stažený soubor zašlete jako přílohu do datové schránky "
};