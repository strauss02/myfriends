import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

body {

  
  background-color: pink;
  margin: 0px;
  padding: 0px;
  font-family:  'Courier New', Courier, monospace;
}

li {
  font-weight: bold;
  font-size: 1.2rem;
  border: black 5px solid;
  width: 50%;
  background-color: white;
  list-style: none;
  margin: auto;
  margin-top: 1rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  align-items: center;
  
  
}

button {
  font-family:  'Courier New', Courier, monospace;
  border: black 3px solid;
  background-color: white;
  margin: 0.2rem;
  
}

input {
  font-family:  'Courier New', Courier, monospace;
  border: black 2px solid;
  margin: 0.5rem 1.5rem;
}

h4 {
  font-style: italic;
  text-decoration: underline;
  background-color: white;
  font-size: 2rem;
  margin-bottom: -0.2rem;
}

`
