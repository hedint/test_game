const createSelectListData = (data, valueField, textField, params = {}) => {
    return {
        data : data,
        valueField : valueField,
        textField : textField,
        params : params
    }
};
export default createSelectListData;