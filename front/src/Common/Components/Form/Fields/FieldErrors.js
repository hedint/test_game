import React from 'react';
const FieldErrors = ({errors = {errors : [], validate : false}, only_first_error = true}) => {
    let {error_list} = errors;
    if (!error_list.length) {
        return null;
    }
    if (only_first_error) {
        return (
            <div className="form-field-errors">
                <span className="form-field-errors__text">{error_list[0].message}</span>
            </div>
        );
    } else {
        return (
            <div className="form-field-errors">
                {error_list.forEach((error) => <span className="form-field-errors__text">{error.message}</span>)}
            </div>
        );
    }

};
export default FieldErrors;