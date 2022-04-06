import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Footer() {
  return (
    <Button
      component={Link}
      to="/About"
      variant="text"
      color="black"
      sx={{ marginTop: "20px" }}
    >
      What is the Vigenere Cipher?
    </Button>
  );
}

export default Footer;
