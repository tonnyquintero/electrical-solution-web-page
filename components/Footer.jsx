import React from 'react'
import Image from 'next/image'
import cenet from '../assets/logo-cenet.png'
import comefalco from '../assets/logo-comfenalco.png'
import iso from '../assets/logo-iso.png'
import compensar from '../assets/logo-ucompensar.png'
import vigilado from '../assets/logo-vigilado.png'
import styles from '../styles/Footer.module.css'



const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-logos']}>
        <Image src={compensar} height={50} width={220} alt='logo4'></Image>
        <Image src={cenet} height={80} width={200}  alt='logo1'></Image>
        <Image src={comefalco} height={50} width={140}  alt='logo2'></Image>
        <Image src={vigilado} height={50} width={220}  alt='logo5'></Image>
        <Image src={iso} height={100} width={240}  alt='logo3'></Image>
      </div>
     <h3 className={styles['footer-text']} >2024 miplanilla.com</h3>  
    </div>
  )
}

export default Footer