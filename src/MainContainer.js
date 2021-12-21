import React from 'react'
import MainState from './mainState'
import List from './List'
import { GlobalStyles } from './GlobalStyles.style'

function MainContainer() {
  return (
    <div>
      <GlobalStyles />
      <MainState>
        <List />
      </MainState>
    </div>
  )
}

export default MainContainer
