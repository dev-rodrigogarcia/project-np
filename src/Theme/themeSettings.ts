import { DefaultTheme } from 'styled-components'

const themeSettings: DefaultTheme = {
   colors: {
      primary: '#52a37a',
      primaryHover: '#5CB889',
      primaryActive: '#44946B',

      secondary: '#78c8b3',
      secondaryActive: '#60b8a9',
      secondaryDisabled: '#8dd6c3',

      grayDark: '#3d3d3d',
      grayMedium: '#7b7b7b',
      grayMediumLight: '#b8b8b8',
      grayLight: '#e0e0e0',
      white: '#fff',

      gradient: 'linear-gradient(to top, #3bb78f 0%, #0bab64 74%);',

      layerBase: '#f8f8f8',
      layerSecond: '#f4f4f4',
      layerThird: '#f0f0f0',
      layerFourth: '#eee',
      layerBorder: '#d6d6d6',

      critical: '#f44336',
      warning: '#f5b04a',
      success: '#56ad45',
   },

   typography: {
      fontFamily: '"Roboto", sans-serif',
   },
   zIndex: {
      dropdown: 1000,
      sticky: 1020,
      fixed: 1030,
      sideBar: 1040,
      modal: 1050,
      popover: 1060,
   },
}

export { themeSettings }
