import Container from 'react-bootstrap/Container';
import React from 'react'


const Buscador = ({ text }) => {
    return (
        <>
            <input type="text" placeholder="Buscar un pais" />
            <button><i className="fa-solid fa-magnifying-glass"></i> </button>
        </>
    )
}
export default Buscador