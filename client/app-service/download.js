export function downloadAsJsonLd(fileName, jsonld) {
  download(fileName, JSON.stringify(jsonld, null, 2), "application/ld+json");
}

export function download(filename, data, mimeType) {
  const blob = new Blob([data], {"type": mimeType});
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const element = document.createElement("a");
    const href = window.URL.createObjectURL(blob);
    const url = [mimeType, element.download, element.href].join(":");

    element.setAttribute("href", href);
    element.setAttribute("download", filename);
    element.dataset.downloadurl = url;

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    window.URL.revokeObjectURL(href);
  }
}