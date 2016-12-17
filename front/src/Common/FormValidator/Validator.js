import {RESULT_VALID, RESULT_INVALID} from './const.js';
import * as Validators from './ValidateFuncs.js';
import Text from './text.js';

class Validator {

    constructor (locale = 'ru') {
        this.validators = {
            'required' : Validators.requiredValidator,
            'len' : Validators.lenValidator,
            'number' : Validators.numberValidator
        };
        this.locale = locale;
        this.last_validate_result = false;
        this.text = new Text(this.locale);
    }
    validateAll (scheme, values) {
        let validate_result = this.getInitialValidateResult();
        scheme.data_list.forEach((field_name) => {
            let {validators} = scheme.data[field_name];
            if (validators) {
                validate_result[field_name].error_list = this.validate(validators, field_name, values[field_name]);
            }
        });
        this.last_validate_result = validate_result;
        return validate_result;
    }

    getInitialValidateResult (data_list) {
        let response = {};
        data_list.forEach((item) => {
            response[item] = {};
            response[item].error_list = [];
        });
        return response;
    }
    validate (validators, field_name, field_value) {
        let error_list = [];
        if (!validators) {
            return error_list;
        }
        validators.forEach((validator) => {
            let validate_result = this.validateSingle(validator.name, field_name,  field_value, validator.params);
            if (validate_result.error == RESULT_INVALID) {
                validate_result.message = this.text.getMessage(validator.name, validator.params);
                error_list.push(validate_result);
            }
        });
        return error_list;
    }

    validateSingle (validator_name, field_name, field_value, params = {}) {
        let validator_func = this.getValidatorByName(validator_name);
        return validator_func(validator_name, field_name, field_value, params);
    }

    getValidatorByName (validator_name) {
        if (validator_name in this.validators) {
            return this.validators[validator_name];
        } else {
            throw new Error('Unknown validator name')
        }
    }

}
export default Validator;