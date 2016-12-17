var apiResponseError = function apiResponseError (data) {
    "use strict";
    let error = data.error,
        controller_name = data.controller_name,
        method_name = data.method_name;
    // Get access to `req`, `res`, & `sails`
    var req = this.req;
    var res = this.res;
    var sails = req._sails;

    res.status(500);

    sails.log.warn(`res.apiResponseError(), controller: ${controller_name} method:${method_name}, error: ${error}`);
    return res.json({error: error});
}
module.exports = apiResponseError;