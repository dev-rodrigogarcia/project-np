import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'sensedia-ui-kit'
import * as serviceWorker from './serviceWorker'
import GlobalStyles from './Theme/globalStyle'

import { themeSettings } from './Theme/themeSettings'
import App from './App'

ReactDOM.render(
   <ThemeProvider theme={themeSettings}>
      <App />
      <GlobalStyles />
   </ThemeProvider>,
   document.getElementById('root'),
)

serviceWorker.unregister()
