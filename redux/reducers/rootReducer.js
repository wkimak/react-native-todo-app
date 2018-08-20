import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  taskList: taskReducer.taskReducer,
  editIndex: taskReducer.taskReducer,
  uid: authReducer.authReducer,
  toggleModal: modalReducer.modalReducer
})

