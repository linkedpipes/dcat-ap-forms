
/**
 * @param {string} url
 */
export function getRemoteJsonLd(url) {
  return fetchByGetAsJson(url, "application/ld+json");
}

/**
 * @param {string} url
 * @param {string} accept Accept header.
 */
export function fetchByGetAsJson(url, accept) {
  return fetchAsJson("GET", url, accept);
}

/**
 * @param {"GET" | "POST"} method
 * @param {string} url
 * @param {string} accept
 * @param {string | undefined} content
 * @returns
 */
function fetchAsJson(method, url, accept, content = undefined) {
  if (accept === undefined) {
    accept = "application/json";
  }
  /** @type * */
  const request = {
    "method": method,
    "headers": {
      "accept": accept,
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
    console.error("Can't POST data", error);
  }
}

