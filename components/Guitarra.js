import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Guitarras.module.css";

const Guitarra = ({ guitarra }) => {
  //   const {descripcion,imagen,nombre,precio,url}=guitarra
  return (
    <div className={styles.guitarra}>
      <Image
        layout="responsive"
        width={180}
        height={350}
        src={guitarra.imagen[0].url}
        alt={`Imagen Guitarra ${guitarra.nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{guitarra.nombre}</h3>
        <p className={styles.descripcion}>{guitarra.descripcion}</p>
        <p className={styles.precio}>$ {guitarra.precio}</p>
        <Link href={`/guitarras/${guitarra.url}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
