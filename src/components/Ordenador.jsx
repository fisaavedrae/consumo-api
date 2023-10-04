
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

import React from 'react'


const Ordenador = ({ text }) => {
    return (

        <Dropdown >
            <Dropdown.Toggle variant="light" id="dropdown-ordenador">
                Ordenar por...
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Nombre</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Región</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Población</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    )
}


export default Ordenador