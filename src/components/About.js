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
      height={450}
      width={400}
      display="flex"
      justifyItems="center"
      alignItems="center"
      border={1}
      p={3}
    >
      <Typography variant="h4">Vigenere Cipher</Typography>

      <Typography variant="h6">
        <br />
        <br />
        Created by Blaise de Vigenere, a simple cipher that is moderately
        difficult for any unintended parties to decipher. <br />
        <br />
        Your message will be encoded using a keyword, which will determine
        encryption of the each letter.
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
