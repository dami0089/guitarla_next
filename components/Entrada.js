import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  return (
    <article>
      <Image
        priority="true"
        width={800}
        height={600}
        layout="responsive"
        src={entrada.imagen.url}
        alt={`Imagen blog ${entrada.titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{entrada.titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(entrada.published_at)}</p>
        <p className={styles.resumen}>{entrada.resumen}</p>
        <Link href={`/blog/${entrada.url}`}>
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
