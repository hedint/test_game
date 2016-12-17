import React from 'react';
import FieldErrors from './FieldErrors.js';
var classNames = require('classnames');

const TextField = ({label,  name, value, onChange, onBlur, errors = {error_list : [], validate : false}}) => {
    let errors_count = errors.error_list.length;
    let classnames = classNames({
        'form-field' : true,
        'form-field__error': errors_count,
        'form-field__success' : (!errors_count && errors.validate)
    });
    return (<div className={classnames}>
        <label className="form-field__label">{label}</label>
        <div className="rw-widget">
            <input  className="rw-input"
                    onChange={(event) => {onChange(event.target.name, event.target.value)}}
                    onBlur={(event) => {onBlur(event.target.name, event.target.value)}}
                    value={value} name={name} type="text" placeholder={label}/>
        </div>
        <FieldErrors errors={errors} />
    </div>);
};
export default TextField;