import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Box
      sx={{
        m: "auto",
        mt: "10vh",
        flexDirection: "column",
      }}
      height={500}
      width={450}
      display="flex"
      justifyItems="center"
      alignItems="center"
      border={2}
      p={3}
    >
      <Typography variant="h2">Vigenere Cipher</Typography>
      <Typography variant="h6">
        <br />
        <br />
        Created by Blaise de Vigenere in 16th Century,
        <br />a simple cipher that is moderately difficult for any unintended
        parties to decipher.
        <br />
        <br />
        The message is encrypted using a keyword,
        <br />
        which determines the encryption of each letter.
        <br />
        The outcome can be decrypted to the original message using the same
        keyword.
      </Typography>
      <Button
        sx={{
          m: "auto",
        }}
        color="secondary"
        variant="contained"
        component={Link}
        to="/"
      >
        {" "}
        Back
      </Button>
    </Box>
  );
}

export default About;
