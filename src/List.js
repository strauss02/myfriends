import React, { useContext, useState, useEffect } from 'react'
import mainContext from './mainContext'
import FriendListItem from './FriendListItem'
import { db } from './drillDB'

function List() {
  const { state, dispatch } = useContext(mainContext)

  function onResetClick() {
    dispatch({
      type: 'INITIALIZE_STATE',
    })
  }

  function handleAddClick(e) {
    return dispatch({
      payload: {
        friendAge: ageInputValue,
        friendName: nameInputValue,
        friendId: nameInputValue + ageInputValue,
      },
      type: 'ADD_FRIEND',
    })
  }

  function initializeList() {
    db.forEach((friend) => {
      dispatch({
        payload: {
          friendAge: friend.friendAge,
          friendName: friend.friendName,
          friendId: friend.friendName + friend.friendAge,
        },
        type: 'ADD_FRIEND',
      })
    })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(initializeList, [])

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
      <div>
        <button onClick={onResetClick}> reset list </button>
      </div>
      <ul>
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
