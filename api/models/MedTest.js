// MedTest.js
var MedTest = {
    attributes: {
        id : {
            type : 'integer',
            autoIncrement: true,
            unique : true,
            primaryKey: true
        },
        child_id : {
            type : 'integer',
            index : true,
        },
        test_date : {
            type : 'integer',
            defaultsTo : 0
        },
        fa_val : {
            type : 'float',
            defaultsTo : 0
        },
    },
    autoPK: true
};
module.exports = MedTest;