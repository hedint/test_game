
import React from 'react';
import {Cell} from 'fixed-data-table';
const TextCell = ({rowIndex, data, col, formatter,...props}) => {
    let val = formatter(data[rowIndex][col]);
    return (<Cell {...props}>
        <span className="table-text">{val}</span>
    </Cell>);
}
export default TextCell;