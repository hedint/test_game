export function formatChildTestFormState (scheme) {
    let state = {
        values : {},
        errors : {}
    };
    for (let key in scheme.data) {
        if (scheme.data.hasOwnProperty(key)) {
            state.values[key] = scheme.data[key].value;
            if (key == 'test_date') {
                state.values[key] = new Date(scheme.data[key].value);
            }
        }
    }
    return state;
}

export function formatChildTestFormResponse (values) {
    let data = {};
    for (let key in values) {
        if (values.hasOwnProperty(key)) {
            data[key] = values[key];
            if (key == 'test_date') {
                data[key] = values[key].getTime();
            }
        }
    }
    return data;
}
