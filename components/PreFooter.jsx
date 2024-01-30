import React from 'react'
import { FaShareAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import googlePlay from '../assets/google.png'
import miplanilla from '../assets/miplanilla.png'
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
          <p>Instructivos Independientes</p>
          <p>Instructivo Empresas</p>
          <p>Escuela Formativa</p>
          <p>Canales de Atención</p>
        </div>
        <div className={styles['descarga-enlace']}>
          <h2>Enlaces de Interés</h2>
          <p>Ministerio de Salud</p>
          <p>Protección de datos personales</p>
          <p>Superintendencia Financiera</p>
          <p>Seguridad de la Información</p>
        </div>
      </div>


      <div className={styles['contacto']}>
        <div className={styles['contacto-contacto']}>
          <h1 className={styles['contact-title']}>Contacto</h1>
          <Image src={miplanilla} alt='logo-planilla-footer' />
          <div className={styles['area-numero']}>
            <h3>Bogota: </h3>
            <p>60130777006</p>
          </div>
          <div className={styles['area-numero']}>
            <h3>Línea nacional: </h3>
            <p>01800011706</p>
          </div>
          <h2>Radicar PQRS</h2>
          <h2>Atención Personalizada</h2>
          <h2>Trabaja con nosotros</h2>
        </div>
        <div className={styles['contacto-noTitle1']}>
          <h2>Caja de Compensación</h2>
          <h2>Familia Compensar</h2>
          <p>Av. 68 #49A - 47, Bogotá D.C.</p>
          <div className={styles['area-numero']}>
            <h3>Bogota: </h3>
            <p>6013077001</p>
          </div>
          <div className={styles['area-numero']}>
            <h3>Línea nacional: </h3>
            <p>018000967070</p>
          </div>
          <h2>Comefalco Valle</h2>
          <div className={styles['area-numero']}>
            <h3>Cali: </h3>
            <p>6028862727</p>
          </div><div className={styles['area-numero']}>
            <h3>Nacional: </h3>
            <p>018000938585</p>
          </div>
        </div>
        <div className={styles['cotacto-noTitle2']}>
          <h2>Compensar Salud</h2>
          <div className={styles['area-numero']}>
            <h3>Bogotá: </h3>
            <p>6014441234</p>
          </div>
          <div className={styles['area-numero']}>
            <h3>Línea nacional: </h3>
            <p>018000915202</p>
          </div> 
          <p>Agencia de Empleo y Fomento</p>
          <p>Empresarial</p>
        </div>
      </div>
    </div>
  )
}

export default PreFooter