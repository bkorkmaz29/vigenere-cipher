import './App.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

import { useState } from 'react';

const theme = createTheme({
  typography: {
    "fontFamily": [
      'Righteous', 'cursive' ].join(','),
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   },
  palette: {
    primary: {
      main: '#493333',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3f50b5',
      contrastText: '#fff',
    },
    utility: {
      main: '#f44336',
      contrastText: '#fff',
    },
  },
});

function App() {

 

  


  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
