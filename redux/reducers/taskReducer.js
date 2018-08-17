

const initialState = {
  taskList: [],
  editIndex: null
}

const taskReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'ADD_TASK':
      return {
        ...state,
        taskList: [...state.taskList, action.payload]
      }

    case 'DELETE_TASK':
      return {
        ...state,
        taskList: [
          ...state.taskList.slice(0, action.payload),
          ...state.taskList.slice(action.payload + 1)
        ]
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
            if(action.payload.index === i) {
              task = action.payload.task
            }
            return task;
        }),
        editIndex: null
      }

    default:
      return state;
  }
}

export default { taskReducer };
