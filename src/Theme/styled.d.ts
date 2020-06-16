import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: {
         primary: string
         primaryHover: string
         primaryActive: string

         secondary: string
         secondaryActive: string
         secondaryDisabled: string

         grayDark: string
         grayMedium: string
         grayMediumLight: string
         grayLight: string
         white: string

         gradient: string

         layerBase: string
         layerSecond: string
         layerThird: string
         layerFourth: string
         layerBorder: string

         critical: string
         warning: string
         success: string
      }

      typography: {
         fontFamily: string
      }
      zIndex: {
         dropdown: number
         sticky: number
         fixed: number
         sideBar: number
         modal: number
         popover: number
      }
   }
}
