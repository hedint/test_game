import React from 'react';

import {TextField, NumberField, DatePicker, HiddenField, CustomSelectList} from './Fields/index';



const Field = ({name, onChange, onBlur, value, label, element_type, errors, listData,...props}) => {
    switch (element_type) {
        case 'TextField' :
            return (<TextField {...props} onChange={onChange} onBlur={onBlur} errors={errors}  name={name} value={value} label={label}/>);
        case 'NumberField' :
            return (<NumberField {...props} onChange={onChange} onBlur={onBlur} errors={errors}  name={name} value={value} label={label}/>);
        case 'DatePicker' :
            return (<DatePicker {...props} onChange={onChange} onBlur={onBlur} errors={errors}  name={name} value={value} label={label}/>);
        case 'HiddenField' :
            return (<HiddenField {...props}  name={name} value={value}/>);
        case 'CustomSelectList' :
            return (<CustomSelectList {...props} onChange={onChange} onBlur={onBlur} errors={errors} listData={listData} name={name} value={value} label={label}/>);
        default:
            throw new Error('Undefined Field type, check your scheme');

    }
};
export default Field;