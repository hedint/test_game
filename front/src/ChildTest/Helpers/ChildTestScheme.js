import DataScheme from '../../Common/Helpers/DataScheme';
class ChildTestScheme extends DataScheme {
    createDefaultScheme () {
        return {
            child_id : {
                name : 'child_id',
                value : 0,
                label : 'Имя ребенка',
                element_type : 'CustomSelectList',
                width: 200,
                validators: [
                ]
            },
            test_date : {
                name : 'test_date',
                value : new Date(),
                label : 'Дата взятия',
                element_type : 'DatePicker',
                width: 200,
                validators: [
                    {
                        name : 'required'
                    }
                ]
            },
            fa_val : {
                name : 'fa_val',
                value : '',
                label : 'Содержание ФА (мг/дл)',
                element_type : 'NumberField',
                width: 200,
                format_params : {
                    units : 'мг/дл'
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
            }
        };
    }
}

export default ChildTestScheme;
