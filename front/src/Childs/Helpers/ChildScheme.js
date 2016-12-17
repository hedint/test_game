import DataScheme from '../../Common/Helpers/DataScheme';
class ChildFormScheme extends DataScheme {
    createDefaultScheme () {
        return {
            first_name : {
                name : 'first_name',
                value : '',
                label : 'Имя',
                element_type : 'TextField',
                width : 200,
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
            second_name : {
                name : 'second_name',
                value : '',
                label : 'Фамилия',
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
            birth_date : {
                name : 'birth_date',
                value : new Date(),
                label : 'Дата рождения',
                element_type : 'DatePicker',
                width: 100,
                validators: [
                    {
                        name : 'required'
                    }
                ]
            },
            gender : {
                name : 'gender',
                value : 2,
                label : 'Пол',
                element_type : 'CustomSelectList',
                width: 100,
                validators: []
            },
            id : {
                name : 'id',
                value : '',
                element_type : 'HiddenField'
            }
        };
    }
}

export default ChildFormScheme;
