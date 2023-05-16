import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext);

  let total = totalPrice();
  const navigate = useNavigate();

  const clearCartSwal = () => {
    Swal.fire({
      title: "Se vaciará todo el carrito, estas seguro?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, conservar carrito`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("El carrito ha sido vaciado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se conservó el carrito", "", "info");
      }
    });
  };

  return (
    <div>
      <Cart navigate={navigate} total={total} cart={cart} clearCartSwal={clearCartSwal} deleteProductById={deleteProductById} />
    </div>
  );
};

export default CartContainer;
