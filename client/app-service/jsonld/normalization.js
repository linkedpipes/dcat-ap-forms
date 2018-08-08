/**
 * Output normalized data form:
 * {
 *  "@graph" : [
 *      "@graph" : {GRAPH DATA},
 *      "@id" : {OPTIONAL GRAPH IRI}
 *  ]
 * }
 */
export default function normalize(data) {
    const graphList = [];
    if (data["@graph"]) {
        if (data["@graph"].length === 0) {
            return {"@graph": []};
        } else {
            // There is at least one element.
            if (data["@graph"][0]["@graph"]) {
                // The data are in form we need.
                return data;
            } else {
                // There is only one graph.
                graphList.push(data);
            }
        }
    } else if (Array.isArray(data)) {
        data.forEach((item) => {
            if (item["@graph"] !== undefined) {
                graphList.push(item);
            } else {
                // Default graph.
                if (!Array.isArray(item)) {
                    // It can be a single object.
                    item = [item];
                }
                graphList.push({"@graph": item, "@id": ""});
            }
        });
    } else {
        // There is no graph.
        graphList.push({
            "@graph": data
        });
    }
    return {
        "@graph": graphList
    };
}