import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { onFieldChange, onSubmit, onErrorMessagesUpdate } from "actions/login";
import { Link } from "react-router-dom";

import InputField from 'components/InputField';
import ErrorMessages from 'components/ErrorMessages';

import styles from './LoginPage.module.scss';

class LoginPage extends PureComponent {
  state = {
    emptyFields: {},
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
      onFieldChange,
    } = this.props;

    const { emptyFields } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h1>Войти</h1>
          </div>
          <form>
            <InputField
              type="text"
              name="login"
              value={login}
              text="Логин"
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
            <button
              type="button"
              className={styles.submitBtn}
              onClick={this.handleSubmit}
              disabled={isSendingInProgress}
            >
              Войти
            </button>
            <div className={styles.errorMessagesWrapper}>
              <ErrorMessages
                className={styles.errors}
                messages={errorMessages}
              />
            </div>
          </form>
          <div className={styles.registerWrapper}>
            <p className={styles.text}>
              Еще не зарегистрированы?
            </p>
            <Link
              to="/registration"
              className={styles.link}
            >
              Регистрация
            </Link>
          </div>
        </div>
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
