import React, { PureComponent } from 'react';

import styles from './LoginPage.module.scss';

class LoginPage extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <h1>Авторизуйтесь, пожалуйста:</h1>
        <form>
          <label>
            логин:
            <input type="text" name="username" />
          </label>
          <label>
            пароль:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Войти" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
