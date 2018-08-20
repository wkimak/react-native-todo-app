const initialState = {
  uid: ''
}

// set userId to state so can be used throughout the app. 
// This uid is used to retrieve data (tasks) for the corresponding user in firebase
const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_INFO':
      return {
        ...state,
        uid: action.payload
      }

    default:
      return state;
  }
}

export default { authReducer }