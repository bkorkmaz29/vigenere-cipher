import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const Buttons = ({handleEncrypt, handleDecrypt}) => {
    return (
        <Grid id="buttons" container direction="row" columnSpacing={2}>
          <Grid item xs={6}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleEncrypt}
            >
              Encrypt
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button color="utility" variant="contained" onClick={handleDecrypt}>
              Decrypt
            </Button>
          </Grid>
        </Grid>
    );
}

  export default Buttons