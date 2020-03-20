import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { onFieldChange, onSubmit } from "actions/registration";
import classnames from 'classnames';

import InputField from './InputField';

import styles from './RegistrationForm.module.scss';

class RegistrationForm extends PureComponent {
  state = {
    emptyFields: {},
    errorMessages: []
  }

  handleFormFieldChange = (event) => {
    const { target: { name, value, checked } } = event;
    this.props.onFieldChange({ name, value: checked || value });
  }

  validateAndSubmitForm = () => {
    const { form } = this.props;
    const { password, confirmPassword } = form;

    const emptyFields = {};
    const errorMessages = [];

    let isEmptyFields = false;

    for (let [key, value] of Object.entries(form)) {
      if (value === '') {
        emptyFields[key] = true;
        isEmptyFields = true;
      }
    }

    if (isEmptyFields) {
      errorMessages.push('Не все поля заполнены');
    }

    if (password !== '') {
      if (password.length < 6) {
        errorMessages.push('Пароль должен содержать не менее 6 символов');
      } 
      
      if (!(/^[A-Za-z0-9_]+$/i.test(password))) {
        errorMessages.push('Пароль может содержать только латинские символы и/или цифры/нижнее подчеркивание');
      }

      if (password !== confirmPassword) {
        errorMessages.push('Пароли не совпадают');
      }
    }

    this.setState({ emptyFields, errorMessages });

    if (errorMessages.length === 0) {
      this.props.onSubmit(this.props.form);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.validateAndSubmitForm();
  }

  render() {
    const { 
      form: { 
        login,
        password,
        confirmPassword,
        isAdmin
      },
    } = this.props;

    const { errorMessages, emptyFields } = this.state;

    return (
      <div className={styles.root}>
        <form onSubmit={this.handleSubmit}>
          <InputField
            type="text"
            name="login"
            value={login}
            text="Имя пользователя"
            onChange={this.handleFormFieldChange}
            hasError={emptyFields.login}
          />
          <InputField
            type="password"
            name="password"
            value={password}
            text="Пароль"
            onChange={this.handleFormFieldChange}
            hasError={emptyFields.password}
          />
          <InputField
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            text="Подтверждение пароля"
            onChange={this.handleFormFieldChange}
            hasError={emptyFields.confirmPassword}
          />
          <label>
            Админ:
            <input
              name="isAdmin"
              type="checkbox"
              defaultChecked={isAdmin}
              onChange={this.handleFormFieldChange}
            />
          </label>
          <input type="submit" value="Зарегистрироваться" />
          <div>
            {errorMessages.map((message, index) => <div key={index}>{message}</div>)}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { form: state.registration.form };
};

export default connect(
  mapStateToProps,
  { 
    onFieldChange,
    onSubmit,
  }
)(RegistrationForm);
