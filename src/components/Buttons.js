import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Buttons = ({ handleEncrypt, handleDecrypt }) => {
  return (
    <Grid
      container
      direction="row"
      columnSpacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Button color="secondary" variant="contained" onClick={handleEncrypt}>
          Encrypt
        </Button>
      </Grid>
      <Grid item>
        <Button color="utility" variant="contained" onClick={handleDecrypt}>
          Decrypt
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buttons;
