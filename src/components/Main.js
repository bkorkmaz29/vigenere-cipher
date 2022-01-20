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
          x += "A".charCodeAt(0);
          encryptedText += String.fromCharCode(x);
        }

        setInput(encryptedText);  
      }
    
      const handleDecrypt = () => {
        let inputText = "";
      
        for (let i = 0 ; i < input.length ; i++)
        {
            let x = (input[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
            x += 'A'.charCodeAt(0);
            inputText += String.fromCharCode(x);
        }

        setInput(inputText);
      }
    
      const generateKey = (keyword) => {
      setKeyword(keyword);

      keyword = keyword.split("");

      if (input.length === keyword.length) setKey(keyword.join(""));
      else {
        let x= keyword.length;
        for (let i = 0; i < input.length - x; i++) {
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
          flexDirection: "column",
          height: "70vh",
        }}
        justifyContent="center"
        alignItems="center"
        width={700}
      >
        <TextField
          multiline
          fullWidth
          rows={15}
          variant="outlined"
          value={input}
          label="Text"
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          inputProps={{ maxLength: 199 }}
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          margin="auto"
          p={2}
          spacing={2}
          width={500}
        >
          <Grid item p={1}>
            <TextField
              variant="outlined"
              label="Keyword"
              value={keyword}
              onChange={(e) => generateKey(e.target.value.toUpperCase())}
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item p={1}>
            <Buttons
              handleEncrypt={handleEncrypt}
              handleDecrypt={handleDecrypt}
            />
          </Grid>
        </Grid>
        <Footer />
      </Box>
    );
}

export default Main
