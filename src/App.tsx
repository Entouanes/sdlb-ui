import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import React from 'react';
import Attempt from './utils/Attempt';



export default function App() {
  
  const x = new Attempt('vmdl.9619.1');
  
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Header />
      <SideBar />
      <Main/>
    </CssVarsProvider>
  );
}
