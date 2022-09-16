import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  body: '#16171b',
  text: '#fcfdfd'
}

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 1rem;
}

html, body, #__next {
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${darkTheme.body};
  color: ${darkTheme.text}
}
`

export default GlobalStyles
