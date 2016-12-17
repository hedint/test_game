import { connect } from 'react-redux';
import DailyDietPage from '../Components/DailyDietPage.js';
import * as actions from '../actions';
import * as children_actions from '../../Childs/actions';


var mapStateToProps = (state) => {
    return {
        daily_diet : state.daily_diet,
        ui_form_open : state.daily_diet.ui_form_open,
        edit_item : state.daily_diet.edit_item,
        children : state.children.items,
        current_child  : state.daily_diet.current_child
    }
};

var mapDispatchToProps = (dispatch) => {
    return {
        onSubmitForm : (data) => {
            if (data.id) {
                dispatch(actions.editItemApi(data));
            } else {
                dispatch(actions.addItemApi(data));
            }
            dispatch(actions.hideForm())
        },
        onDelete : (id) => {
            dispatch(actions.deleteItemApi(id))
        },

        onChangeCurrentChild : (child_id) => {
            dispatch(actions.changeChild(child_id));
        },

        showFormClick : (id = false) => {
            dispatch(actions.showForm(id));
        },

        onCloseForm : () => {
            dispatch(actions.hideForm())
        },
        onComponentLoad : () => {
            dispatch(children_actions.loadItemsApi());
            dispatch(actions.loadItemsApi())
        }

    }
};
const DailyDietPageCont = connect(mapStateToProps, mapDispatchToProps)(DailyDietPage);

export default DailyDietPageCont;