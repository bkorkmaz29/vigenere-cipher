import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Buttons from './Buttons';
import Footer from './Footer';

import { useState } from 'react';

function Main() {
    const [input, setInput] = useState("")
    const [keyword, setKeyword] = useState("")
    const [key, setKey] = useState("")


    const handleEncrypt = () => {
        let encryptedText="";
        if(keyword.length < 2)
          return alert("Keyword needs to be at least 2 characters long")
      
        for (let i = 0; i < input.length; i++)
        {
    
            let x = (input[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
      
            x += 'A'.charCodeAt(0);
      
            encryptedText+=String.fromCharCode(x);
        }
        setInput(encryptedText);
        
      }
    
      const handleDecrypt = () => {
        let inputText = "";
      
        for (let i = 0 ; i < input.length ; i++)
        {
            let x = (input[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
      
            x += 'A'.charCodeAt(0);
            inputText+=String.fromCharCode(x);
        }
        setInput(inputText);
        
      }
    
      const generateKey = (keyword) => {
      setKeyword(keyword);
      keyword = keyword.split("");
      if (input.length === keyword.length) setKey(keyword.join(""));
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
          mt: "100px",
          display: "flex",
          flexDirection: 'column',
          height: "70vh"
        }}
        justifyContent="center"
        alignItems="center"
        >
        <Grid
          id="textBox"
          container
          alignItems="center"
          justifyContent="center"
          width="100"
          padding="auto"
        >
          <Grid item xs={5}>
            <TextField
              multiline
              fullWidth
              rows={15}
              variant="outlined" 
              value={input}
              label="Text"
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
             variant="outlined" 
                label="Keyword"
                value={keyword}
                onChange={(e) => generateKey(e.target.value.toUpperCase())}
              />
            </Grid>
            <Buttons
              handleEncrypt={handleEncrypt}
              handleDecrypt={handleDecrypt}
            />
          </Grid>
        </Grid>  
        <Footer />
      </Box>
     
    )
}

export default Main
