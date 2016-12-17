
import React from 'react';
import {Cell} from 'fixed-data-table';

const ListSell = ({rowIndex, data, col, listData, ...props}) => {
    let val = data[rowIndex][col];
    let {valueField, textField} = listData;
    listData.data.forEach((item) => {
        if (item[valueField] == val) {
            val = item[textField];
        }
    });
    return (<Cell {...props}>
        <span className="table-text">{val}</span>
    </Cell>
)};
export default ListSell;