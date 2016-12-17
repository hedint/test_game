import { connect } from 'react-redux';
import ChildrenPage from '../Components/ChildrenPage';
import * as actions from '../actions';
var mapStateToProps = (state) => {
    return {
        children : state.children,
        ui_form_open : state.children.ui_form_open,
        edit_item : state.children.edit_item
    }
};

var mapDispatchToProps = (dispatch) => {
    return {
        onSubmitForm : (data) => {
            if (data.id !== '') {
                dispatch(actions.editItemApi(data));
            } else {
                dispatch(actions.addItemApi(data));
            }
            dispatch(actions.hideForm());

        },
        onDeleteChild : (child_id) => {
            dispatch(actions.deleteItemApi(child_id))
        },
        showFormClick : (child_id = false) => {
            dispatch(actions.showForm(child_id));
        },

        onCloseForm : () => {
            dispatch(actions.hideForm())
        },
        onComponentLoad : () => {
            dispatch(actions.loadItemsApi())
        }

    }
};
const ChildrenPageCont = connect(mapStateToProps, mapDispatchToProps)(ChildrenPage);

export default ChildrenPageCont;