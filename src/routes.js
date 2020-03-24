import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AllTestsPage from './pages/AllTestsPage';

import { pagesLink } from 'constants/common';

export default [
  {
    path: pagesLink.login,
    exact: true,
    cache: false,
    component: LoginPage,
  },
  {
    path: pagesLink.registration,
    exact: true,
    cache: false,
    component: RegistrationPage,
  },
  {
    path: pagesLink.allTests,
    exact: true,
    cache: false,
    component: AllTestsPage,
    isPrivate: true,
  },
];
