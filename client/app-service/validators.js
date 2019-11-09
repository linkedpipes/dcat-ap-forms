export function provided(value) {
  return value !== null && value !== undefined && value.length > 0;
}

export function temporal(value) {
  const temporalPattern = /^(-?)P(?=.)((\d+)Y)?((\d+)M)?((\d+)D)?(T(?=.)((\d+)H)?((\d+)M)?(\d*(\.\d+)?S)?)?$/;
  return !provided(value) || temporalPattern.test(value);
}

export function decimal(value) {
  const decimalPattern = /^[-+]?[0-9]+(\.[0-9]+)?$/;
  return !provided(value) || decimalPattern.test(value);
}

export function email(value) {
  const emailPattern = /^[^ ]+@[^ ]+$/;
  return !provided(value) || emailPattern.test(value);
}

export function url(value) {
  const urlPattern = /^https:\/\/.[^ ]+$/;
  return !provided(value) || urlPattern.test(value);
}

export function apply(selector, property, rule, message) {
  return function () {
    const value = selector(this)[property];
    const validators = selector(this)["$validators"];
    if (!shouldValidate(value, validators, property)) {
      return [];
    }
    const isValid = rule(value);
    if (isValid) {
      return [];
    }
    return [this.$t(message)];
  }
}

export function applyEach(selector, property, rule, message) {
  return function () {
    const value = selector(this)[property];
    const validators = selector(this)["$validators"];
    if (!shouldValidate(value, validators, property)) {
      return [];
    }
    var bundle = {"isValid": true};
    value.forEach(function (item) { this.isValid = this.isValid & rule(item) }, bundle);
    if (bundle.isValid) {
      return [];
    }
    return [this.$t(message)];
  }
}

export function shouldValidate(value, validators, property) {
  if (validators.force) {
    return true;
  }
  if (validators[property]) {
    return true;
  }
  if (provided(value)) {
    validators[property] = true;
    return true;
  }
  return false;
}

export function applyArray(selector, property, rules) {
  return function () {
    const value = selector(this)[property];
    const validators = selector(this)["$validators"];
    if (!shouldValidate(value, validators, property)) {
      return [];
    }
    const output = [];
    for (let index in rules) {
      const isValid = rules[index][0](value);
      if (isValid) {
        continue;
      }
      output.push(this.$t(rules[index][1]));
    }
    return output;
  }
}
