

const initialState = {
  taskList: [],
  editIndex: null,
  toggleModal: false
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'TOGGLE_MODAL':
      return {
        ...state,
        toggleModal: !state.toggleModal
      }
    default:
      return state;
  }
}


const taskReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'RESET_TASKLIST':
      return {
        ...state,
        taskList: []
      }

    case 'READ_TASKS':

      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      }

    case 'DELETE_TASK':
      for(let i = 0; i < state.taskList.length; i++) {
        if(state.taskList[i].id === action.payload) {
          return {
            ...state,
            taskList: [
              ...state.taskList.slice(0, i),
              ...state.taskList.slice(i + 1)
            ]
          }
        }
      }

    case 'EDIT_TASK':
      return {
        ...state,
        editIndex: action.payload
      }

    case 'SAVE_EDIT':
      return {
        ...state,
        taskList: state.taskList.map((task, i) => {
            if(action.payload.id === task.id) {
              task = { description: action.payload.description, id: action.payload.id, complete: action.payload.complete }
            }
            return task;
        }),
        editIndex: null
      }
     
     case 'COMPLETE_TASK':
       return {
         ...state,
         taskList: state.taskList.map((task) => {
           if(action.payload === task.id) {
             task = { ...task, complete: true }
           }
           return task;
         })
       }

     case 'UNCOMPLETE_TASK':
       return {
        taskList: state.taskList.map((task) => {
          if(action.payload === task.id) {
            task = { ...task, complete: false }
          }
          return task;
        })
       }
      
    default:
      return state;
  }
}

export default { taskReducer, modalReducer };
