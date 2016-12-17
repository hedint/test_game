
const dataViewFormatter = (format_params) => {
    return function (val) {
        let result_val = val;
        const SEP = ' ';
        if (format_params && format_params.hasOwnProperty('units')) {
            result_val += SEP + format_params.units;
        }
        return result_val;
    }
};

export default dataViewFormatter;