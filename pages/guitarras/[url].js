import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitarras.module.css";

const Producto = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const { descripcion, imagen, nombre, precio, id } = guitarra[0];
  // console.log(nombre);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }
    //agregar al carrito
    const guitarraSeleccionada = {
      id,
      imagen: imagen[0].url,
      nombre,
      precio,
      cantidad,
    };
    agregarCarrito(guitarraSeleccionada);
    alert(`La guitarra ${nombre} fue agregado correctamente`);
  };
  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={imagen[0].url}
          alt={`Imagen Guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>$ {precio}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad: </label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();
  return {
    props: {
      guitarra,
    },
  };
}

export default Producto;
