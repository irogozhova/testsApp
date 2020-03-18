import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import RegistrationForm from './RegistrationForm';

import styles from './LoginPage.module.scss';

class LoginPage extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <Tabs>
          <TabList>
            <Tab>Регистрация</Tab>
            <Tab>Авторизация</Tab>
          </TabList>
          <TabPanel>
            <RegistrationForm />
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
              <input type="submit" value="Войти" />
            </form> 
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default LoginPage;
