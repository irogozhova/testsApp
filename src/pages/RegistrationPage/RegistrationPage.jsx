import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { onFieldChange, onSubmit, onErrorMessagesUpdate } from "actions/registration";

import { 
  formSelector,
  isSendingInProgressSelector,
  errorMessagesSelector,
} from "reducers/registrationFormSelectors";

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
    const { login, password, confirmPassword } = form;

    const emptyFields = {};
    const errorMessages = [];

    let isEmptyFields = false;

    const testForLatinSymbols = (field) => {
      const fieldName = field === password ? 'Пароль' : 'Логин';

      if (!(/^[A-Za-z0-9_]+$/i.test(field))) {
        errorMessages.push(`${fieldName} - только латинские символы, цифры и нижнее подчеркивание`);
      }
    };

    for (let [key, value] of Object.entries(form)) {
      if (value === '') {
        emptyFields[key] = true;
        isEmptyFields = true;
      }
    }

    if (isEmptyFields) {
      errorMessages.push('Не все поля заполнены');
    }

    if (login !== '') {
      testForLatinSymbols(login);
    }

    if (password !== '') {
      if (password.length < 6) {
        errorMessages.push('Пароль должен содержать не менее 6 символов');
      } 
      
      testForLatinSymbols(password);

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
            <div className={styles.submitBtnWrapper}>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={this.handleSubmit}
                disabled={isSendingInProgress}
              >
                Зарегистрироваться
              </button>
            </div>
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
  return {
    form: formSelector(state),
    isSendingInProgress: isSendingInProgressSelector(state),
    errorMessages: errorMessagesSelector(state),
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
