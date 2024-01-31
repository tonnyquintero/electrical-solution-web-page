'use client'
import React, { useState } from 'react'
import Modal from 'react-modal';
import styles from '../styles/Search.module.css'
import Link from 'next/link';
//import planilla from '../public/578540594-Pagos-Mi-Planilla-Enero.pdf'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};


const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setTimeout(() => {
      if (inputValue === '1533455484') {
        console.log('El valor es verdadero');
        // Realiza la acción verdadera aquí
        setIsActive(!isActive);
      } else {
        console.log('El valor es falso');
        // Realiza la acción falsa aquí
        setModalIsOpen(true);
      }
    }, 1000); // Espera 2 segundos (2000 milisegundos) antes de ejecutar la función
  };

  return (
    <>
      <div className={styles['search-section']}>
        <h1>Bienvenido(a) al nuevo buscador de trabajadores independientes o extranjeros con PPT</h1>
        <h3>Sus busquedas ahora son más fáciles</h3>
        <h2>Ingrese el número de autorización de la planilla</h2>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Documento' />
        <button type='submit' onClick={handleButtonClick}>Buscar</button>
        {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h2>El usuario(a) ingresado no se encuentra en nuestra base de datos <br></br> Asegurese de validar nuevamente el documento</h2>
        
        <button className={styles['modal-button']} onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
      </div>
      <div className={isActive ? styles.active : styles.inactive}>
        <div className={styles['prueba']}>
          <h1>Usuario</h1>
          <h2>Nombres y Apellidos: Anthony Richard Quintero Dugarte</h2>
          <h2>Número de PPT: 2857129</h2>
          <h2>Estado: Activo</h2>
          <h2>Último mes pagado: Enero 2024</h2>
          <a href='/asset/578540594-Pagos-Mi-Planilla-Enero.pdf' target='blank'  download='578540594-Pagos-Mi-Planilla-Enero.pdf'>
            <button>Descargar Planilla PILA</button>
          </a>
        </div>
      </div>
      
    </>
  )
}

export default Search