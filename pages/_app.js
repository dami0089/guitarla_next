import "../styles/normalize.css";
import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  const [compra, setCompra] = useState({});

  // useEffect(() => {
  //   console.log(compra);
  // }, [compra]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    if (carritoLS.length !== 0) {
      setCarrito(carritoLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
    if (carrito.some((articulo) => articulo._id === producto._id)) {
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo._id === producto._id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      setCarrito([...carrito, producto]);
      // console.log("Se agrego carrito actualizado" + carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
      // console.log("Se entro en el else de ...carrito,producto" + carrito);
    }
  };

  const atualizarCatidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo._id === producto._id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(
      (articulo) => articulo._id !== id
    );
    setCarrito(carritoActualizado);
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      setCarrito={setCarrito}
      compra={compra}
      setCompra={setCompra}
      atualizarCatidad={atualizarCatidad}
      eliminarProducto={eliminarProducto}
    />
  );
}

export default MyApp;
