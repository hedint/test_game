import GenderListData from '../../Common/Helpers/GenderListData';
import React from 'react';
import SelectList from 'react-widgets/lib/SelectList';
const GenderList = ({name, onChange, value, label}) => {
    let genders = GenderListData;
    return (
        <div className="form-field">
            <label className="form-field__label">{label}</label>
            <SelectList
                data={genders}
                multiple={false}
                onChange={(value) => {onChange(name, value.id);}}
                value={value}
                valueField='id'
                textField='name' />
        </div>);
};

export default GenderList;
