import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import React from 'react';



export default function App() {
  
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Header />
      <SideBar />
      <Router>
        <Main/>
      </Router>
    </CssVarsProvider>
  );
}
