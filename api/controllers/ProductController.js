/*global Child*/
/**
 * MedTest
 *
 * @description :: Server-side logic for managing children
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
"use strict";


var DefaultController = require('./ControllerDefault');
var ProductController = function () {
    this.self_name = 'Product';
    this.model = Child;

};
ProductController.prototype = Object.create(DefaultController.prototype);
ProductController.fn = ProductController.prototype;



var getController = function () {
    if (!getController.instance) {
        getController.instance = new ProductController();
    }
    return getController.instance;
}
getController.instance = null;



module.exports = {

    /**
     * `MedTest.load()`
     */
    load: function (req, res) {
        "use strict";
        let controller = getController();
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
        controller.getModel().find({
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
     * `MedTest.loadAll()`
     */
    loadAll: function (req, res) {
        "use strict";
        let controller = getController();
        let method_name = 'loadAll';
        let that = this;
        controller.find().exec(function (err, items) {
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
     * `MedTest.create()`
     */
    create: function (req, res) {
        "use strict";
        let controller = getController();
        let method_name = 'create';
        let that = this;
        let params = req.allParams();

        let fields = controller.populateFields(controller.getDefaultFields(), params);
        controller.getModel().create(fields).exec(function(err, item) {
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
     * `MedTest.update()`
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
     * `MedTest.delete()`
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

