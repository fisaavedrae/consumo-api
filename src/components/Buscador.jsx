import React from 'react'
import { useState } from 'react';

const Buscador = ({ onSubmit, paises }) => {
    console.log("render buscador")
    const [buscador, setBuscador] = useState("")
    const handleChange = (e) => {
        onSubmit(buscador, paises)
        console.log("render handleChange")
    }
    return (
        <>
            <input type="text" placeholder="Buscar un pais" onKeyUp={handleChange} value={buscador} onChange={(e) => setBuscador(e.target.value)} />
            <p>Resultados: {paises.length} pais(es)</p>
        </>
    )
}
export default Buscador