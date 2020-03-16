import LoginPage from './pages/LoginPage';
import AllTestsPage from './pages/AllTestsPage';

import { pagesLink } from './constants';

export default [
  {
    path: pagesLink.login,
    exact: true,
    cache: false,
    component: LoginPage,
  },
  {
    path: pagesLink.allTests,
    exact: true,
    cache: false,
    component: AllTestsPage,
  },
];
