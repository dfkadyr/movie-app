import { css } from 'styled-components'
import theme from './theme'

export default css`
  :root {
    font-size: ${theme.fonts.size};
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html,
  body,
  #app {
    height: 100%;
  }
  #app {
    overflow-x: hidden;
  }
  body {
    color: ${theme.colors.font};
    font-family: ${theme.fonts.main};
    font-weight: 400;
  }
  * {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
`
