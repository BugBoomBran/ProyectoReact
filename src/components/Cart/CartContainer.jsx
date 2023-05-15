import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext);

  let total = totalPrice();

  const clearCartSwal = () => {
    Swal.fire({
      title: "Se vaciará todo el carrito, estas seguro?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, conservar carrito`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
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
      <Cart total={total} cart={cart} clearCartSwal={clearCartSwal} deleteProductById={deleteProductById} />
    </div>
  );
};

export default CartContainer;
