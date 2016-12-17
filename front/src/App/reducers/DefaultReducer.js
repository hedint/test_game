import * as constants from '../constants/default_constants.js';

function reducer (state = initialState, action = false ) {
    switch (action.type) {
        case constants.LOAD_ITEMS :
            return Object.assign({}, state, {
                load : true
            });

        case constants.LOAD_ITEMS_SUCCESS :
            console.log(action);
            return Object.assign({}, state, {
                items: action.items,
                load : false
            });

        case constants.ADD_ITEM :
            return Object.assign({}, state, {
                load : true
            });

        case constants.ADD_ITEM_SUCCESS :
            return Object.assign({}, state, {
                load : false
            });

        case constants.EDIT_ITEM :
            return Object.assign({}, state, {
                load : true
            });

        case constants.EDIT_ITEM_SUCCESS :
            return Object.assign({}, state, {
                load : false
            });

        case constants.DELETE_ITEM :
            return Object.assign({}, state, {
                load : true
            });

        case constants.DELETE_ITEM_SUCCESS :
            return Object.assign({}, state, {
                load : false
            });

        case constants.SHOW_FORM_SUCCESS :
            return Object.assign({}, state, {
                ui_form_open : true,
                edit_item : action.edit_item
            });
        case constants.HIDE_FORM :
            return Object.assign({}, state, {
                ui_form_open : false,
                edit_item : action.edit_item
            });
        default :
            return state
    }
}

export default reducer;