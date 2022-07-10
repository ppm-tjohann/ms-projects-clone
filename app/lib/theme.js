import {createTheme, responsiveFontSizes} from '@mui/material/styles'

let theme = createTheme({
                          palette: {mode: 'dark'}, components: {
    MuiButtonContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    }, MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
                        })

theme = responsiveFontSizes(theme)

export default theme