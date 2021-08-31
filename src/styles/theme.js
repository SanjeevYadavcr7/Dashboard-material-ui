import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary:{
        main: '#333996',
        light: '#3c44b126'
      },
      secondary: {
        main: '#f83245',
        light: '#f8324526'
      },
      background: {
        default: '#f4f5fd'
      }
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    }
  })

export default theme;