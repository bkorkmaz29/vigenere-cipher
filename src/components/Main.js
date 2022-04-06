import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Header from "./Header";

import { useState } from "react";

function Main() {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [key, setKey] = useState("");

  const handleEncrypt = () => {
    let encryptedText = "";

    if (keyword.length < 2)
      return alert("Keyword needs to be at least 2 characters long");

    for (let i = 0; i < input.length; i++) {
      let x = (input[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
      x += "A".charCodeAt(0);
      encryptedText += String.fromCharCode(x);
    }

    setInput(encryptedText);
  };

  const handleDecrypt = () => {
    let inputText = "";

    for (let i = 0; i < input.length; i++) {
      let x = (input[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
      x += "A".charCodeAt(0);
      inputText += String.fromCharCode(x);
    }

    setInput(inputText);
  };

  const generateKey = (keyword) => {
    setKeyword(keyword);

    keyword = keyword.split("");

    if (input.length === keyword.length) setKey(keyword.join(""));
    else {
      let x = keyword.length;
      for (let i = 0; i < input.length - x; i++) {
        keyword.push(keyword[i % keyword.length]);
      }
    }

    setKey(keyword.join(""));
  };

  return (
    <Grid container direction="column" spacing={7} width={700} margin="auto">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <TextField
          multiline
          fullWidth
          rows={12}
          variant="outlined"
          value={input}
          label="Text"
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          inputProps={{ maxLength: 199 }}
        />
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        margin="auto"
        p={2}
        spacing={2}
        width={600}
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
    </Grid>
  );
}

export default Main;
