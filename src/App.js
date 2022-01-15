import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useState } from 'react';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>



const theme = createTheme({
  palette: {
    primary: {
      main: '#03A062',
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

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [key, setKey] = useState("")
  const [toggle, setToggle] = useState(true)

  const handleEncrypt = () => {
    let cipher_text="";
  
    for (let i = 0; i < input.length; i++)
    {

        let x = (input[i].charCodeAt(0) + key[i].charCodeAt(0)) %26;
  
        x += 'A'.charCodeAt(0);
  
        cipher_text+=String.fromCharCode(x);
    }
    setOutput(cipher_text);
    setToggle(false)
  }

  const handleDecrypt = () => {
    let orig_text="";
  
    for (let i = 0 ; i < output.length ; i++)
    {
        let x = (output[i].charCodeAt(0) -
                    key[i].charCodeAt(0) + 26) %26;
  
        x += 'A'.charCodeAt(0);
        orig_text+=String.fromCharCode(x);
    }
    setInput(orig_text);
    setToggle(true)
    console.log(orig_text);
  }

const generateKey = (keyword) => {
  keyword = keyword.split("");
  if (input.length == keyword.length) setKey(keyword.join(""));
  else {
    let temp = keyword.length;
    for (let i = 0; i < input.length - temp; i++) {
      keyword.push(keyword[i % keyword.length]);
    }
  }
  setKey(keyword.join(""));

  console.log(keyword);
};



  return (
    
      <ThemeProvider theme={theme}>
      <AppBar>VigCip</AppBar>
     
      <Box
        sx={{
          m: "auto",
          padding: "10px",
          mt: "50px"
        }}
        justifyContent="center"
        alignItems="center"
      >
        
        <Grid
          id="textBoxes"
          container
          columnSpacing={8}
          alignItems="center"
          justifyContent="center"
          padding="auto"
        >
          
          <Grid item xs={5}>
          
            <TextField
              multiline
              fullWidth
              rows={10}
              id="outlined-basic"
              label="Input"
              value={input}
              onChange={(e) => setInput(e.target.value.toUpperCase())}
            />
          </Grid>      
          <Grid item container xs={2}  justifyContent="center"  >
            <ArrowForwardIosIcon fontSize="large"/>
          </Grid>
          <Grid item xs={5}>
            <TextField
              multiline
              rows={10}
              fullWidth
              id="outlined-basic"
              label="Output"
              variant="outlined"
              value={output}
            />
          </Grid>

          <Grid
            item
            container
            spacing={2}
            alignItems="center"
            direction="column"
            margin="auto"
            padding="5px"
          >
            <Grid item xs={12} alignItems="center" justifyContent="center">
              <TextField
                id="outlined-basic"
                label="Keyword"
                variant="outlined"
                onChange={(e) => generateKey(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xs={6}>
              <Grid id="buttons" container direction="row" columnSpacing={2}>
                <Grid item xs={6}>
                <Button color="secondary" variant="contained" onClick={handleEncrypt}>Encrypt</Button>    
                </Grid>
                <Grid item xs={6}>
                  <Button color="utility" variant="contained"  onClick={handleDecrypt}>Decrypt</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  
      </Box>

      <BottomNavigation showLabels>
    <BottomNavigationAction label="What is Vigenere Cipher?" sx={{fontSize: 24}}/>

</BottomNavigation>
</ThemeProvider>

  );
}

export default App;
