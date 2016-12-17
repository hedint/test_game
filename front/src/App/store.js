import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers';
const initial_state = {
    children : {
        items : [],
        load : false,
        ui_form_open : false,
        edit_child : false
    },
    child_tests : {
        items : [],
        load : false,
        ui_form_open : false,
        edit_item : false
    },
    med_examinations : {
        items : [],
        load : false,
        ui_form_open : false,
        edit_item : false
    },
    products : {
        items : [],
        load : false,
        ui_form_open : false,
        edit_item : false
    },
    daily_diet : {
        items : [],
        load : false,
        ui_form_open : false,
        edit_item : false,
        current_child : false
    }

};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function createMyStore() {
    return createStore(reducer, initial_state, composeEnhancers (applyMiddleware(thunkMiddleware)));
}


export default createMyStore;