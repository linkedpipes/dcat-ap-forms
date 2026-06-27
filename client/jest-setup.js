Object.defineProperty(window, "navigator", {
  value: { userAgent: "node.js" },
  writable: true,
});

window.configuration = {
  "apiUrl": "http://localhost/api",
  "dereferenceTemplate": "",
  "databox": false,
};
