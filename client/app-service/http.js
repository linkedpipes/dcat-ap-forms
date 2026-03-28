
/**
 * Executes HTTP GET to given URL with accept header requesting JSON-LD>
 *
 * Use this method to fetch from a remote URL.
 */
export function getRemoteJsonLd(url) {
  return getRemoteJson(url, "application/ld+json");
}

/**
 * Executes HTTP GET to given URL.
 * The result is parsed as a JSON object.
 *
 * Use this method to fetch from a remote URL.
 */
export function getRemoteJson(url, accept) {
  return fetchJson("GET", url, accept);
}

function fetchJson(method, url, accept, content) {
  if (accept === undefined) {
    accept = "application/json";
  }
  const request = {
    "method": method,
    "headers": {
      "Accept": accept,
    },
  };
  if (content !== undefined) {
    request["body"] = JSON.stringify(content);
    request["headers"]["Content-Type"] = "application/json";
  }
  return fetch(url, request).then(handleJsonRequest);
}

function handleJsonRequest(response) {
  const contentType = response.headers.get("content-type");
  if (contentType === undefined || contentType === null) {
    return Promise.reject("Missing content-type.");
  }
  return response.json()
    .catch(() => {
      return Promise.reject(
        "Can't parse response as JSON, content-type: " + contentType);
    })
    .then((data) => {
      return {
        "status": response.status,
        "json": data,
      };
    });
}

/**
 * Executes HTTP GET to given URL.
 * The result is parsed as a JSON object.
 *
 * Use this method to fetch from a local URL.
 */
export function getLocalJson(url, accept) {
  return fetchJson("GET", url, accept);
}

export function postForm(url, values) {
  const form = document.createElement("form");
  document.body.appendChild(form);
  form.method = "post";
  form.action = url;

  for (const [name, value] of Object.entries(values)) {
    if (value === undefined) {
      continue;
    }
    const formDataInput = document.createElement("input");
    formDataInput.type = "hidden";
    formDataInput.name = name;
    formDataInput.value = value;
    form.appendChild(formDataInput);
  }

  try {
    form.submit();
  } catch (error) {
    // TODO Show error notification.
    console.error("Can't POST data", error);
  }
}

