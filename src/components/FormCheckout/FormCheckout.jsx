import React from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} padding={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField id="outlined-basic" label="Names" name="names" variant="outlined" fullWidth onChange={handleChange} error={errors.names ? true : false} helperText={errors.names} />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField id="outlined-basic" label="Phone" name="phone" variant="outlined" fullWidth onChange={handleChange} error={errors.phone ? true : false} helperText={errors.phone} />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField id="outlined-basic" label="Email" name="email" variant="outlined" fullWidth onChange={handleChange} error={errors.email ? true : false} helperText={errors.email} />
          </Grid>
          {values.email.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField id="outlined-basic" label="Confirm Email" name="confirmEmail" variant="outlined" fullWidth onChange={handleChange} error={errors.confirmEmail ? true : false} helperText={errors.confirmEmail} />
            </Grid>
          )}
          <Grid item xs={7}>
            <Button type="submit" variant="contained">
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
