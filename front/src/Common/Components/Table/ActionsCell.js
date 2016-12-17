import React from 'react';
import {Cell} from 'fixed-data-table';
const ActionsCell =  ({rowIndex, data, col, onEdit, onDelete, ...props}) => {
    return (
        <Cell {...props}>
            <a className="action-form-link" href="#" onClick={() => {onEdit(data[rowIndex][col])}}>
                <i className="fa fa-pencil fa-fw" aria-hidden="true"></i>
                &nbsp;Редактировать</a><br/>
            <a className="action-form-link"  onClick={() => {onDelete(data[rowIndex][col])}} href="#">
                <i className="fa fa-times fa-fw" aria-hidden="true"></i>
                &nbsp;Удалить</a>
        </Cell>
    );
};
export default ActionsCell