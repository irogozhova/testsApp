import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { UPDATE_FIELD, REGISTER } from "constants/common";

class RegistrationForm extends PureComponent {

  handleFormFieldChange = (event) => {
    const { target: { name, value, checked } } = event;
    this.props.onFieldChange(name, checked || value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.props.form);
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

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            логин:
            <input
              type="text"
              name="login"
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
          <button type="submit" value="Зарегистрироваться" />
        </form>
      </div>
    );
  }
}

//TODO: rewrite actions with action creators and shorten this
const mapStateToProps = state => {
  return { form: state.registration.form };
};

const mapDispatchToProps = dispatch => ({
  onFieldChange: (key, value) =>
    dispatch({ type: UPDATE_FIELD, key, value }),
  onSubmit: (form) => dispatch({ type: REGISTER, form }),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
