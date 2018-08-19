import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import authReducer from './authReducer';


export default combineReducers({
  taskList: taskReducer.taskReducer,
  editIndex: taskReducer.taskReducer,
  username: authReducer.authReducer,
  uid: authReducer.authReducer
})

