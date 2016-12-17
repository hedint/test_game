// MedExaminataion.js
var MedExaminataion = {
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
        examination_date : {
            type : 'integer',
            defaultsTo : 0
        },
        weight : {
            type : 'float',
            defaultsTo : 0
        },
        height : {
            type : 'integer',
            defaultsTo : 0
        },
        fa_tolerance : {
            type : 'integer',
            defaultsTo : 0
        }
    },
    autoPK: true
};
module.exports = MedExaminataion;