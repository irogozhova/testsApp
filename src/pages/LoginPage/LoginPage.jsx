import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { onFieldChange, onSubmit, onErrorMessagesUpdate } from "actions/login";
import { Link } from "react-router-dom";

import InputField from 'components/InputField';

import styles from './LoginPage.module.scss';

class LoginPage extends PureComponent {
  state = {
    emptyFields: {},
  }

  handleFormFieldChange = (event) => {
    const { target: { name, value } } = event;
    this.props.onFieldChange({ name, value });
  }

  validateAndSubmitForm = () => {
    const { form } = this.props;

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

    this.setState({ emptyFields });
    this.props.onErrorMessagesUpdate(errorMessages);

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
      },
      errorMessages,
      isSendingInProgress,
    } = this.props;

    const { emptyFields } = this.state;

    return (
      <div className={styles.root}>
        <h1>Авторизация</h1>
        <form>
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
          <button
            onClick={this.handleSubmit}
            disabled={isSendingInProgress}
          >
            Войти
          </button>
          <div>
            {errorMessages.map((message, index) => <div key={index}>{message}</div>)}
          </div>
        </form>
        <Link to="/registration">Регистрация</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { 
    login: { 
      form, 
      isSendingInProgress,
      errorMessages,
    }
  } = state;

  return { 
    form,
    isSendingInProgress,
    errorMessages,
  };
};

export default connect(
  mapStateToProps,
  { 
    onFieldChange,
    onSubmit,
    onErrorMessagesUpdate,
  }
)(LoginPage);
