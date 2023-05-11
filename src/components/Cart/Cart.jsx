import { Button } from "@mui/material";
import React from "react";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <h4>US${item.price}</h4>
            <h4>Cantidad:{item.quantity}</h4>
            <Button variant="contained" onClick={() => deleteProductById(item.id)}>
              Elimnar
            </Button>
          </div>
        );
      })}

      <Button onClick={clearCart} variant="contained">
        Vaciar carrito
      </Button>
      <h1>El total del carrito es US${total}</h1>
    </div>
  );
};

export default Cart;
