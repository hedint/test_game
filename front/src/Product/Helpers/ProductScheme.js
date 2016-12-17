import DataScheme from '../../Common/Helpers/DataScheme';
class ProductScheme extends DataScheme {
    createDefaultScheme () {
        return {
            name : {
                name : 'name',
                value : '',
                label : 'Название продукта/блюда',
                element_type : 'TextField',
                width: 200,
                validators: [
                    {
                        name : 'required'
                    },
                    {
                        name : 'len',
                        params : {
                            min : 2
                        }
                    }
                ]
            },
            protein : {
                name : 'protein',
                value : '',
                label : 'Белки (г)',
                element_type : 'NumberField',
                width: 100,
                format_params : {
                    units : 'г'
                },
                field_params : {
                    step : 0.01
                },
                validators: [
                    {
                        name : 'required'
                    },
                    {
                        name : 'number'
                    }
                ]
            },
            fa : {
                name : 'fa',
                value : 50,
                label : 'Фенилаланин (мг)',
                element_type : 'NumberField',
                width: 150,
                format_params : {
                    units : 'мг'
                },
                field_params : {
                    step : 1
                },
                validators: [
                    {
                        name : 'required'
                    },
                    {
                        name : 'number'
                    }
                ]

            },
            tyrosine : {
                name : 'tyrosine',
                value : '',
                label : 'Тирозин (мг)',
                element_type : 'NumberField',
                width: 100,
                format_params : {
                    units : 'мг'
                },
                field_params : {
                    step : 1
                },
                validators: [
                    {
                        name : 'required'
                    },
                    {
                        name : 'number'
                    }
                ]
            },
            carb : {
                name : 'carbohydrate',
                value : '',
                label : 'Углеводы (г)',
                element_type : 'NumberField',
                width: 100,
                format_params : {
                    units : 'г'
                },
                field_params : {
                    step : 0.01
                },
                validators: [
                    {
                        name : 'required'
                    },
                    {
                        name : 'number'
                    }
                ]
            },
            fat : {
                name : 'fat',
                value : '',
                label : 'Жиры (г)',
                element_type : 'NumberField',
                width: 100,
                format_params : {
                    units : 'г'
                },
                field_params : {
                    step : 0.01
                },
                validators: [
                    {
                        name : 'required'
                    },
                    {
                        name : 'number'
                    }
                ]
            },
            calories : {
                name : 'calories',
                value : '',
                label : 'Калории (ккал)',
                element_type : 'NumberField',
                width: 150,
                format_params : {
                    units : 'ккал'
                },
                field_params : {
                    step : 0.1
                },
                validators: [
                    {
                        name : 'required'
                    },
                    {
                        name : 'number'
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

export default ProductScheme;