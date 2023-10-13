import Dropdown from 'react-bootstrap/Dropdown';

const Ordenador = ({ onSubmit, paises }) => {
    const handleClick = (clave) => {
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