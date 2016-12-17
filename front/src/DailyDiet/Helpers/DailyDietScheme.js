import DataScheme from '../../Common/Helpers/DataScheme';
class ChildTestScheme extends DataScheme {
    createDefaultScheme () {
        return {
            product_id : {
                name : 'product_id',
                value : 0,
                label : 'Блюдо',
                element_type : 'CustomSelectList',
                width: 200,
                validators: [
                    {
                        name : 'required'
                    }
                ]
            },
            weight : {
                name : 'weight',
                value : 0,
                label : 'Содержание ФА (мг/дл)',
                element_type : 'NumberField',
                width: 200,
                format_params : {
                    units : 'г'
                },
                field_params : {
                    step : 0.1
                },
                validators: [
                    {
                        name : 'required'
                    }
                ]
            },
            id : {
                name : 'id',
                value : '',
                element_type : 'HiddenField'
            },
            child_id : {
                name : 'child_id',
                value : 0,
                element_type : 'HiddenField'
            }
        };
    }
}

export default ChildTestScheme;
