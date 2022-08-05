import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = ({ guitarra }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div>
            <Link href="/">
              <a>
                <Image
                  width={400}
                  height={100}
                  src="/img/logo.svg"
                  alt="Imagen logo"
                />
              </a>
            </Link>
          </div>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros ">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image
                  layout="fixed"
                  width={30}
                  height={25}
                  src="/img/carrito.png"
                  alt="carrito"
                />
              </a>
            </Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
            <h2>{guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>$ {guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>Ver precio</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <picture>
          <img
            className={styles.guitarra}
            src="/img/header_guitarra.png"
            alt="Imagen geader guitarra"
          />
        </picture>
      )}
    </header>
  );
};

export default Header;
