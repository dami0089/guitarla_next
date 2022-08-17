import React from "react";

const generaorden = (nombre, email, direccion, telefono, carrito) => {
  //   console.log("checkout generaorden" + checkout);

  return {
    buyer: {
      nombre: nombre,
      email: email,
      direccion: direccion,
      telefono: telefono,
    },
    items: {
      nombreProd: carrito,
      cantidad: carrito,
      total: carrito,
      fecha: new Date().toLocaleString(),
    },
  };
};

export default generaorden;
