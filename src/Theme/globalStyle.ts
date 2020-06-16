import { createGlobalStyle } from 'styled-components'

import 'react-perfect-scrollbar/dist/css/styles.css'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');
  

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  } 

  *:focus {
    outline: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily};
    color: ${props => props.theme.colors.grayDark};
    font-weight: 300;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    text-rendering: optimizeLegibility;
  }
  @media (max-width: 991px){
    body, html {
        overflow-x: hidden;
    }
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary}
  }

  
  .row {
    > div{
        padding-right:10px;
        padding-left:10px;
      }
  }

  .ps__rail-y {
    z-index: 3;
  }

  body:last-child {
      overflow: hidden;
  }
`

export default GlobalStyle
