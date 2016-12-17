import { connect } from 'react-redux';
import MedExaminationsPage from '../Components/MedExaminationsPage';
import * as actions from '../actions';
import * as children_actions from '../../Childs/actions';
var mapStateToProps = (state) => {
    return {
        med_examinations : state.med_examinations,
        ui_form_open : state.med_examinations.ui_form_open,
        edit_item : state.med_examinations.edit_item,
        children : state.children.items
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
const ChildTestsPageCont = connect(mapStateToProps, mapDispatchToProps)(MedExaminationsPage);

export default ChildTestsPageCont;