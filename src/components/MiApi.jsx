import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const MiApi = ({ text }) => {
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        consultarApi();
    }, []);
    const consultarApi = async () => {
        try {
            const url = "https://restcountries.com/v3.1/all";
            const response = await fetch(url);
            const data = await response.json();
            setPaises(data);
            console.log(paises)
        }

        catch (error) {
            console.error(error);
            throw error;
        }
    };

    return (
        <>
            {paises.map((pais) => (
                <Card >
                    <Card.Img variant="top" src={pais.flags.png} />
                    <Card.Body>
                        <Card.Title>{pais.translations.spa.common}</Card.Title>
                        <Card.Text>
                            <p><b>Población:</b>{pais.population}</p>
                            <p><b>Región:</b>{pais.region}</p>
                            <p><b>Capital:</b>{pais.capital}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}


export default MiApi