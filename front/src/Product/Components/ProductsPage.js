import React from 'react';

import ProductScheme from '../Helpers/ProductScheme';
import {formatProductFormState, formatProductFormResponse} from '../Helpers/FormatProductForm.js';

import Form from '../../Common/Components/Form/Form';
import PopUp from '../../Common/Components/PopUp/PopUp';
import CustomTable from '../../Common/Components/Table/CustomTable';



const MedExaminationsPage = React.createClass({
    componentWillMount () {
        let {onComponentLoad} = this.props;
        onComponentLoad();
    },
    render () {
        let {products, onSubmitForm, onDelete, showFormClick, ui_form_open, onCloseForm, edit_item} = this.props;
        console.log(products);
        let scheme_builder = new ProductScheme();
        if (edit_item) {
            scheme_builder.setValues(edit_item);
        }
        let scheme = scheme_builder.getScheme();
        return ( <div className="products-page">
            <CustomTable data={products.items}  scheme={scheme} onDelete={onDelete} showFormClick={showFormClick} width={1100}  />
            <PopUp visible={ui_form_open} hidePopup={onCloseForm}>
                <Form locale='ru'
                      scheme={scheme}
                      formatFormState={formatProductFormState}
                      formatFormResponse={formatProductFormResponse}
                      onFormSubmit={onSubmitForm}/>
            </PopUp>
        </div>)
    }
});

export default MedExaminationsPage;