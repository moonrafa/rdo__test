import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Home.css'

function Home() {
  return (
    <div className="home d-flex  justify-content-center  pt-5">
      <div className="card_one">
        <Card style={{ width: '18rem', height: '10rem' }}>
          <Card.Body>
            <Card.Title>Primeira questão</Card.Title>
            <Card.Text>Converter números </Card.Text>
            <Button variant="dark">
              <a href="/first">Abrir</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="card_two px-2">
        <Card style={{ width: '18rem', height: '10rem' }}>
          <Card.Body>
            <Card.Title>Segunda questão</Card.Title>
            <Card.Text>Jogo da vida</Card.Text>
            <Button variant="dark">
              <a href="/second">Abrir</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="card_three">
        <Card style={{ width: '18rem', height: '10rem' }}>
          <Card.Body>
            <Card.Title>Terceira questão</Card.Title>
            <Card.Text>Calculadora de um restaurante</Card.Text>
            <Button variant="dark">
              <a href="/third">Abrir</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <p className="copy">
        {' '}
        Made by Rafaelly Rodrigues -{' '}
        <a href="https://github.com/moonrafa"> @moonrafa</a>{' '}
      </p>
    </div>
  )
}

export default Home
