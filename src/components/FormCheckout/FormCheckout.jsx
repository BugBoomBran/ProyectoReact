import React from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";

const FormCheckout = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <TextField id="outlined-basic" label="Names" name="Names" variant="outlined" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TextField id="outlined-basic" label="Email" name="Email" variant="outlined" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TextField id="outlined-basic" label="Password" name="Password" variant="outlined" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TextField id="outlined-basic" label="Phone" name="Phone" variant="outlined" fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Button variant="contained">Comprar</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
