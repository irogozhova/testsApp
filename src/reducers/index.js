import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import currentUser from './currentUser';
import registrationForm from  './registrationForm';
import addNewTest from  './addNewTest';
import editTest from  './editTest';
import questionForm from  './questionForm';

export default combineReducers({
  login,
  logout,
  currentUser,
  registration: registrationForm,
  addNewTest,
  editTest,
  questionForm,
})
