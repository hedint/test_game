import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
var classNames = require('classnames');
import FieldErrors from './FieldErrors.js';
const MyDatePicker = ({name, onChange, onBlur, value, label, errors = {error_list : [], validate : false}}) => {
    let errors_count = errors.error_list.length;
    let classnames = classNames({
        'form-field' : true,
        'form-field__error': errors_count,
        'form-field__success' : (!errors_count && errors.validate)
    });
    return (
        <div  className={classnames}>
            <label className="form-field__label">{label}</label>
            <DateTimePicker
                time={false}
                value={value}
                max={new Date()}
                onChange={(date, dateStr) => {onChange(name, date);}}
                onBlur={(date, dateStr) => {onBlur(name, date);}}
                format={"DD.MM.YYYY"}
                />
            <FieldErrors errors={errors} />
        </div>
    );
};

export default MyDatePicker;