import {importCatalogFromUrlWithProxy} from "../import-catalog-from-url";
import {downloadAsJsonLd} from "../../app-service/download";
import {exportCatalogToJsonLdForDelete} from "./export-catalog-delete";

export async function onCatalogDeleteMounted(component) {
  document.title = component.$t("catalog_delete_page_title");
  await loadCatalog(component);
}

async function loadCatalog(component) {
  const url = component.$route.query.catalog;
  if (url === undefined) {
    component.status = "error";
    return;
  }
  try {
    component.catalog = await importCatalogFromUrlWithProxy(url);
    component.status = "ready";
  } catch (error) {
    component.status = "error";
    console.error("Can't import catalog.", error);
  }
}

export function onExport(catalog) {
  const jsonld = exportCatalogToJsonLdForDelete(catalog);
  downloadAsJsonLd("nkod-odstranění-katalogu.jsonld.txt", jsonld);
}
