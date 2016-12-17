//Child.js
module.exports = {
    attributes: {
        id : {
            type : 'integer',
            autoIncrement: true,
            unique : true,
            primaryKey: true
        },
        first_name : {
            type : 'string',
            defaultsTo : ''
        },
        second_name : {
            type : 'string',
            defaultsTo : ''
        },
        gender : {
            type : 'integer',
            enum: [1, 2],
            defaultsTo: 1
        },
        birth_date : {
            type : 'integer',
            defaultsTo : 0
        }
    }
};