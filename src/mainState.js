import React, { useReducer } from 'react'
import mainContext from './mainContext'
import mainReducer from './mainReducer'

function MainState(props) {
  const [state, dispatch] = useReducer(mainReducer, [])

  return (
    <mainContext.Provider value={{ state, dispatch }}>
      {props.children}
    </mainContext.Provider>
  )
}

export default MainState
