
export const configuration = {
  /**
   * Prefix to any API call to apply on a client side.
   * Must end with "/".
   * @type {string}
   */
  "apiPrefix": window.configuration.apiUrl,
  /**
   * Template, with {}, to apply when dereferencing IRI for import.
   * Empty string to not apply a template.
   * @type {string}
   */
  "dereferenceTemplate": window.configuration.dereferenceTemplate,
  /**
   * Databox address to send registration forms to.
   * @type {string}
   */
  "databox": window.configuration.databox,
};
