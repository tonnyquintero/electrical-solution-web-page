import React from 'react'
import { FaShareAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import googlePlay from '../assets/google.png'
import styles from '../styles/PreFooter.module.css'

const PreFooter = () => {
  return (
    <div className={styles['container-preFooter']}>
      <div className={styles['descarga']}>
        <div className={styles['descarga-descarga']}>
          <h2>Descarga miplanilla App</h2>
          <Image src={googlePlay} alt='google-play'></Image>
          <div className={styles['descarga-redes']}>
            <FaShareAlt color='#ffa773' size='1.2em' />
            <h2>  Redes Sociales</h2>
          </div>
          <div className={styles['descarga-socials']}>
            <FaSquareFacebook size='2em' color='white' />
            <FaSquareTwitter  size='2em' color='white' />
            <FaYoutube size='2em' color='white' />
          </div>
        </div>
        <div className={styles['descarga-centro']}>
          <h2>Centro de ayuda</h2>
          <p>Noticias</p>
          <p>Preguntas Frecuentes</p>
          <p>Registro miplanilla.com</p>
          <p>Normativa PILA</p>
        </div>
        <div className={styles['descarga-noTitle']}>

        </div>
        <div className={styles['descarga-enlace']}>

        </div>
      </div>
      <div className={styles['contacto']}>
        <div className={styles['contacto-contacto']}>

        </div>
        <div className={styles['contacto-noTitle1']}>

        </div>
        <div className={styles['cotacto-noTitle2']}>

        </div>
      </div>
    </div>
  )
}

export default PreFooter