import React from 'react';
import Field from '../../Common/Components/Form/Field';

const ChildList = ({name, onChange, value, label, listData,...props}) => {
    let element_type = 'CustomSelectList';

    if (!value) {
        return null;
    }
    return (
        <Field
            {...props}
            name={name}
            onChange={onChange}
            value={value}
            label={label}
            element_type={element_type}
            />
    )
};