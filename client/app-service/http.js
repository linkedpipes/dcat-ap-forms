import config from "app-service/config";

export const ERROR_OFFLINE = "OFFLINE";
export const ERROR_PARSING = "PARSING";
export const ERROR_RESPONSE = "RESPONSE";

export function fetchJson(url) {
    return fetch(config.baseUrl + url, {
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        },
    }).catch(failureToResponse).then(json);
}

function json(response) {
    return response.json().catch(() => {
        return Promise.reject({
            "error": ERROR_PARSING
        })
    }).then((data) => {
        if (response.ok) {
            return {
                "status": response.status,
                "json": data
            }
        } else {
            return Promise.reject({
                "error": ERROR_RESPONSE,
                "status": response.status,
                "json": data
            });
        }
    }).catch((error) => {
        console.error("Error in user code: ", error);
        console.log("Response", response);
        throw error;
    })
}

function failureToResponse(error) {
    console.error("Can't execute fetch: ", error);
    return Promise.reject({
        "error": ERROR_OFFLINE
    })
}
