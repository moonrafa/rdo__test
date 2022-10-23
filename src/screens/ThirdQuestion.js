import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Back from '../components/Back'

class ThirdQuestion extends React.Component {
  state = {
    total: '',
    service: 0.1,
    partySize: '',
    totalTip: '',
    tipPP: '',
    totalClient: ''
  }
  handleTotal = e => {
    this.setState({ total: e.target.value })
  }
  handleTotalClient = e => {
    this.setState({ totalClient: e.target.value })
  }
  handleParty = e => {
    this.setState({ partySize: e.target.value })
  }
  genTip = e => {
    e.preventDefault()
    let total = parseFloat(
      this.state.total * this.state.service + parseFloat(this.state.totalClient)
    ).toFixed(2)
    let totalTipPP = parseFloat(total / this.state.partySize).toFixed(2)
    this.setState({
      totalTip: total,
      tipPP: totalTipPP
    })
  }
  handleClient = e => {
    this.setState({ client: e.target.value })
  }

  render() {
    return (
      <div>
        <h1 className="text-center p-4 border-bottom m-2">
          Calculadora Restaurante
        </h1>

        <Form
          className="flex-column d-flex pt-2 w-50 m-auto align-items-center mt-2"
          onSubmit={this.genTip}
        >
          <Form.Control
            className="mt-2"
            value={this.state.client}
            type="text"
            placeholder="Cliente"
            onChange={this.handleClient}
          />
          <Form.Control
            className="mt-2"
            value={this.state.totalClient}
            type="text"
            placeholder="Total da conta do cliente"
            onChange={this.handleTotalClient}
          />
          <Form.Control
            className="mt-2"
            placeholder="Total da conta de todos"
            type="text"
            value={this.state.total}
            onChange={this.handleTotal}
          />
          <Form.Control
            className="mt-2"
            placeholder="Total de pessoas "
            type="text"
            value={this.state.partySize}
            onChange={this.handleParty}
          />
          <Button className="mt-2" variant="dark" type="submit">
            Calcular
          </Button>
        </Form>
        <h4 className="text-center">Nome do cliente: {this.state.client} </h4>
        <h4 className="text-center">Valor a ser pago: {this.state.totalTip}</h4>
        <Back />
      </div>
    )
  }
}

export default ThirdQuestion
