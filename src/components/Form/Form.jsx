import { Button } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
  });

  //   console.log(userData);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
  };

  return (
    <div>
      <h2>Formulario</h2>

      <form onSubmit={envioDeFormulario}>
        <input type="text" placeholder="ingresa tu nombre" name="nombre" value={userData.nombre} onChange={handleChange} />
        <input type="text" placeholder="ingresa tu apellido" name="apellido" value={userData.apellido} onChange={handleChange} />
        <Button type="submit">Enviar</Button>
        <Button type="button">Cancelar</Button>
      </form>
    </div>
  );
};

export default Form;
