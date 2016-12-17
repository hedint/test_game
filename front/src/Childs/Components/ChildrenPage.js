import React from 'react';

import ChildScheme from '../Helpers/ChildScheme';
import {formatChildFormState, formatChildFormResponse} from '../Helpers/FormatChildForm';

import Form from '../../Common/Components/Form/Form';
import PopUp from '../../Common/Components/PopUp/PopUp';
import CustomTable from '../../Common/Components/Table/CustomTable';
import createSelectListData from '../../Common/Helpers/CreateSelectListData';

import GenderListData from '../../Common/Helpers/GenderListData';
const ChildrenPage = React.createClass({
    componentWillMount () {
        let {onComponentLoad} = this.props;
        onComponentLoad();
    },
    render () {
        let {children, onSubmitForm, onDeleteChild, showFormClick, ui_form_open, onCloseForm, edit_item} = this.props;
        let scheme_builder = new ChildScheme();
        if (edit_item) {
            scheme_builder.setValues(edit_item);
        }
        let scheme = scheme_builder.getScheme();
        let listData = {
            gender : createSelectListData(GenderListData, 'id', 'name')
        };
        return ( <div className="children-page">
            <CustomTable data={children.items}  scheme={scheme} onDelete={onDeleteChild} listData={listData} showFormClick={showFormClick} width={800}  />
            <PopUp visible={ui_form_open} hidePopup={onCloseForm}>
                <Form locale='ru'
                      scheme={scheme}
                      listData={listData}
                      formatFormState={formatChildFormState}
                      formatFormResponse={formatChildFormResponse}
                      onFormSubmit={onSubmitForm}/>
            </PopUp>
        </div>)
    }
});

export default ChildrenPage;