import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import './App.css'
import Header from './components/Header';
import Buscador from './components/Buscador';
import Ordenador from './components/Ordenador';
import MiApi from './components/MiApi';

function App() {
  return (

    <Container id='main'>
      <Container id='cabecera' fluid><Header titulo='Paises' /></Container>
      <Container fluid id='buscador'><Buscador text='Buscar un pais' /></Container>

      <Container id='ordenador'><Ordenador text='Filtrar por Región' /></Container>
      <Container id='resultados' >
        <MiApi text="la" />
      </Container>
    </Container>

  )
}

export default App
