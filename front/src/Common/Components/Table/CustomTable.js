import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import TextCell from './TextCell';
import DateCell from './DateCell';
import ListCell from './ListCell';

import ActionsCell from './ActionsCell';
import GenderListData from '../../Helpers/GenderListData';
import dataViewFormatter from './dataViewFormatter';


const renderColumn = function ({name, label, data, element_type, key, listData, format_params = {}, width = 150}) {
    let formatter = dataViewFormatter(format_params);
    switch (element_type) {
        case 'TextField' :
            return (<Column
                key={key}
                header={<Cell>{label}</Cell>}
                cell={<TextCell data={data} col={name} formatter={formatter} />}
                width={width}
                />);
            break;
        case 'DatePicker' :
            return (<Column
                key={key}
                header={<Cell>{label}</Cell>}
                cell={<DateCell data={data} col={name}/>}
                width={width}
                />);
            break;
        case 'GenderList' :
            return (<Column
                key={key}
                header={<Cell>{label}</Cell>}
                cell={<ListCell data={data} listData={GenderListData}  col={name} />}
                width={width}
                />);
        case 'CustomSelectList' :
            return (<Column
                key={key}
                header={<Cell>{label}</Cell>}
                cell={<ListCell data={data} listData={listData[name]}  col={name} />}
                width={width}
                />);
            break;
        case 'NumberField' :
            return (<Column
                key={key}
                header={<Cell>{label}</Cell>}
                cell={<TextCell data={data} col={name} formatter={formatter} />}
                width={width}
                />);
            break;
        case 'HiddenField' :
            return null;
            break;
    }
};
const renderColumns = function (scheme, data, listData) {
    return scheme.data_list.map( (name, i) => {
        let scheme_element = scheme.data[name];
        return renderColumn({
            key : i,
            name: name,
            label: scheme_element.label,
            data: data,
            element_type: scheme_element.element_type,
            listData: listData,
            width: scheme_element.width,
            format_params : scheme_element.format_params
        })
    })
};


const CustomTable = ({data, scheme, listData, onDelete, showFormClick, width = 1000, maxHeight = 1000, rowHeight = 50, headerHeight=50}) => {
    let rowsCount = (data) ? data.length : 0;
    return (
        <div className="list">
            <Table
                rowHeight={rowHeight}
                rowsCount={rowsCount}
                width={width}
                maxHeight={maxHeight}
                headerHeight={headerHeight}>

                {renderColumns(scheme, data, listData)}
                <Column
                    header={<Cell>Действия</Cell>}
                    cell={<ActionsCell data={data} onDelete={onDelete} onEdit={showFormClick}   col="id" />}
                    width={200}
                    />

            </Table>
            <div className="list__add-button boots-btn-success" onClick={() => showFormClick()}>Добавить</div>
        </div>
    );

};
export default CustomTable;