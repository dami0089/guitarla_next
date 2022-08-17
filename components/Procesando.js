/* eslint-disable react-hooks/exhaustive-deps */
import { addDoc, collection } from "firebase/firestore";
import { React, useEffect, useState } from "react";
import { db } from "../firebase/config";
import style from "../styles/Procesando.module.css";
import generaorden from "../utils/generaorden";

const Procesando = ({
  //   nombrePersona,
  //   email,
  //   direccion,
  //   telefono,

  //   setCompra,
  compra,
  setCarrito,
}) => {
  const { carrito, direccion, email, nombre, telefono } = compra;
  const [muestra, setMuestra] = useState(false);
  const [id, setId] = useState("");

  const confirmacionOrden = async () => {
    const orden = generaorden(nombre, email, direccion, telefono, carrito);

    const docRef = await addDoc(collection(db, "ordenes"), orden);
    console.log("Document written with ID: ", docRef.id);
    setId(docRef.id);
    setMuestra(true);
  };

  return (
    <div className={style.procesando}>
      {!muestra ? (
        <div>
          <h1>Ya falta menos</h1>
          <p>
            Hola <span>{nombre}</span>, muchas gracias por realizar tu compra.
            Pronto la estaremos procesando y enviandola a la direccion{" "}
            <span>{direccion}</span>. Cualquier inconveniente que nos surja te
            contactaremos por mail a <span>{email}</span> o por telefono a{" "}
            <span>{telefono}</span>. Si alguno de estos datos es incorrecto, por
            favor comunicate con nosotros a la brevedad.
          </p>
          <button className={style.proceso} onClick={confirmacionOrden}>
            Confirma que los datos son correctos
          </button>
        </div>
      ) : (
        <h1 className={style.gracias}>
          Muchas gracias por tu pedido. Tu orden quedo registrada bajo el id{" "}
          <span>{id}</span>
        </h1>
      )}
    </div>
  );
};

export default Procesando;
