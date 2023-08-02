import './App.css'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styled/styled'
import Summary from './components/Summary';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Summary />
    </ThemeProvider>
  )
}

export default App
