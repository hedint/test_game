import defaultReducer from '../App/reducers/DefaultReducer.js';
import * as constants from './constants.js';
const reducer = (state, action) => {
    if (action.type === constants.CHANGE_CHILD) {
        return Object.assign({}, state, {
            current_child : action.child_id
        })
    } else {
        return defaultReducer(state, action);
    }
};
export default reducer;