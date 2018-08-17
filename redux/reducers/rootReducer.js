import { combineReducers } from 'redux';
import taskReducer from './taskReducer';


export default combineReducers({
  taskList: taskReducer.taskReducer,
  editIndex: taskReducer.taskReducer
})

