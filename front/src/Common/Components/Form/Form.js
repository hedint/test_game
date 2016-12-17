
import React from 'react';
import Field from './Field';
import Validator from '../../FormValidator/Validator';


const Form = React.createClass({
    getInitialState () {
        return this.getValuesState(this.props.scheme);
    },
    getValuesState (scheme) {
        return this.props.formatFormState(scheme);
    },

    onChange (name, value) {
        let values = Object.assign({}, this.state.values, {[name] : value});
        let field_errors = {
            error_list : [],
            validate : false
        };
        let errors = Object.assign({}, this.state.errors, {[name] : field_errors});
        let state = Object.assign({}, this.state, {values : values, errors: errors});
        this.setState(state);
    },
    onBlur (name, value) {
        let error_list = this.validateField(name, value);
        let field_errors = {
            error_list : error_list,
            validate : true
        };
        let all_errors = Object.assign({}, this.state.errors, {[name] : field_errors});
        let state = Object.assign({}, this.state, { errors : all_errors});
        this.setState(state);
    },
    componentWillMount () {
        this.LOCALE = this.props.locale || 'ru';
        this.validator = new Validator(this.LOCALE);
    },
    validateField (name, value) {
        let validators = this.props.scheme.data[name].validators;
        if (validators && validators.length) {
            return this.validator.validate(validators, name, value);
        } else {
            return [];
        }
    },
    onSubmit (e) {
        e.preventDefault();
        let form_data = this.formatResponseData(this.state.values);
        this.props.onFormSubmit(form_data);
        return false;
    },
    formatResponseData (values) {
       return this.props.formatFormResponse(values);
    },
    componentWillReceiveProps (nextProps) {
        this.setState(this.getValuesState(nextProps.scheme));
    },
    getFormData () {
        let scheme = this.props.scheme;
        return scheme.getScheme();
    },
    render: function () {
        let data = this.props.scheme;
        return (
            <form className="form form_default form_with_border" onSubmit={this.onSubmit}>
                {data.data_list.map((name, i) =>(
                    <Field
                        {...data.data[name]}
                        key={i}
                        name={name}
                        listData={this.props.listData}
                        value={this.state.values[name]}
                        errors={this.state.errors[name]}
                        onChange={this.onChange}
                        onBlur={this.onBlur}

                        />))}
                <div className="form-field">
                    <button className="boots-btn-primary" type="submit">Сохранить</button>
                </div>
            </form>
        )}
});

export default Form;