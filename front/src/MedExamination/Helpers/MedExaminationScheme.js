import DataScheme from '../../Common/Helpers/DataScheme';
class MedExaminationScheme extends DataScheme {
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
            examination_date : {
                name : 'examination_date',
                value : new Date(),
                label : 'Дата осмотра',
                element_type : 'DatePicker',
                width: 100,
                validators: [
                    {
                        name : 'required'
                    }
                ]
            },
            weight : {
                name : 'weight',
                value : '',
                label : 'Вес (кг)',
                element_type : 'NumberField',
                width: 100,
                format_params : {
                    units : 'кг'
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
            height : {
                name : 'height',
                value : '',
                label : 'Рост (см)',
                element_type : 'NumberField',
                width: 100,
                format_params : {
                    units : 'см'
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
            fa_tolerance : {
                name : 'fa_tolerance',
                value : 50,
                label : 'Переносимость ФА(мг/кг)',
                element_type : 'NumberField',
                width: 200,
                format_params : {
                    units : 'мг/кг'
                },
                field_params : {
                    step : 1
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

export default MedExaminationScheme;
