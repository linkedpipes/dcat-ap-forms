export const labels = {
    "get": get,
    "data": {
        "app_header": "Registrace datové sady do NKOD",
        "step_dataset": "Datová sada",
        "step_distribution": "Distribuce",
        "step_download": "Stažení",
        "dataset_title": "Název datové sady *",
        "dataset_title_invalid": "Název datové sady je povinný.",
        "dataset_description": "Popis datové sady *",
        "dataset_description_invalid": "Popis datové sady je povinný.",
        "accrual_periodicity": "Periodicita aktualizace",
        "ruian_type": "Související území - Typ územního prvku RÚIAN",
        "ruian": "Související území - Kód územního prvku RÚIAN",
        "ruian_invalid": "Kód územního prvku RÚIAN je povinný.",
        "keywords": "Klíčová slova *",
        "keywords_error": "Klíčová slova jsou povinná.",
        "contact_point_name": "Jméno kurátora dat",
        "contact_point_email": "Email kurátora dat",
        "contact_point_email_invalid": "Nevalidní email.",
        "temporal_start": "Dotčené časové období od",
        "temporal_end": "Dotčené časové období do",
        "documentation": "Odkaz na dokumentaci datové sady",
        "themes": "EuroVoc témata",
        "distribution_url": "Odkaz na soubor ke stažení",
        "distribution_url_missing": "URL je povinné.",
        "distribution_url_invalid": "Nevalidní HTTP(S) URL.",
        "distribution_media_type": "Media type souboru ke stažení",
        "distribution_format": "Formát souboru ke stažení",
        "format_missing": "Formát je povinný.",
        "distribution_title": "Název distribuce",
        "distribution_schema_link": "Odkaz na schéma distribuce",
        "distribution_schema_missing": "URL je povinné.",
        "distribution_schema_invalid": "Nevalidní HTTP(S) URL.",
        "license_author_type": "Autorské dílo",
        "license_author_name": "Jméno autora díla",
        "license_author_custom": "Odkaz na vlastní licenci",
        "license_author_custom_invalid": "Nevalidní HTTP(S) URL.",
        "license_db_type": "Databáze jako autorské dílo",
        "license_db_name": "Jméno autora databáze",
        "license_db_custom": "Odkaz na vlastní licenci",
        "license_db_custom_invalid": "Nevalidní HTTP(S) URL.",
        "license_specialdb_type": "Zvláštní právo pořizovatele databáze",
        "license_specialdb_custom": "Odkaz na vlastní licenci",
        "license_specialdb_custom_invalid": "Nevalidní HTTP(S) URL.",
        "license_personal_type":  "Osobní údaje",
        "no_distribution": "Všechny distribuce byly smazány.",
        "delete_distribution": "Smaž distribuci",
        "headline_distribution_license": "Podmínky užití distribuce",
        "headline_distribution_access": "Přístupové údaje",
        "distribution_download": "Soubor ke stažení",
        "media_type": "Media typ",
        "media_type_missing" : "Media typ je povinný.",
        "distribution_schema": "Schéma distribuce",
        "terms_of_use": "Podmínky užití",
        "nav_download": "Stažení",
        "nav_dataset": "Datová sada",
        "nav_distributions": "Distribuce",
        "ruian_autocomplete_no_data": "Začněte psát název územního prvku",
        "format_autocomplete_no_data": "Začněte psát formát souboru, např. \"CSV\"",
        "media_type_autocomplete_no_data": "Začněte psát media type, např. \"text/csv\"",
        "themes_autocomplete_no_data": "Začněte psát název EuroVoc tématu",
        "author_name_missing" : "Jméno autora je povinné.",
        "custom_license_missing": "Odkaz na vlastní licenci je povinný.",
        "dataset_theme": "Téma datové sady",
        "dataset_theme_autocomplete_no_data": "Začněte psát název tématu datové sady.",
        "dataset_theme_invalid": "Téma datové sady je povinné."
    }
};

function get(name) {
    if (process.env.NODE_ENV === "development") {
        if (labels.data[name] === undefined) {
            console.warn("Missing labels:", name);
        }
    }
    return labels.data[name];
}

function install(Vue, options) {

    // Add property getter to every component.
    Object.defineProperty(Vue.prototype, "$labels", {
        "get": function () {
            return this.$root._labels;
        }
    });

    // Add reactive (observed) value to root.
    Vue.mixin({
        "beforeCreate": function () {
            if (this.$root === this) {
                Vue.util.defineReactive(this, "_labels", labels);
            }
        }
    });

}

const Plugins = {
    "install": install
};

export default Plugins;