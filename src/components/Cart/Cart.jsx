import { Button } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "./Cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({ cart, deleteProductById, clearCartSwal, total }) => {
  return (
    <div>
      <div className={styles.cartContainer}>
        <div className={styles.containerItems}>
          {cart.map((item) => {
            return (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.img} alt="" />
                <div className={styles.cartItemInfo}>
                  <h2>{item.name}</h2>
                  <h2>US${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button variant="contained" onClick={() => deleteProductById(item.id)}>
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            );
          })}
        </div>
        <div className={styles.cartInfo}>
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: </h3>
          <h3>Precio total: US${total}</h3>
          <h3>Descuento: </h3>
          <h3>Precio final: </h3>
          {cart.length > 0 ? (
            <div className={styles.btnCart}>
              <Button variant="contained" onClick={() => Navigate("/checkout")}>
                Terminar la compra
              </Button>
              <Button variant="contained" onClick={clearCartSwal}>
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agregar productos</Button>
            </Link>
          )}

          <h1>El total del carrito es US${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
