import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import './button-bar.css'

function ButtonBar(props) {
  return (
    <nav>
      <div class="payments">
        <div class="cardPayments">
          <img src="buttons/pagamentos_fixa.png" alt="" />
        </div>
        <div class="cardPayments">
          <img src="buttons/light_bank_fixa.png" alt="" />
        </div>
        <div class="cardPayments">
          <img src="buttons/configuração_fixa.png" alt="" />
        </div>
      </div>
    </nav>
  )
}

export default ButtonBar
