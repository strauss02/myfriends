import { useContext, useRef, useState } from 'react'
import mainContext from './mainContext'

function FriendListItem({ friendAge, friendName, friendId }) {
  const [editMode, setEditMode] = useState(false)

  const { dispatch } = useContext(mainContext)

  const editNameInput = useRef(null)
  const editAgeInput = useRef(null)

  function handleEditclick(e) {
    setEditMode(true)
  }

  function handleRemoveclick(e) {
    dispatch({
      type: 'REMOVE_FRIEND',
      payload: {
        friendId: friendId,
      },
    })
  }

  function handleSaveFriendClick(e) {
    console.log(editNameInput.current.value, editAgeInput.current.value)
    dispatch({
      type: 'UPDATE_FRIEND',
      payload: {
        friendId,
        friendAge: editAgeInput.current.value,
        friendName: editNameInput.current.value,
      },
    })
    setEditMode(false)
  }

  if (editMode) {
    return (
      <li>
        friend name : <input ref={editNameInput} name="edit-friend-input" />
        age: <input ref={editAgeInput} name="edit-age-input" />
        <button onClick={handleSaveFriendClick}>save friend</button>
      </li>
    )
  } else {
    return (
      <li>
        friend name : {friendName}, age: {friendAge}
        <div>
          <button onClick={handleEditclick}>edit friend</button>
          <button onClick={handleRemoveclick}>remove friend...</button>
        </div>
      </li>
    )
  }
}

export default FriendListItem
