/**
 * Server is offline or missing CORS.
 */
export const ERROR_FETCH = "FETCH";
/**
 * Invalid content type content type.
 */
export const ERROR_PARSING = "PARSING";
/**
 * Error status code.
 */
export const ERROR_RESPONSE = "RESPONSE";

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
  return fetch(url, request).catch(failureToResponse).then(handleJsonRequest);
}

/**
 * Response object consists of:
 * - json
 * - status
 * - error : ERROR_FETCH, ERROR_PARSING, ERROR_RESPONSE
 * - content-type
 */
function handleJsonRequest(response) {
  let promise;
  const contentType = response.headers.get("content-type");
  if (contentType) {
    promise = response.json().catch(() => {
      return Promise.reject({
        "error": ERROR_PARSING,
        "content-type": contentType,
      });
    });
  } else {
    promise = Promise.resolve({});
  }
  return promise.then((data) => {
    if (response.ok) {
      return {
        "status": response.status,
        "json": data,
      };
    } else {
      return Promise.reject({
        "error": ERROR_RESPONSE,
        "status": response.status,
        "json": data,
      });
    }
  });
}

function failureToResponse(error) {
  console.error("Can't execute fetch: ", error);
  return Promise.reject({
    "error": ERROR_FETCH,
  });
}
