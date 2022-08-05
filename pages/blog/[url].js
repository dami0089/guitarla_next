import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  return (
    <Layout pagina={entrada.titulo}>
      <main className="contenedor">
        <h1 className="heading">{entrada.titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            src={entrada.imagen.url}
            height={600}
            width={800}
            alt={`Imagen entrada ${entrada.titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>
              {formatearFecha(entrada.published_at)}
            </p>
            <p className={styles.texto}>{entrada.contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: {
      url: entrada.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada[0],
    },
  };
}

// export async function getServerSideProps({ query: { id } }) {
//   const url = `${process.env.API_URL}/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();
//   return {
//     props: {
//       entrada,
//     },
//   };
// }

export default EntradaBlog;
