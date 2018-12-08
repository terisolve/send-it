import * as localStorage from './localStorage';
import saveInput from './actions/saveInput';
import { 
  userLogin, 
  userSignup, 
  adminLogin 
} from './actions/user/index';


export default {
  localStorage,
  actions: {
    saveInput,
    userLogin,
    adminLogin,
    userSignup
  }
};