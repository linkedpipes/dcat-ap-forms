import {getId, getTypes} from "./properties";

export function getByType(graphData, type) {
  return filterEntities(graphData, (entity) =>
    getTypes(entity).indexOf(type) !== -1
  );
}

function filterEntities(graphData, filter) {
  const output = [];
  for (let index in graphData) {
    if (!graphData.hasOwnProperty(index)) {
      continue;
    }
    const entity = graphData[index];
    if (filter(entity)) {
      output.push(entity);
    }
  }
  return output;
}

export function getByIri(graphData, iri) {
  for (let index in graphData) {
    if (!graphData.hasOwnProperty(index)) {
      continue;
    }
    const entity = graphData[index];
    if (getId(entity) === iri) {
      return entity;
    }
  }
  return undefined;
}
