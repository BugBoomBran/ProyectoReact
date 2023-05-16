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
            <TextField id="outlined-basic" label="Email" name="email" variant="outlined" fullWidth onChange={handleChange} error={errors.email ? true : false} helperText={errors.email} />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField id="outlined-basic" label="Phone" name="phone" variant="outlined" fullWidth onChange={handleChange} error={errors.phone ? true : false} helperText={errors.phone} />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField id="outlined-basic" label="Password" name="password" variant="outlined" fullWidth onChange={handleChange} error={errors.password ? true : false} helperText={errors.password} />
          </Grid>
          {values.password.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField id="outlined-basic" label="Confirm Password" name="confirmPassword" variant="outlined" fullWidth onChange={handleChange} error={errors.confirmPassword ? true : false} helperText={errors.confirmPassword} />
            </Grid>
          )}
          <Grid item xs={11} sm={7}>
            <TextField id="outlined-basic" label="Card Name" name="cardName" variant="outlined" fullWidth onChange={handleChange} error={errors.cardName ? true : false} helperText={errors.cardName} />
          </Grid>
          {values.cardName.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField id="outlined-basic" label="Card Number" name="cardNumber" variant="outlined" fullWidth onChange={handleChange} error={errors.cardNumber ? true : false} helperText={errors.cardNumber} />
            </Grid>
          )}
          {values.cardName.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField id="outlined-basic" label="Expiration Date" name="expirationDate" variant="outlined" fullWidth onChange={handleChange} error={errors.expirationDate ? true : false} helperText={errors.expirationDate} />
            </Grid>
          )}
          {values.cardName.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField id="outlined-basic" label="Security Code" name="securityCode" variant="outlined" fullWidth onChange={handleChange} error={errors.securityCode ? true : false} helperText={errors.securityCode} />
            </Grid>
          )}
          {values.cardName.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField id="outlined-basic" label="Identity Card" name="identityCard" variant="outlined" fullWidth onChange={handleChange} error={errors.identityCard ? true : false} helperText={errors.identityCard} />
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
