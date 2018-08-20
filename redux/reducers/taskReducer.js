const initialState = {
  taskList: []
}

// handle all Actions related to tasks
const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    // reset Tasklist, so everytime a user sorts tasks, taskList will start from clean slate
    case 'RESET_TASKLIST':
      return {
        ...state,
        taskList: []
      }
   
    // This case is called continously, as the firebase .on method is triggered for every task added
    case 'READ_TASKS':
      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      }

    case 'DELETE_TASK':
      for(let i = 0; i < state.taskList.length; i++) {
        if(state.taskList[i].taskId === action.payload) {
          return {
            ...state,
            // instead of mutating, slice array in to two, join together without deleted task
            taskList: [
              ...state.taskList.slice(0, i),
              ...state.taskList.slice(i + 1)
            ]
          }
        }
      }
    
    case 'SAVE_EDIT':
      return {
        ...state,
        // map through taskList, if task id equals payload id, update task object
        taskList: state.taskList.map((task, i) => {
            if(action.payload.taskId === task.taskId) {
              task = { description: action.payload.description, 
                       taskId: action.payload.taskId, 
                       complete: action.payload.complete,
                       priority: action.payload.priority
                      }
            }
            return task;
        })
      }
     
     case 'COMPLETE_TASK':
       return {
         ...state,
         // just update the complete key if ids match
         taskList: state.taskList.map((task) => {
           if(action.payload === task.taskId) {
             task = { ...task, complete: true }
           }
           return task;
         })
       }

     case 'UNCOMPLETE_TASK':
       return {
        // Again, just update the complete key if ids match
        taskList: state.taskList.map((task) => {
          if(action.payload === task.taskId) {
            task = { ...task, complete: false }
          }
          return task;
        })
       }
      
    default:
      return state;
  }
}

export default { taskReducer };
