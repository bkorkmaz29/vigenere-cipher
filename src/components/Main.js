import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Buttons from './Buttons';

import { useState } from 'react';

function Main() {
    const [input, setInput] = useState("")
    const [keyword, setKeyword] = useState("")
    const [key, setKey] = useState("")
    const [toggle, setToggle] = useState(true)

    const handleEncrypt = () => {
        let cipher_text="";
        if(keyword.length<2)
          return alert("Keyword needs to be at least 2 characters long")
      
        for (let i = 0; i < input.length; i++)
        {
    
            let x = (input[i].charCodeAt(0) + key[i].charCodeAt(0)) %26;
      
            x += 'A'.charCodeAt(0);
      
            cipher_text+=String.fromCharCode(x);
        }
        setInput(cipher_text);
        setToggle(false)
      }
    
      const handleDecrypt = () => {
        let orig_text = "";
      
        for (let i = 0 ; i < input.length ; i++)
        {
            let x = (input[i].charCodeAt(0) -
                        key[i].charCodeAt(0) + 26) %26;
      
            x += 'A'.charCodeAt(0);
            orig_text+=String.fromCharCode(x);
        }
        setInput(orig_text);
        setToggle(true)
      }
    
      const generateKey = (keyword) => {
      setKeyword(keyword);
      keyword = keyword.split("");
      if (input.length == keyword.length) setKey(keyword.join(""));
      else {
        let temp = keyword.length;
        for (let i = 0; i < input.length - temp; i++) {
          keyword.push(keyword[i % keyword.length]);
        }
      }
      setKey(keyword.join(""));
    
    };
    

    return (
        
        <Box
        sx={{
          m: "auto",
          padding: "10px",
          mt: "70px",
          display: "flex",
          flexDirection: 'column',
          height: "70vh"
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
              value={input}
              onChange={(e) => setInput(e.target.value.toUpperCase())}
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
            <Buttons
              toggle={toggle}
              handleEncrypt={handleEncrypt}
              handleDecrypt={handleDecrypt}
            />
          </Grid>
        </Grid>
       
      </Box>
     
    )
}

export default Main
