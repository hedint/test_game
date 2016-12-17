export function formatChildFormState (scheme) {
    let state = {
        values : {},
        errors : {}
    };
    for (let key in scheme.data) {
        if (scheme.data.hasOwnProperty(key)) {
            state.values[key] = scheme.data[key].value;
            state.errors[key] = {
                error_list : [],
                validate : false
            };

            if (key == 'birth_date') {
                state.values[key] = new Date(scheme.data[key].value);
            }
        }
    }
    return state;
}

export function formatChildFormResponse (values) {
    let data = {};
    for (let key in values) {
        if (values.hasOwnProperty(key)) {
            data[key] = values[key];
            if (key == 'birth_date') {
                data[key] = values[key].getTime();
            }
        }
    }
    return data;
}
