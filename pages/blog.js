import React from "react";
import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const Blog = ({ entradas }) => {
  return (
    <Layout pagina="Blog">
      <main className="contenedor"></main>
      <ListadoBlog entradas={entradas} />
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:asc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  console.log(entradas);
  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
