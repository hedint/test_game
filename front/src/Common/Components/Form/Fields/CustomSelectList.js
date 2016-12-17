import React from 'react';
import SelectList from 'react-widgets/lib/SelectList';
var classNames = require('classnames');
import FieldErrors from './FieldErrors.js';
const CustomSelectList = ({name, onChange, onBlur, value, label, listData, errors = {error_list : [], validate : false}}) => {
    let data = listData[name];
    let errors_count = errors.error_list.length;
    let classnames = classNames({
        'form-field' : true,
        'form-field__error': errors_count,
        'form-field__success' : (!errors_count && errors.validate)
    });
    return (
        <div  className={classnames}>
            <label className="form-field__label">{label}</label>
            <SelectList
                data={data.data}
                multiple={false}
                onChange={(value) => {onChange(name, value[data.valueField]);}}
                onBlur= {() => {onBlur(name, false);}}
                value={value}
                valueField={data.valueField}
                textField={data.textField}/>
            <FieldErrors errors={errors} />
        </div>
    );
};
export default CustomSelectList;