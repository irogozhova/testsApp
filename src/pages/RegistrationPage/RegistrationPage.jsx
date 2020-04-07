import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { onFieldChange, onSubmit, onErrorMessagesUpdate } from "actions/registration";

import InputField from 'components/InputField';
import CheckBox from 'components/CheckBox';
import ErrorMessages from 'components/ErrorMessages';

import styles from './RegistrationPage.module.scss';

class RegistrationPage extends PureComponent {
  state = {
    emptyFields: {},
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
        confirmPassword,
        isAdmin
      },
      errorMessages,
      isSendingInProgress,
      onFieldChange,
    } = this.props;
    
    const { emptyFields } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h1>Регистрация</h1>
          </div>
          <form>
            <InputField
              type="text"
              name="login"
              value={login}
              text="Имя пользователя"
              onChange={onFieldChange}
              hasError={emptyFields.login}
            />
            <InputField
              type="password"
              name="password"
              value={password}
              text="Пароль"
              onChange={onFieldChange}
              hasError={emptyFields.password}
            />
            <InputField
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              text="Подтверждение пароля"
              onChange={onFieldChange}
              hasError={emptyFields.confirmPassword}
            />
            <CheckBox
              name="isAdmin"
              label="Админ:"
              checked={isAdmin}
              onChange={onFieldChange}
            />
            <button
              type="button"
              className={styles.submitBtn}
              onClick={this.handleSubmit}
              disabled={isSendingInProgress}
            >
              Зарегистрироваться
            </button>
            <div className={styles.errorMessagesWrapper}>
              <ErrorMessages
                messages={errorMessages}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { 
    registration: { 
      form, 
      errorMessages,
      isSendingInProgress,
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
)(RegistrationPage);
