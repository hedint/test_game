const validateResponse =  (validate_rule_name, field_name, error = false, message = '') => {
    return {
        validator : validate_rule_name,
        error : error,
        message: message,
        field_name: field_name
    }
};
export default validateResponse;
