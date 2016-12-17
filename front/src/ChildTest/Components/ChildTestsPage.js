import React from 'react';

import ChildTestScheme from '../Helpers/ChildTestScheme';
import {formatChildTestFormState, formatChildTestFormResponse} from '../Helpers/FormatChildTestForm';

import Form from '../../Common/Components/Form/Form';
import PopUp from '../../Common/Components/PopUp/PopUp';
import CustomTable from '../../Common/Components/Table/CustomTable';

import createSelectListData from '../../Common/Helpers/CreateSelectListData';



const ChildrenPage = React.createClass({
    componentWillMount () {
        let {onComponentLoad} = this.props;
        onComponentLoad();
    },
    render () {
        let {child_tests, children, onSubmitForm, onDelete, showFormClick, ui_form_open, onCloseForm, edit_item} = this.props;
        let listData = {
            child_id : createSelectListData(children, 'id', 'first_name')
        };
        let scheme_builder = new ChildTestScheme();
        if (edit_item) {
            scheme_builder.setValues(edit_item);
        }
        let scheme = scheme_builder.getScheme();
        return ( <div className="child-tests-page">
            <CustomTable data={child_tests.items}  scheme={scheme} listData={listData} onDelete={onDelete} showFormClick={showFormClick} width={800}  />
            <PopUp visible={ui_form_open} hidePopup={onCloseForm}>
                <Form locale='ru'
                      scheme={scheme}
                      listData={listData}
                      formatFormState={formatChildTestFormState}
                      formatFormResponse={formatChildTestFormResponse}
                      onFormSubmit={onSubmitForm}/>
            </PopUp>
        </div>)
    }
});

export default ChildrenPage;