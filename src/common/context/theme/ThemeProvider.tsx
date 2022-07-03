import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import theme from '../../config/theme'

import ThemeContext from './ThemeContext'
import useTheme from './useTheme'

interface IThemeProvider {
  children: JSX.Element,
}

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const context = useTheme()

  return (
    <ThemeContext.Provider value={context}>
      <MuiThemeProvider theme={theme()}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider