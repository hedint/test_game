import { connect } from 'react-redux';
import ChildTestsPage from '../Components/ChildTestsPage';
import * as actions from '../actions';
import * as children_actions from '../../Childs/actions';


var mapStateToProps = (state) => {
    return {
        child_tests : state.child_tests,
        ui_form_open : state.child_tests.ui_form_open,
        edit_item : state.child_tests.edit_item,
        children : state.children.items
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
const ChildTestsPageCont = connect(mapStateToProps, mapDispatchToProps)(ChildTestsPage);

export default ChildTestsPageCont;