import React from 'react';

import MedExaminationScheme from '../Helpers/MedExaminationScheme';
import {formatMedExaminationFormState, formatMedExaminationFormResponse} from '../Helpers/FormatMedExaminationForm';

import Form from '../../Common/Components/Form/Form';
import PopUp from '../../Common/Components/PopUp/PopUp';
import CustomTable from '../../Common/Components/Table/CustomTable';

import createSelectListData from '../../Common/Helpers/CreateSelectListData';


const MedExaminationsPage = React.createClass({
    componentWillMount () {
        let {onComponentLoad} = this.props;
        onComponentLoad();
    },
    render () {
        let {med_examinations, children, onSubmitForm, onDelete, showFormClick, ui_form_open, onCloseForm, edit_item} = this.props;
        let listData = {
            child_id : createSelectListData(children, 'id', 'first_name')
        };
        let scheme_builder = new MedExaminationScheme();
        if (edit_item) {
            scheme_builder.setValues(edit_item);
        }
        let scheme = scheme_builder.getScheme();
        return ( <div className="child-tests-page">
            <CustomTable data={med_examinations.items}  scheme={scheme} listData={listData} onDelete={onDelete} showFormClick={showFormClick} width={900}  />
            <PopUp visible={ui_form_open} hidePopup={onCloseForm}>
                <Form locale='ru'
                      scheme={scheme}
                      listData={listData}
                      formatFormState={formatMedExaminationFormState}
                      formatFormResponse={formatMedExaminationFormResponse}
                      onFormSubmit={onSubmitForm}/>
            </PopUp>
        </div>)
    }
});

export default MedExaminationsPage;