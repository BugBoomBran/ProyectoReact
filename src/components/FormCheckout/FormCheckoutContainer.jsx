import React from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      names: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      cardName: "",
      cardNumber: "",
      expirationDate: "",
      securityCode: "",
      identityCard: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      names: Yup.string().required("este campo es obligatorio").min(3, "el nombre debe tener al menos 3 caracteres").max(12, "El nombre no puede superar los 12 caracteres"),
      email: Yup.string().required("este campo es obligatorio").email("este campo debe ser un email"),
      phone: Yup.number().required("este campo es obligatorio"),
      password: Yup.string()
        .required("este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, { message: "la contraseña debe tener al menos 1 mayuscula, 1 minuscula, 1 numero, entre 6 y 15 caracteres" }),
      confirmPassword: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("password")], "las contraseñas no coinciden"),
      cardName: Yup.string().min(3, "el nombre debe tener al menos 3 caracteres").max(12, "El nombre no puede superar los 12 caracteres"),
      // cardName no es requerido por si el cliente quiere pagar cuando lo retire
      cardNumber: Yup.number().required("este campo es obligatorio"),
      expirationDate: Yup.number().required("este campo es obligatorio").min(4, "este campo debe tener 4 caracteres").max(4, "este campo debe tener 4 caracteres"),
      securityCode: Yup.number().required("este campo es obligatorio").min(3, "este campo debe tener 3 caracteres").max(3, "este campo debe tener 3 caracteres"),
      identityCard: Yup.number().required("este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <FormCheckout values={values} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
    </div>
  );
};

export default FormCheckoutContainer;
