import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const MiApi = ({ setDatos, datos, setDatosdatosBack }) => {
    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        try {
            const url = "https://restcountries.com/v3.1/all";
            const response = await fetch(url);
            const data = await response.json();
            setDatos(ordenar(data));
            setDatosdatosBack(ordenar(data));
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    };

    const ordenar = (data) => {
        const resultadoBusqueda = [...data];
        resultadoBusqueda.sort((a, b) => {
            if (a.translations.spa.common < b.translations.spa.common) {
                return -1;
            }
            if (a.translations.spa.common > b.translations.spa.common) {
                return 1;
            }
            return 0;
        });
        return resultadoBusqueda;
    }
    return (
        <>
            {datos.map((pais) => (
                <Card key={pais.translations.spa.common}>
                    <Card.Img variant="top" src={pais.flags.png} alt={pais.translations.spa.common} />
                    <Card.Body>
                        <Card.Title>{pais.translations.spa.common}</Card.Title>
                        <Card.Text>
                            <p><b>Población: </b>{Intl.NumberFormat('es-CL').format(pais.population)}</p>
                            <p><b>Región: </b>{pais.region}</p>
                            <p><b>Capital: </b>{pais.capital}</p>
                        </Card.Text>
                    </Card.Body>
                </Card >
            ))}
        </>
    )
}

export default MiApi