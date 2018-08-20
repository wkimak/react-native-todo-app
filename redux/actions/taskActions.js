import * as firebase from 'firebase';
import { READ_TASKS_DATE,
         READ_TASKS_PRIORITY, 
         DELETE_TASK, 
         EDIT_TASK, 
         SAVE_EDIT, 
         COMPLETE_TASK, 
         UNCOMPLETE_TASK, 
         RESET_TASKLIST, 
         TOGGLE_MODAL } from '../constants';


export const addTask = (uid, task) => (dispatch) => {
  firebase.database().ref(`/userTasks/${uid}/${task.taskId}`).set(
    {
      description: task.description,
      taskId: task.taskId,
      complete: task.complete,
      priority: task.priority
    }).catch((err)=> {
        console.log(err);
    })
}

export const readTasks = (uid, sortType) => (dispatch) => {
  var ref1 = firebase.database().ref(`/userTasks/${uid}`).orderByKey();
  var ref2 = firebase.database().ref(`/userTasks/${uid}`);

  if(sortType === 'date') {
    ref2.off(); // end .on() trigger for 'priority' sorting once 'date' sorting is clicked
    dispatch({ type: RESET_TASKLIST }) // reset taskList, so we do not get duplicate keys
    ref1.on('child_added', (snapshot) => {
      dispatch({ type: READ_TASKS_DATE, payload: snapshot.val() })
    })
  } else if(sortType === 'priority') {
      ref1.off(); // end .on() trigger for 'date' sorting once 'priority' sorting is clicked
      dispatch({ type: RESET_TASKLIST })
      ref2.orderByChild('priority').on('child_added', (snapshot) => {
        dispatch({ type: READ_TASKS_PRIORITY, payload: snapshot.val()})
      }); 
  }
}

export const deleteTask = (uid, taskId) => (dispatch) => {
  console.log(uid, taskId);
  firebase.database().ref(`/userTasks/${uid}/${taskId}`).remove().then(() => {
    dispatch({type: DELETE_TASK, payload: taskId});
  });
}

export const editTask = (uid, taskId) => (dispatch) => {
  dispatch({type: EDIT_TASK, payload: taskId})
}

export const saveEdit = (uid, task, callback) => (dispatch) => {
  firebase.database().ref(`userTasks/${uid}/${task.taskId}`).update({
     description: task.description
  }).then(() => {
    dispatch({ type: SAVE_EDIT, payload: { description: task.description, 
                                           taskId: task.taskId, 
                                           complete: task.complete, 
                                           priority: task.priority } 

    });
      // set internal isEditing state to false
      callback();
  })
}

export const completeTask = (uid, taskId) => (dispatch) => {
  firebase.database().ref(`userTasks/${uid}/${taskId}`).update({
    complete: true
  }).then(() => {
    dispatch({ type: COMPLETE_TASK, payload: taskId })
  })
}

export const uncompleteTask = (uid, taskId) => (dispatch) => {
  firebase.database().ref(`userTasks/${uid}/${taskId}`).update({
    complete: false
  }).then(() => {
    dispatch({ type: UNCOMPLETE_TASK, payload: taskId })
  })
}

export const toggleModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_MODAL });
}









