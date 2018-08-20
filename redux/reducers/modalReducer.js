const initialState = {
  toggleModal: false
}

// toggle modal state, depending on whether header sort icon is clicked
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

export default { modalReducer };
