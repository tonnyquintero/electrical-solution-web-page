import React from 'react'
import styles from '../styles/Search.module.css'

const Search = () => {
  return (
    <div className={styles['search-section']}>
      <h1>Bienvenido(a) al nuevo buscador de trabajadores independientes o extranjeros con PPT</h1>
      <h3>Sus busquedas ahora son más fáciles</h3>
      <h2>Ingrese el número de documento o Permiso Especial</h2>
      <input type="number" placeholder='Documento' />
      <button type='submit'>Buscar</button>
    </div>
  )
}

export default Search