import React from 'react';
import Field from '../../Common/Components/Form/Field';
import createSelectListData from '../../Common/Helpers/CreateSelectListData';
import ChildList from './ChildList.js'
import DailyDietPage from './DailyDietPage.js';

import MessageBlock from '../../Common/Components/MessageBlock.js';


const DailyDietPageWrap = (props) => {
    let {
        children,
        onChangeCurrentChild,
        current_child = 0,
        header = 'Рацион на день'
        } = props;
    let listData = {
        child_id : createSelectListData(children, 'id', 'first_name')
    };


    if (!children || !children.length) {
        return (
            <div className="page-wrap">
                <h1 className="page-wrap__header">{header}</h1>
                <MessageBlock text="Необходимо добавить хотя бы одного ребенка, прежде чем заполнять рацион" type="attention"/>
                </div>
                );
    }

    return (
        <div className="page-wrap">
            <h1 className="page-wrap__header">{header}</h1>
            <ChildList
                name='child_id'
                label='Выберите ребенка'
                onChange={onChangeCurrentChild}
                value={current_child}
                listData={listData}
                />
            <DailyDietPage {...props} />
        </div>
    )
};