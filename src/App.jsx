import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import './App.css'

function App() {
  return (

    <Container id='main'>
      <Container id='header' fluid><h4>Where ins the world?</h4></Container>
      <Container fluid id='buscador'>
        <input type="text" placeholder="Buscar un pais" />
        <button><i className="fa-solid fa-magnifying-glass"></i> </button>
      </Container>
      <Container id='filtro'>
        <Dropdown >
          <Dropdown.Toggle variant="light" id="dropdown-filtro">
            Filrar por Región
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
            <Dropdown.Item href="#/action-2">America</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Europa</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Oceania</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container id='resultados' >
        <Card >
          <Card.Img variant="top" src="https://flagcdn.com/w320/ax.png" />
          <Card.Body>
            <Card.Title>Åland Islands</Card.Title>
            <Card.Text>
              <p><b>Población:</b>28.875</p>
              <p><b>Región:</b>Europa</p>
              <p><b>Capital:</b>Mariehamn</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card >
          <Card.Img variant="top" src="https://flagcdn.com/w320/dz.png" />
          <Card.Body>
            <Card.Title>Algeria</Card.Title>
            <Card.Text>
              <p><b>Población:</b>44.700.000</p>
              <p><b>Región:</b>Africa</p>
              <p><b>Capital:</b>Algiers</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>

  )
}

export default App
