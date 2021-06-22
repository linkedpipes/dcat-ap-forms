import {downloadAsJsonLd} from "../../app-service/download";
import {exportCatalogToJsonLd} from "./export-catalog-edit";

export function onCatalogEditMounted(component) {
  document.title = component.$t("catalog_edit_page_title");
}

export function onRouteChange(component, location) {
  if (location.query.krok === undefined) {
    component.step = 1;
  }
  const value = parseInt(location.query.krok);
  if (value !== component.step) {
    component.step = value;
  }
}

export function onStepperInput(component, value) {
  component.step = value;
  if (!component.validation.catalog && value > 1) {
    component.validation.catalog = true;
    component.data.catalog.$validators.force = true;
  }
  if (parseInt(component.$route.query.krok) === value) {
    // Prevent to same location we are now.
    return;
  }
  component.$router.push({
    "query": {
      "krok": value,
    },
  });
}

export function onExport(catalog) {
  const jsonld = exportCatalogToJsonLd(catalog);
  downloadAsJsonLd("nkod-registrace-katalogu.jsonld.txt", jsonld);
}
