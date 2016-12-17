export function formatMedExaminationFormState (scheme) {
    let state = {
        values : {},
        errors : {}
    };
    for (let key in scheme.data) {
        if (scheme.data.hasOwnProperty(key)) {
            state.values[key] = scheme.data[key].value;
            if (key == 'examination_date') {
                state.values[key] = new Date(scheme.data[key].value);
            }
        }
    }
    return state;
}

export function formatMedExaminationFormResponse (values) {
    let data = {};
    for (let key in values) {
        if (values.hasOwnProperty(key)) {
            data[key] = values[key];
            if (key == 'examination_date') {
                data[key] = values[key].getTime();
            }
        }
    }
    return data;
}
