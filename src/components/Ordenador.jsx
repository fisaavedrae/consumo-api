
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';





const Ordenador = ({ onSubmit, paises }) => {
    const [ordenador, setOrdenador] = useState("")

    const handleClick = (clave) => {

        setOrdenador(clave)
        onSubmit(clave, paises)
    }
    return (

        <Dropdown >
            <Dropdown.Toggle variant="light" id="dropdown-ordenador">
                Ordenar por...
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item eventKey="Nombre" onClick={() => handleClick("asc")}>Nombre A-Z</Dropdown.Item>
                <Dropdown.Item eventKey="Region" onClick={() => handleClick("desc")}>Nombre Z-A</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    )
}


export default Ordenador