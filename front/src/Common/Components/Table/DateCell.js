import React from 'react';
import {Cell} from 'fixed-data-table';
var Moment = require('moment');
const DateCell = ({rowIndex, data, col,...props}) => {

    let val = Moment(data[rowIndex][col]).format('DD.MM.YYYY');

    return (<Cell {...props}>
        <span className="table-text">{val}</span>
    </Cell>

)};
export default DateCell;