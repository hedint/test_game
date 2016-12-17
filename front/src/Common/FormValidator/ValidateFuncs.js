import validatorResponse from './ValidatorResponse';
import * as constants from './const';

export function requiredValidator (validate_rule_name, field_name, field_value, params = false) {
    console.log('requiredValidator');
    console.log(field_name);
    console.log(field_value);
    if (field_value && field_value !== ' ') {
        return validatorResponse(validate_rule_name, field_name, constants.RESULT_VALID, '');
    } else {
        return validatorResponse(validate_rule_name, field_name, constants.RESULT_INVALID, '');
    }
}

export function lenValidator (validate_rule_name, field_name, field_value, params = false) {
    let result = constants.RESULT_VALID;
    let {min, max} = params;
    if (min && field_value && field_value.length < min) {
        result = constants.RESULT_INVALID;
    }
    if (max && field_value && field_value.length > max) {
        result = constants.RESULT_INVALID;
    }
    return validatorResponse(validate_rule_name, field_name, result, '');

}



export function numberValidator (validate_rule_name, field_name, field_value, params = false) {
    if (!isNaN(parseFloat(field_value)) && isFinite(field_value)) {
        return validatorResponse(validate_rule_name, field_name, constants.RESULT_VALID, '');
    }
    return validatorResponse(validate_rule_name, field_name, constants.RESULT_INVALID, '');

}