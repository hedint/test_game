import React from 'react';
var classNames = require('classnames');





const SearchFieldSelect = ({data}) => {
    return (
        <select className="search-field-select">
            {data.data.map((item) => (<option value={item[data.valueField]}>{item[data.textField]}</option>))}
        </select>
    );
};


const SearchField = React.createClass(
    {

        _findInListData : (needly) => {
            let listData = this.props.listData[this.props.name],
                result = false;
            listData.data.forEach ((item) => {
                if (item[listData.textField] === needly) {
                    result = item;
                }
            });
            if (result) {
                return this._formatValue(result[listData.textField]);
            }
        },
        _filterData : (needly) => {
            let listData = this.props.listData[this.props.name],
                result = [];
            listData.data.forEach ((item) => {
                if (item[listData.textField].toLowerCase().indexOf(needly) !== -1) {
                    result.push(item);
                }
            });
            return result;
        },
        _formatValue : (text, value) => {
            return {
                text,
                value
            };
        },

        getInitialState : () => {
            return {
                listData : this.props.listData,
                select_open : false
            }
        },
        onChange : (event) => {
            let {name, value} = event.target;
            const CHARS_COUNT_TO_FIND = 3;
            if (value.length >= CHARS_COUNT_TO_FIND) {
                let listData = Object.assign({}, this.state.listData, {data: this._filterData(value)});
                this.setState(Object.assign({}, this.state, {listData : listData}));
            }
        },
        render : () => {
            let {label, name, value, onChange, onBlur, listData, errors = {error_list : [], validate : false}} = this.props;
            let errors_count = errors.error_list.length;
            let classnames = classNames({
                'form-field' : true,
                'form-field__error': errors_count,
                'form-field__success' : (!errors_count && errors.validate)
            });
            return (<div className={classnames}>
                <label className="form-field__label">{label}</label>
                <div className="rw-widget">
                    <input  className="rw-input"
                            onChange={(event) => {onChange(event.target.name, event.target.value)}}
                            onBlur={(event) => {onBlur(event.target.name, event.target.value)}}
                            value={value} name={name} type="text" placeholder={label}/>
                </div>
                <FieldErrors errors={errors} />
            </div>);
        }
    }
);
const SearchField = ({label, name, value, onChange, onBlur, listData, errors = {error_list : [], validate : false}}) => {
    let errors_count = errors.error_list.length;
    let classnames = classNames({
        'form-field' : true,
        'form-field__error': errors_count,
        'form-field__success' : (!errors_count && errors.validate)
    });

    return (<div className={classnames}>
        <label className="form-field__label">{label}</label>
        <div className="rw-widget">
            <input  className="rw-input"
                    onChange={(event) => {onChange(event.target.name, event.target.value)}}
                    onBlur={(event) => {onBlur(event.target.name, event.target.value)}}
                    value={value} name={name} type="text" placeholder={label}/>
        </div>
        <FieldErrors errors={errors} />
    </div>);

};
export default SearchField;