import { combineReducers } from 'redux';

import login from './login';
import currentUser from './currentUser';
import registrationForm from  './registrationForm';

export default combineReducers({
  login,
  currentUser,
  registration: registrationForm,
})
