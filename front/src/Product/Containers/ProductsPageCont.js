import { connect } from 'react-redux';
import ProductsPage from '../Components/ProductsPage';
import * as actions from '../actions';
var mapStateToProps = (state) => {
    return {
        products : state.products,
        ui_form_open : state.products.ui_form_open,
        edit_item : state.products.edit_item
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
            dispatch(actions.loadItemsApi())
        }

    }
};
const ProductsPageCont = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

export default ProductsPageCont;