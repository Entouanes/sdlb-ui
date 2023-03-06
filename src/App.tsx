import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'



export default function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Header />
      <SideBar />
      <Main/>
    </CssVarsProvider>
  );
}
