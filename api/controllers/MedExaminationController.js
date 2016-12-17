/*global Child*/
/**
 * MedExamination
 *
 * @description :: Server-side logic for managing children
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";
module.exports = {

    _self_name : 'MedExamination',
    _getModel : function () {
        return MedExamination;
    },

    _getFields : function () {
        let model = this._getModel();
        let fields_names = _.keys(model.attributes);
        return fields_names;
    },
    _getDefaultFields : function () {
        let model = this._getModel();
        let default_fields = {};
        _.forOwn(model.attributes, function (value, key) {
            default_fields[key] = undefined;
        });
        return default_fields;
    },
    _filterNullFields : function (fields) {
        return _(fields).omit(_.isUndefined).omit(_.isNull).value();
    },
    _populateFields : function (default_fields, real_fields_values) {
        var result_fields = {};
        _.forOwn(default_fields, function (value, key) {
            if (_.has(real_fields_values, key)) {
                if (real_fields_values[key]) {
                    result_fields[key] = real_fields_values[key];
                }
            }
        });
        return this._filterNullFields(result_fields);
    },

    /**
     * `MedExamination.load()`
     */

    load: function (req, res) {
        "use strict";
        let method_name = 'load';
        let that = this;
        let id = req.params.id;
        if (!id) {
            return res.apiResponseError({
                error: 'Params id is require',
                method_name : method_name,
                controller_name : that._self_name,

            });
        }
        this._getModel().find({
            id : req.params.id
        }).exec(function (err, item) {

            if (err) {
                return res.apiResponseError({
                    error: err,
                    method_name : method_name,
                    controller_name : that._self_name,

                });
            }
            return res.apiResponseSuccess({
                data: item,
                method_name : method_name,
                controller_name : that._self_name
            });
        });
    },


    /**
     * `MedExamination.loadAll()`
     */
    loadAll: function (req, res) {
        "use strict";
        let method_name = 'loadAll';
        let that = this;
        this._getModel().find().exec(function (err, items) {
            if (err) {
                return res.apiResponseError({
                    error: err,
                    method_name : method_name,
                    controller_name : that._self_name,

                });
            }
            return res.apiResponseSuccess({
                data: items,
                method_name : method_name,
                controller_name : that._self_name
            });
        })
    },


    /**
     * `MedExamination.create()`
     */
    create: function (req, res) {
        "use strict";
        let method_name = 'create';
        let that = this;
        let params = req.allParams();

        let fields = this._populateFields(this._getDefaultFields(), params);

        console.log(fields);

        this._getModel().create(fields).exec(function(err, item) {
            if (err) {
                return res.apiResponseError({
                    error: err,
                    method_name : method_name,
                    controller_name : that._self_name,

                });
            }
            return res.apiResponseSuccess({
                data: item,
                method_name : method_name,
                controller_name : that._self_name
            });
        });
    },


    /**
     * `MedExamination.update()`
     */
    update: function (req, res) {
        "use strict";
        let method_name = 'update';
        let that = this;
        let params = req.allParams();
        let id = req.param('id');
        let search_criteria = {
            id : id
        };
        let fields = this._populateFields(this._getDefaultFields(), params);

        if (!id) {
            return res.apiResponseError({
                error: 'Params id is require',
                method_name : method_name,
                controller_name : that._self_name,

            });
        }

        this._getModel().update(search_criteria, fields).exec(function(err, item) {
            if (err) {
                return res.apiResponseError({
                    error: err,
                    method_name : method_name,
                    controller_name : that._self_name,

                });
            }
            return res.apiResponseSuccess({
                data: item,
                method_name : method_name,
                controller_name : that._self_name
            });
        });
    },


    /**
     * `MedExamination.delete()`
     */
    delete: function (req, res) {
        "use strict";
        let method_name = 'update';
        let that = this;
        let params = req.allParams();
        let id = req.param('id');
        let search_criteria = {
            id : id
        };
        if (!id) {
            return res.apiResponseError({
                error: 'Params id is require',
                method_name : method_name,
                controller_name : that._self_name,

            });
        }
        this._getModel().destroy(search_criteria).exec(function(err) {
            if (err) {
                return res.apiResponseError({
                    error: err,
                    method_name : method_name,
                    controller_name : that._self_name,

                });
            }
            return res.apiResponseSuccess({
                data: undefined,
                method_name : method_name,
                controller_name : that._self_name
            });
        });
    }
};

