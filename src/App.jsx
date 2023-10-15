import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import './App.css'
import Header from './components/Header';
import Buscador from './components/Buscador';
import Ordenador from './components/Ordenador';
import MiApi from './components/MiApi';

function App() {
  const [datos, setDatos] = useState([])
  const [datosBack, setDatosdatosBack] = useState([])
  const [datosOrdenados, setDatosOrdenados] = useState("asc")

  const enviarFormularioBusqueda = (busqueda, paises) => {
    setDatos(datosBack)
    let textoBusqueda = ""
    const resultadoBusqueda = datosBack.filter(function (pais) {
      textoBusqueda = pais.translations.spa.common.toUpperCase()
      if (textoBusqueda.includes(busqueda.toUpperCase())) {
        return true
      }
    }, busqueda)
    setDatos([...resultadoBusqueda])
  }

  const enviarFormularioOrdenador = (busqueda, paises) => {
    console.log("orden : " + busqueda + " busqueda realizada: " + datosOrdenados)
    const resultadoOrden = [...datos];
    if (busqueda === "asc" && datosOrdenados != "asc") {
      resultadoOrden.reverse();
    }
    else if (busqueda === "desc" && datosOrdenados != "desc") {
      resultadoOrden.reverse();
    }
    setDatosOrdenados(busqueda)
    setDatos(resultadoOrden);
  }
  return (
    <Container id='main'>
      <Container id='cabecera' fluid><Header titulo='Paises' /></Container>
      <Container fluid id='buscador'><Buscador onSubmit={enviarFormularioBusqueda} paises={datos} /></Container>
      <Container id='ordenador'><Ordenador onSubmit={enviarFormularioOrdenador} paises={datos} /></Container>
      <Container id='resultados' >
        <MiApi setDatos={setDatos} datos={datos} setDatosdatosBack={setDatosdatosBack} />
      </Container>
    </Container>
  )
}

export default App
