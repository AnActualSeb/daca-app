import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import RadioButtonsGroup from "./RadioButtonsGroup";


function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your address(es)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please enter your current mailing address
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            id="careName"
            name="careName"
            label="In care of name (if any)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Street number and name"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>

        <Grid item xs={12}>
          <RadioButtonsGroup />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="city"
            name="city"
            label="City or town"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField id="state" name="state" label="State" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;