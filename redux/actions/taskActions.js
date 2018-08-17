
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SAVE_EDIT = 'SAVE_EDIT';

export const addTask = (task) => {
  return {
    type: ADD_TASK, 
    payload: task.description 
  }
}

export const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    payload: index
  }
}

export const editTask = (index) => {
  return {
    type: EDIT_TASK,
    payload: index
  }
}

export const saveEdit = (index, task) => {
  return {
    type: SAVE_EDIT,
    payload: {index: index, task: task.description}
  }
}




