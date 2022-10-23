import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Back from '../components/Back'
import './FirstQuestion.css'

function FirstQuestion() {
  var ref = useRef(null)
  const [answer, setAnswer] = useState(null)
  const romanNumber = number => {
    if (number === 'I') {
      return 1
    } else if (number === 'V') {
      return 5
    } else if (number === 'X') {
      return 10
    } else if (number === 'L') {
      return 50
    } else if (number === 'C') {
      return 100
    } else if (number === 'D') {
      return 500
    } else if (number === 'M') {
      return 1000
    } else {
      alert('Este algarismo romano não existe')
    }
  }
  const convertRomanToArabic = number => {
    let result = 0
    for (var i = 0; i < number.length; i++) {
      var alg1 = romanNumber(number.charAt(i))
      if (i + 1 < number.length) {
        var alg2 = romanNumber(number.charAt(i + 1))
        if (alg1 >= alg2) {
          result += alg1
        } else {
          result += alg2 - alg1
          i++
        }
      } else {
        result = result + alg1
      }
    }
    return result
  }
  function onSubmit(e) {
    e.preventDefault()
    setAnswer(convertRomanToArabic(ref.current.value))
    e.target.children[1].value = ''
  }
  return (
    <div className="firstQuestion">
      <Form
        className="d-flex flex-column pt-2 px-5 align-items-center "
        onSubmit={onSubmit}
      >
        <h1>Conversão de algarismos romanos em algarismos arábicos</h1>
        <Form.Control
          className="w-25 my-2"
          ref={ref}
          required
          type="text"
          placeholder="Digite o numero"
        />
        <Button className="w-25 " variant="dark" type="submit">
          Converter
        </Button>
      </Form>
      <p> {answer}</p>
      <Back />
    </div>
  )
}

export default FirstQuestion
