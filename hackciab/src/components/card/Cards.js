import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import card from './card.css'

function Cards(props) {
  return (
    <div className="cards">
      <Link to="/folha">
        <Card cardClass="card cardPayroll">Folha de Pagamento</Card>
      </Link>
      <Link to="/contas">
        <Card cardClass="card cardAccount">Contas</Card>
      </Link>
      <Link to="/boletos">
        <Card cardClass="card cardBoletos">Boletos</Card>
      </Link>
    </div>
  )
}

export default Cards
