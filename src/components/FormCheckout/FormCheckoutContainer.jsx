import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import Swal from "sweetalert2";

const FormCheckoutContainer = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = totalPrice();

    let dataOrder = {
      buter: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(dataBase, "orders");
    addDoc(orderCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(dataBase, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      names: "",
      phone: "",
      email: "",
      confirmEmail: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      names: Yup.string().required("este campo es obligatorio").min(3, "el nombre debe tener al menos 3 caracteres").max(12, "El nombre no puede superar los 12 caracteres"),
      phone: Yup.number().required("este campo es obligatorio"),
      email: Yup.string().required("este campo es obligatorio").email("este campo debe ser un email"),
      confirmEmail: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("email")], "los email no coinciden"),
    }),
    validateOnChange: false,
  });

  const handleOrderAlert = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `¡Felicidades! Su compra fue realizada con éxito. Su número de pedido es <span style="font-weight: bold; color: black;" >${orderId}</span> , guárdelo para seguir su compra.`,
      showConfirmButton: true,
      color: "#297ea6",
    });
  };

  return <div>{orderId ? <div>{handleOrderAlert()}</div> : <FormCheckout values={values} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />}</div>;
};

export default FormCheckoutContainer;
