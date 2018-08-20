export const READ_TASKS = 'READ_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SAVE_EDIT = 'SAVE_EDIT';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UNCOMPLETE_TASK = 'UNCOMPLETE_TASK';
export const RESET_TASKLIST = 'RESET_TASKLIST';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

import * as firebase from 'firebase';

export const addTask = (uid, task) => (dispatch) => {
  firebase.database().ref(`/userTasks/${uid}/${task.id}`).set(
    {
      description: task.description,
      id: task.id,
      complete: task.complete,
      priority: task.priority
    }).catch((err)=> {
        console.log(err);
    })
}

export const readTasks = (uid, sortType) => (dispatch) => {
   var ref1 = firebase.database().ref(`/userTasks/${uid}`).orderByKey();
   var ref2 = firebase.database().ref(`/userTasks/${uid}`);
   console.log(uid, sortType);
  if(sortType === 'date') {
      ref2.off();
      dispatch({ type: RESET_TASKLIST })
     ref1.on('child_added', (snapshot) => {
      dispatch({ type: READ_TASKS, payload: snapshot.val() })
    })
  } else if(sortType === 'priority') {
    ref1.off(); 
     dispatch({ type: RESET_TASKLIST })
    ref2.orderByChild('priority').on('child_added', (snapshot) => {
      dispatch({ type: READ_TASKS, payload: snapshot.val()})
    }); 
  }
}

export const deleteTask = (uid, id) => (dispatch) => {
 firebase.database().ref(`/userTasks/${uid}/${id}`).remove().then(() => {
   dispatch({type: DELETE_TASK, payload: id});
 });
}

export const editTask = (uid, id) => (dispatch) => {
  dispatch({type: EDIT_TASK, payload: id})
}

export const saveEdit = (uid, task) => (dispatch) => {
  firebase.database().ref(`userTasks/${uid}/${task.id}`).update({
     description: task.description
  }).then(() => {
    dispatch({ type: SAVE_EDIT, payload: {description: task.description, id: task.id, complete: task.complete, priority: task.priority } });
  })
  
}

export const completeTask = (uid, id) => (dispatch) => {
  firebase.database().ref(`userTasks/${uid}/${id}`).update({
    complete: true
  }).then(() => {
    dispatch({ type: COMPLETE_TASK, payload: id })
  })
 
}

export const uncompleteTask = (uid, id) => (dispatch) => {
  firebase.database().ref(`userTasks/${uid}/${id}`).update({
    complete: false
  }).then(() => {
    dispatch({ type: UNCOMPLETE_TASK, payload: id })
  })
}

export const toggleModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_MODAL });
}









