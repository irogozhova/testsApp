import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { UPDATE_FIELD } from "../../../constants";

const mapStateToProps = state => {
  return { form: state.form };
};

const mapDispatchToProps = dispatch => ({
  onChangeLogin: value =>
    dispatch({ type: UPDATE_FIELD, key: 'login', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD, key: 'password', value }),
  onChangeConfirmPassword: value =>
    dispatch({ type: UPDATE_FIELD, key: 'confirmPassword', value }),
  onChangeAdminCheckbox: value =>
    dispatch({ type: UPDATE_FIELD, key: 'isAdmin', value }),
  // onSubmit: (username, email, password) => {
  //   const payload = agent.Auth.register(username, email, password);
  //   dispatch({ type: 'REGISTER', payload })
  // }
});

class RegistrationForm extends PureComponent {

  handleFormFieldChange = (event) => {
    const { target: { name, value, checked } } = event;
    switch (name) {
      case 'username':
        this.props.onChangeLogin(value);
        break;
      case 'password':
        this.props.onChangePassword(value);
        break;
      case 'confirmPassword':
        this.props.onChangeConfirmPassword(value);
        break;
      case 'isAdmin':
        this.props.onChangeAdminCheckbox(checked);
        break;
      default:
        throw new Error('Нет такого типа поля');
    }
  }

  render() {
    const { form: { login, password, confirmPassword, isAdmin } } = this.props;

    return (
      <div>
        <form>
          <label>
            логин:
            <input
              type="text"
              name="username"
              value={login}
              onChange={this.handleFormFieldChange}
            />
          </label>
          <label>
            пароль:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleFormFieldChange}
            />
          </label>
          <label>
            подтвердите пароль:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleFormFieldChange}
            />
          </label>
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
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
