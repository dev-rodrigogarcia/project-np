import React from 'react'
import usePubSub from 'pubsub-js'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Theme/globalStyle'
import { themeSettings } from './Theme/themeSettings'

import Routes from './Routes'

import usePersistedState from './Hooks/usePersistedState'

import { Green, Colors } from './Theme/Colors'

const App = () => {
   const [theme, setTheme] = usePersistedState<Colors>('theme', Green)

   usePubSub.subscribe('ChangeTheme', (_: any, value: Colors) => {
      setTheme(value)
   })

   return (
      <ThemeProvider
         theme={{
            ...themeSettings,
            colors: { ...themeSettings.colors, ...theme },
         }}
      >
         <Routes />
         <GlobalStyles />
      </ThemeProvider>
   )
}
export default App
