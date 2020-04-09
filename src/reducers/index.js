import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import currentUser from './currentUser';
import registrationForm from  './registrationForm';
import addNewTest from  './addNewTest';

export default combineReducers({
  login,
  logout,
  currentUser,
  registration: registrationForm,
  addNewTest,
})
