import React, { useContext, useState } from 'react'
import mainContext from './mainContext'
import FriendListItem from './FriendListItem'

function List() {
  const { state, dispatch } = useContext(mainContext)

  function handleAddClick(e) {
    return dispatch({
      payload: {
        friendAge: ageInputValue,
        friendName: nameInputValue,
        friendId: ageInputValue + nameInputValue,
      },
      type: 'ADD_FRIEND',
    })
  }

  function handleEditclick(e) {
    return dispatch({
      payload: {
        friendAge: ageInputValue,
        freindName: nameInputValue,
        friendId: crypto.randomBytes(8),
      },
      type: 'UPDATE_FRIEND',
    })
  }

  const [nameInputValue, setNameInputValue] = useState('')
  const [ageInputValue, setAgeInputValue] = useState('')

  console.log(state)
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h4> add a new friend </h4>
        <input
          onChange={(e) => setNameInputValue(e.target.value)}
          name="first-name"
          placeholder="friend name"
        />
        <input
          onChange={(e) => setAgeInputValue(e.target.value)}
          name="friend-age"
          placeholder="friend age"
        />
        <button onClick={handleAddClick}> Add friend</button>
      </div>

      <ul>
        <li>
          friend name : {'david'}, age: {'25'}
          <button onClick={handleEditclick}>edit friend</button>
        </li>
        {state.map((friendObj) => {
          return (
            <FriendListItem
              friendAge={friendObj.friendAge}
              friendName={friendObj.friendName}
              friendId={friendObj.friendName + friendObj.friendAge}
              key={friendObj.friendName + friendObj.friendAge + Math.random()}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default List
