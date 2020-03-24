import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import currentUser from './currentUser';
import registrationForm from  './registrationForm';

export default combineReducers({
  login,
  logout,
  currentUser,
  registration: registrationForm,
})
