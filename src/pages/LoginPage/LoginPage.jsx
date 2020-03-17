import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import styles from './LoginPage.module.scss';

class LoginPage extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <Tabs>
          <TabList>
            <Tab>Авторизация</Tab>
            <Tab>Регистрация</Tab>
          </TabList>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
            <form>
              <label>
                логин:
                <input type="text" name="username" />
              </label>
              <label>
                пароль:
                <input type="password" name="password" />
              </label>
              <label>
                подтвердите пароль:
                <input type="password" name="password" />
              </label>
              <label>
                Админ:
                <input
                  name="isAdmin"
                  type="checkbox"
                  checked={true}
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
                />
              </label>
              <input type="submit" value="Войти" />
            </form>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default LoginPage;
