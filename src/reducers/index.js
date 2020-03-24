import { combineReducers } from 'redux';

import registrationForm from  './registrationForm';
import currentUser from './currentUser';

export default combineReducers({
  registration: registrationForm,
  currentUser,
})
