import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const theme = () =>
  createTheme({
    palette: {
      mode: 'light',
      text: {
        primary: grey[900],
        secondary: grey[700],
        disabled: grey[500],
      },
      background: {
        default: grey[200],
      },
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: ['Roboto', 'Lato', 'Sans Serif'] as never,
      fontSize: 16,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      h2: {
        fontFamily: 'Roboto',
        color: grey[700],
        fontSize: '3rem',
        fontWeight: 500,
      },
      h5: {
        fontFamily: 'Roboto',
        color: grey[700],
      },
      body1: {
        color: grey[800],
        fontSize: '2rem',
        fontWeight: 400,
      },
    },
  })

export default theme