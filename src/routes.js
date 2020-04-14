import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AllTestsPage from './pages/AllTestsPage';
import AddNewTestPage from './pages/AddNewTestPage';
import EditTestPage from './pages/EditTestPage';

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
  {
    path: pagesLink.addNewTest,
    exact: true,
    cache: false,
    component: AddNewTestPage,
    isPrivate: true,
  },
  {
    path: `${pagesLink.editTest}/:id`,
    exact: true,
    cache: false,
    component: EditTestPage,
    isPrivate: true,
  }
];
