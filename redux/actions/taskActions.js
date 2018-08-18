
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SAVE_EDIT = 'SAVE_EDIT';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UNCOMPLETE_TASK = 'UNCOMPLETE_TASK';

export const addTask = (task) => {
  return {
    type: ADD_TASK, 
    payload: {description: task.description, id: task.id, complete: task.complete } 
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

export const editTask = (id) => {
  return {
    type: EDIT_TASK,
    payload: id
  }
}

export const saveEdit = (task) => {
  return {
    type: SAVE_EDIT,
    payload: {description: task.description, id: task.id, complete: task.complete}
  }
}

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id
  }
}

export const uncompleteTask = (id) => {
  return {
    type: UNCOMPLETE_TASK,
    payload: id
  }
}





