import React, { Fragment, PureComponent } from 'react';
import { Link } from "react-router-dom";

import LogoutButton from 'components/LogoutButton';

// import styles from './HomePage.scss';

class AllTestsPage extends PureComponent {
  render() {
    return (
      <Fragment>
        AllTestsPage
        <Link to="/login">Авторизация</Link>
        <Link to="/addNewTest">Создать тест</Link>
        <LogoutButton />
      </Fragment>
    );
  }
}

export default AllTestsPage;
