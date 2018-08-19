export const ADD_TASK = 'ADD_TASK';
export const READ_TASKS = 'READ_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SAVE_EDIT = 'SAVE_EDIT';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UNCOMPLETE_TASK = 'UNCOMPLETE_TASK';

import * as firebase from 'firebase';

export const addTask = (task) => (dispatch) => {
  firebase.database().ref(`/userTasks/${task.uid}/${task.id}`).set(
    {
      description: task.description,
      id: task.id,
      complete: task.complete
    }
  ).then(() => {
      dispatch({ type: ADD_TASK, payload: {description: task.description, id: task.id, complete: task.complete} });
   }).catch((err) => {
    console.log('ERROR', err);
   });
}

export const readTasks = (uid) => (dispatch) => {
  firebase.database().ref(`/userTasks/${uid}`).once('value').then(function(snapshot) {
    dispatch({ type: READ_TASKS, payload: snapshot.val() })
  });
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
    dispatch({ type: SAVE_EDIT, payload: {description: task.description, id: task.id, complete: task.complete} });
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





