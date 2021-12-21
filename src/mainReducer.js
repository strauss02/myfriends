function mainReducer(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return [
        ...state,
        {
          friendName: action.payload.friendName,
          friendAge: action.payload.friendAge,
          friendId: action.payload.friendId,
        },
      ]
    case 'REMOVE_FRIEND':
      console.log(action)
      return [
        ...state.filter(
          (friend) => friend.friendId !== action.payload.friendId
        ),
      ]

    case 'UPDATE_FRIEND':
      const newState = state.map((friend) => {
        console.log(friend)
        console.log(action.payload)
        if (friend.friendId === action.payload.friendId) {
          return action.payload
        } else {
          console.log('yes')
          return friend
        }
      })
      return newState

    case 'INITIALIZE_STATE':
      return []

    default:
      return state
  }
}

export default mainReducer
