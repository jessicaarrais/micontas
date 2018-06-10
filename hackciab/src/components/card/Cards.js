import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import card from './card.css'

function Cards(props) {
  return (
    <div className="partners">
      <Link to="/folha">
        <Card cardClass="cardPartners">
          <img src="buttons/parceriros.png" alt="Parceiros" />
        </Card>
      </Link>
      <Link to="/contas">
        <Card cardClass="cardPartners">
          <img src="buttons/fornecedores.png" alt="Fornecedores" />
        </Card>
      </Link>
      <Link to="/boletos">
        <Card cardClass="cardPartners">
          <img src="buttons/folha_pagamento.png" alt="Folha de Pagamentos" />
        </Card>
      </Link>
    </div>
  )
}

export default Cards
