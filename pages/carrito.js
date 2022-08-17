/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useState, useEffect } from "react";
import Error from "../components/Error";
import Layout from "../components/Layout";
import Procesando from "../components/Procesando";
import styles from "../styles/Carrito.module.css";
import styles2 from "../styles/Procesando.module.css";

const Carrito = ({
  carrito,
  atualizarCatidad,
  eliminarProducto,
  compra,
  setCarrito,
  setCompra,
}) => {
  const [total, setTotal] = useState(0);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(false);
  const [datitos, setDatitos] = useState([]);

  const [ok, setOk] = useState(true);

  // console.log("Asi llega carrito", carrito);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, email, direccion, telefono].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //construyo el objeto de la compra

    // const precio = carrito.map((data) => data.precio);
    // const nombreProd = carrito.map((data) => data.nombre);
    // const cantidad = carrito.map((data) => data.cantidad);

    // const datos = [
    //   {
    //     precio,
    //     nombreProd,
    //     cantidad,
    //   },
    // ];

    // setDatitos([datos]);

    const nuevoPedido = {
      nombre,
      email,
      direccion,
      telefono,
      carrito,
    };

    setCompra(nuevoPedido);

    if (compra === "") {
      // console.log("hay parametros que llegaron mal");
    } else {
      setOk(false);
    }
  };

  return (
    <Layout pagina={"Carrito de compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.length === 0
            ? "Carrito Vacio"
            : ok
            ? carrito.map((producto) => (
                <div className={styles.producto} key={producto._id}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={500}
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>

                  <div>
                    <p className={styles.nombre}>
                      Producto: {producto.nombre}{" "}
                    </p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>

                      <select
                        value={producto.cantidad}
                        className={styles.select}
                        onChange={(e) =>
                          atualizarCatidad({
                            cantidad: e.target.value,
                            id: producto._id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      Subtotal: $ <span>{producto.precio}</span>{" "}
                    </p>
                    <p className={styles.subtotal}>
                      Total: ${" "}
                      <span>{producto.precio * producto.cantidad}</span>{" "}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.eliminar}
                    onClick={() => eliminarProducto(producto._id)}
                  >
                    x
                  </button>
                </div>
              ))
            : carrito.map((producto) => (
                <Procesando
                  compra={compra}
                  carrito={carrito}
                  setCarrito={setCarrito}
                  // nombrePersona={nombre}
                  // email={email}
                  // direccion={direccion}
                  // telefono={telefono}
                  // producto={producto}
                />
              ))}
        </div>
        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <form className={styles.centrado} onSubmit={handleSubmit}>
                {error && <Error>Todos los campos son obligatorios</Error>}

                <h3>Resumen del pedido</h3>
                <div className={styles.totales}>
                  <h4>Total a pagar:</h4>
                  <p> $ {total}</p>
                </div>
                <h4>Ingresa tus datos:</h4>
                <div className={styles.centrado}>
                  <input
                    className={styles.dataInput}
                    placeholder="Nombre y Apellido"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                  ></input>
                  <input
                    className={styles.dataInput}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  ></input>
                  <input
                    className={styles.dataInput}
                    placeholder="Direccion de entrega"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    type="text"
                  ></input>
                  <input
                    className={styles.dataInput}
                    placeholder="Telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    type="text"
                  ></input>
                </div>
                <input
                  className={styles.confirmar}
                  type="submit"
                  value="confirmar compra"
                />
              </form>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
