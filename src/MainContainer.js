import React from 'react'
import MainState from './mainState'
import List from './List'

function MainContainer() {
  return (
    <div>
      <MainState>
        <List />
      </MainState>
    </div>
  )
}

export default MainContainer
