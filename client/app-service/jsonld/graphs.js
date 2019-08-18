/**
 * @returns A data of a first graph.
 */
export function getDefaultGraphData(data) {
  const graphs = data["@graph"];
  return graphs[0]["@graph"];
}