import * as constants from "../App/constants/default_constants.js";
import * as special_constants from './constants.js';
import {MODULE_NAME, API_NAME} from './module_const';
import ServerApi from '../Server/Server';


export function loadItems () {
    return {
        type : constants.LOAD_ITEMS,
        module_name : MODULE_NAME
    }
}
export function loadItemsSuccess (response) {
    return {
        type: constants.LOAD_ITEMS_SUCCESS,
        module_name : MODULE_NAME,
        items : response.data
    }
}


export function loadItemsApi (child_id, timestamp) {
    return function (dispatch) {
        dispatch(loadItems());
        let api = new ServerApi();
        return api.call(API_NAME)('loadItems', (data) => dispatch(loadItemsSuccess(data)));
    }
}

export function loadItem () {
    return {
        type : constants.LOAD_ITEM,
        module_name : MODULE_NAME
    }
}

export function loadItemSuccess (item ) {
    return {
        type: constants.LOAD_ITEM_SUCCESS,
        module_name : MODULE_NAME,
        item : item
    }
}

export function loadItemApi (id) {
    return function (dispatch) {
        dispatch(loadItem());
        let api = new ServerApi();
        return api.call(API_NAME)(
            'loadItem',
            (data) => dispatch(loadItemSuccess(data)),
            {id}
        );
    }
}

export function addItem () {
    return {
        type : constants.ADD_ITEM,
        module_name : MODULE_NAME
    }
}
export function addItemSuccess (response) {
    return {
        type: constants.ADD_ITEM_SUCCESS,
        module_name : MODULE_NAME,
        items : response.data
    }
}
export function addItemApi (item) {
    return function (dispatch) {
        dispatch(addItem());
        let api = new ServerApi();
        return api.call(API_NAME)(
            'addItem',
            (data) => dispatch(addItemSuccess(data)),
            {item}
        );
    }
}

export function editItem () {
    return {
        type : constants.EDIT_ITEM,
        module_name : MODULE_NAME
    }
}
export function editItemSuccess (response) {
    return {
        type: constants.EDIT_ITEM_SUCCESS,
        module_name : MODULE_NAME,
        items : response.data
    }
}
export function editItemApi (item) {
    return function (dispatch) {
        dispatch(editItem());
        let api = new ServerApi();
        return api.call(API_NAME)(
            'editItem',
            (data) => dispatch(editItemSuccess(data)),
            {item}
        );
    }
}

export function deleteItem () {
    return {
        type : constants.DELETE_ITEM,
        module_name : MODULE_NAME
    }
}
export function deleteItemSuccess (response) {
    return {
        type: constants.DELETE_ITEM_SUCCESS,
        module_name : MODULE_NAME,
        items : response.data
    }
}


export function deleteItemApi (id) {
    return function (dispatch) {
        dispatch(deleteItem());
        let api = new ServerApi();
        return api.call(API_NAME)(
            'deleteItem',
            (data) => dispatch(deleteItemSuccess(data)),
            {id}
        );
    }
}


export function showFormSuccess (item = false) {
    return {
        type: constants.SHOW_FORM_SUCCESS,
        module_name : MODULE_NAME,
        edit_item : item
    }
}

export function showForm (id = false) {
    return function (dispatch) {
        if (id !== false) {
            dispatch(loadItem());
            let api = new ServerApi();
            return api.call(API_NAME)(
                'loadItem',
                (data) => {
                    dispatch(loadItemSuccess(data));
                    dispatch(showFormSuccess(data.data));
                },
                {id}
            );
        } else {
            dispatch(showFormSuccess());
        }
    };
}



export function hideForm () {
    return {
        type: constants.HIDE_FORM,
        module_name : MODULE_NAME,
        edit_item : false
    }
}



export function changeChild (child_id) {
    return {
        type : special_constants.CHANGE_CHILD,
        module_name : MODULE_NAME,
        child_id : child_id
    }
}