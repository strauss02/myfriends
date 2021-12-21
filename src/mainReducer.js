function mainReducer(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      console.log(action)
      return [
        ...state,
        {
          friendName: action.payload.friendName,
          friendAge: action.payload.friendAge,
        },
      ]
    case 'REMOVE_FRIEND':
      return [state.filter((friend) => friend.id === action.payload.friendId)]

    case 'UPDATE_FRIEND':
      return state.map((friend) =>
        friend.id === action.payload.friendId ? action.payload : friend
      )

    case 'INITIALIZE_STATE':
      return []

    default:
      return state
  }
}

export default mainReducer
