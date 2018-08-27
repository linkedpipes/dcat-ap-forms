export function provided(value) {
    return value !== null && value !== undefined && value.length > 0;
}

export function email(value) {
    const emailPattern = /^[^ ]+@[^ ]+$/;
    return !provided(value) || emailPattern.test(value);
}

export function url(value) {
    const urlPattern = /(http(s)?:\/\/.)[^ ]+$/;
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
        return [this.$labels.get(message)];
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
            output.push(this.$labels.get(rules[index][1]));
        }
        return output;
    }
}