import "../styles/normalize.css";
import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

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
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
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
      atualizarCatidad={atualizarCatidad}
      eliminarProducto={eliminarProducto}
    />
  );
}

export default MyApp;
