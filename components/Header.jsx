import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles['container']}>
        <div className={styles['left']}>
        <Image src={logo} alt='logo'></Image>
        <div>
        <h1 className={styles['InitialText']}>Portal empresas</h1>
        <h3 className={styles['second-text']}>Independientes</h3>
        </div>
        </div>
        <div >
            <div className={styles['right']}>
            <div className={styles['right-text']}>
              <Link href="/"><h1>Nosotros</h1></Link>
              <Link href="/"><h1>Noticias</h1></Link>
              <Link href="/"><h1>Contacto</h1></Link>
            </div>
            <Link href="/"><h1 className={styles['headerButton1']}>Centro de Ayuda</h1></Link>
            <Link href="/"><h1 className={styles['headerButton2']}>Registro</h1></Link>
            </div>
        </div>
    </div>
  )
}

export default Header