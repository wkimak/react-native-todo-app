const initialState = {
  username: '',
  uid: ''
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_INFO':
      return {
        ...state,
        username: action.payload.username,
        uid: action.payload.uid
      }

    default:
      return state;
  }
}

export default { authReducer }