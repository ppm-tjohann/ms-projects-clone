import '../styles/globals.css'
import {CssBaseline, ThemeProvider} from '@mui/material'
import theme from '../lib/theme'

function MyApp({Component, pageProps}) {
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
