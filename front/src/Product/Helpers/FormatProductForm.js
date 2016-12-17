export function formatProductFormState (scheme) {
    let state = {
        values : {},
        errors : {}
    };
    for (let key in scheme.data) {
        if (scheme.data.hasOwnProperty(key)) {
            state.values[key] = scheme.data[key].value;
        }
    }
    return state;
}

export function formatProductFormResponse (values) {
    let data = {};
    for (let key in values) {
        if (values.hasOwnProperty(key)) {
            data[key] = values[key];
        }
    }
    return data;
}
