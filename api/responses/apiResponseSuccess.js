var apiResponseSuccess = function apiResponseSuccess (data) {
    "use strict";
    let response_data = data.data,
        controller_name = data.controller_name,
        method_name = data.method_name;
    // Get access to `req`, `res`, & `sails`
    var req = this.req;
    var res = this.res;
    var sails = req._sails;

    res.status(200);

    sails.log.info(`res.apiResponseSuccess(), controller: ${controller_name} method:${method_name}`);
    return res.json({data: response_data, success : true});
}
module.exports = apiResponseSuccess;