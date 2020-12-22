export function getLocalJson(url, accept) {
  return fetchJson("GET", "." + url, accept);
}

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
