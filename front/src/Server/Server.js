const DATA_CHANGED = true;
const DATA_NOT_CHANGED = false;




class AbstractApi {
    constructor (data) {
        this.data = data;
        this.id_field = 'id';
    }

    loadItem (params) {
        let {id} = params;
        let data = this.data;
        let index = this._findItemIndex(id);
        if (index !== -1) {
            return this.successResponse(data[index], DATA_NOT_CHANGED);
        } else {
            //error callback or smth
        }
    }

    loadItems () {
        let is_data_changed = DATA_NOT_CHANGED;
        if (!this.data) {
            this.data = [];
            is_data_changed = DATA_CHANGED;
        }
        return this.successResponse(this.data, is_data_changed);
    }

    addItem (params) {
        console.log(this.data);
        let {item} = params;
        let data = this.data;
        if (data.length) {
            item.id = data[data.length - 1].id + 1;
        } else {
            item.id = 1;
        }
        data.push(item);
        return this.successResponse(data, DATA_CHANGED);
    }

    editItem (params) {
        let {item} = params;
        let data = this.data;
        let index = this._findItemIndex(item.id);
        if (index !== -1) {
            data[index] = item;
            return this.successResponse(data, DATA_CHANGED);
        } else {
            //error callback or smth
            throw new Error("Can't find item");
        }
    }

    deleteItem (params) {
        let {id} = params;
        let data = this.data;
        let index = this._findItemIndex(id);
        if (index !== -1) {
            data.splice(index, 1);
            return this.successResponse(data, DATA_CHANGED);
        }
    }

    _findItemIndex (needed) {
        let needed_index  = -1;
        let data = this.data;
        let id_field = this.id_field;
        data.forEach((item, index) => {
            if (item[id_field] == needed) {
                needed_index = index;
                return null;
            }
        });
        return needed_index;
    }

    successResponse (data, is_data_changed = DATA_NOT_CHANGED) {
        return {
            error: false,
            message : '',
            data : data,
            is_data_changed : is_data_changed

        }
    }
}



class RestApi {
    constructor (api_url) {
        this.api_prefix = '/api';
        this.api_url = api_url;
    }

    loadItem (params = {}) {
        let api_method_name = 'load';
        return this._call(api_method_name, params);
    }
    loadItems (params = {}) {
        let api_method_name = 'loadAll';
        return this._call(api_method_name, params);
    }

    addItem (params = {}) {
        let api_method_name = 'create';
        return this._call(api_method_name, params);
    }
    editItem (params = {}) {
        console.log(params);
        let api_method_name = 'update';
        return this._call(api_method_name, params);
    }

    deleteItem (params = {}) {
        let api_method_name = 'delete';
        return this._call(api_method_name, params);
    }


    _constructParams (params = {}) {
        let esc = encodeURIComponent;
        return Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    }

    _constructUrl (api_method_name, id = '', params = {}) {
        return this.api_prefix + this.api_url + api_method_name + '/'+ id+'?'+this._constructParams(params);
    }

    _call (api_method_name, params) {
        var url = this._constructUrl(api_method_name, params.id, params);
        console.log(params);
        return fetch(url, {
            method: "get"
        }).then((response) => response.json());
    }
}

class ChildrenApi extends RestApi {
    constructor () {
        var api_url = '/child/';
        super(api_url);
    }
}

class ChildTestsApi extends RestApi {
    constructor () {
        var api_url = '/medtest/';
        super(api_url);
    }
}
class MedExaminationsApi extends RestApi {
    constructor () {
        var api_url = '/medexamination/';
        super(api_url);
    }
}

class ProductsApi extends RestApi {
    constructor () {
        var api_url = '/products/';
        super(api_url);
    }
}



class DietApi extends AbstractApi {
    loadItems (child_id, timestamp) {
        let is_data_changed = DATA_NOT_CHANGED;
        let result = [];
        if (!this.data) {
            this.data = [];
            result = [];
            is_data_changed = DATA_CHANGED;
        } else {
            result = this._getItems(child_id, timestamp);
        }
        return this.successResponse(result, is_data_changed);
    }

    _getItems (child_id, timestamp) {
        let needly_date = new Date().setTime(timestamp);
        needly_date = needly_date.getFullYear()+needly_date.getMonth()+needly_date.getDate();
        let result = this.data.filter((element) => {
            let current_date = new Date().setTime(element.date);
            current_date = current_date.getFullYear() + current_date.getMonth() + current_date.getDate();
            return (element.child_id == child_id && current_date == needly_date);
        });
        if (!result) {
            result = [];
        }
        return result;
    }
}


class ServerApi {
    constructor () {
        this.stores = [
            'children',
            'tests',
            'med_examinations',
            'products',
            'diet_api'
        ];
        this.api_list = {
            'children' : ChildrenApi,
            'tests' : ChildTestsApi,
            'med_examinations': MedExaminationsApi,
            'products' : ProductsApi,
            'diet_api' : DietApi
        };
    }

    call (api_part_name) {
        let api = new this.api_list[api_part_name]();
        return (api_func_name, params = {} ) => {
            return api[api_func_name](params);
        }
    }

}

/*
class ServerApi {

    constructor () {
        this.storage = window.localStorage;
        this.STORAGE_KEY = 'FKU_DATA';
        this.stores = [
            'children',
            'tests',
            'med_examinations',
            'products',
            'diet_api'
        ];

        this.api_list = {
            'children' : ChildrenApi,
            'tests' : ChildTestsApi,
            'med_examinations': MedExaminationsApi,
            'products' : ProductsApi,
            'diet_api' : DietApi
        };
    }

    call (api_part_name) {
        let data = this.getAllData();
        let api = new this.api_list[api_part_name](data[api_part_name]);
        return (api_func_name, callback , params = {}) => {
           let result = api[api_func_name](params);
            if (result.is_data_changed == DATA_CHANGED) {
                data[api_part_name] = result.data;
                this.saveAllData(data);
            }
            callback(result);
        }
    }

    getAllData () {
        let data = this.storage.getItem(this.STORAGE_KEY);
        if (data) {
            return  JSON.parse(data);
        }
        return this.getDefaultState();
    }

    getDefaultState () {
        let state = {};
        this.stores.forEach((store_name, index) => {
            state[store_name] = [];
        });
        return state;
    }

    saveAllData (data) {
        if (!data) {
            data = this.getDefaultState();
        }
        this.storage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }

    successResponse (data) {
        return {
            'error': false,
            'message' : '',
            'data' : data
        }
    }
}
*/

export default ServerApi;