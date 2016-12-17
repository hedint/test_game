var ControllerDefault = function () {
    this.self_name = '';
    this.model = null;

}
ControllerDefault.fn = ControllerDefault.prototype;
ControllerDefault.fn.setModel = function (model) {
    this.model = model;
}

ControllerDefault.fn.getModel = function (model) {
    this.model = model;
}


ControllerDefault.fn.getFields = function () {
    return _.keys(this.model.attributes);
}
ControllerDefault.fn.getDefaultFields = function () {
    let default_fields = {};
    _.forOwn(this.model.attributes, function (value, key) {
        default_fields[key] = undefined;
    });
    return default_fields;
}
ControllerDefault.fn.filterNullFields = function (fields) {
    return _(fields).omit(_.isUndefined).omit(_.isNull).value();
}
ControllerDefault.fn.populateFields  = function (default_fields, real_fields_values) {
    var result_fields = {};
    _.forOwn(default_fields, function (value, key) {
        if (_.has(real_fields_values, key)) {
            if (real_fields_values[key]) {
                result_fields[key] = real_fields_values[key];
            }
        }
    });
    return this.filterNullFields(result_fields);
}

ControllerDefault.fn.loadItem = function (id) {
    let search_criteria = {
        id : id
    };
    return this.getModel().find(search_criteria);
}
ControllerDefault.fn.loadItems = function () {
    return this.getModel().find();
}
ControllerDefault.fn.createItem = function (item) {
    let item_fields = this.populateFields(this.getDefaultFields(), item);
    return this.getModel().create(item_fields);

}

ControllerDefault.fn.updateItem = function (item, id) {
    let search_criteria = {
        id : id
    };
    let fields = this.populateFields(this.getDefaultFields(), item);
    return this.getModel().update(search_criteria, fields);
}
ControllerDefault.fn.deleteItem = function (id) {

};
module.exports = ControllerDefault;