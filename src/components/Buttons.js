import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const Buttons = ({toggle, handleEncrypt, handleDecrypt}) => {
  if (toggle) {
    return (
      <Grid item xs={6}>
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
            <Button
              disabled
              color="utility"
              variant="contained"
              onClick={handleDecrypt}
            >
              Decrypt
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  } else
    return (
      <Grid item xs={6}>
        <Grid id="buttons" container direction="row" columnSpacing={2}>
          <Grid item xs={6}>
            <Button
              disabled
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
      </Grid>
    );
}

  export default Buttons