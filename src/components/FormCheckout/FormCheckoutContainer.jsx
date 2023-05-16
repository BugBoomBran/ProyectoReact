import React from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required(),
    }),
  });

  return (
    <div>
      <FormCheckout handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default FormCheckoutContainer;
