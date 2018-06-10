import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import './button-bar.css'

function ButtonBar(props) {
  return (
    <div className="btnBar">
      <Link to="/transferencias">
        <div className="btn">Tranferências</div>
      </Link>
      <Link to="/entradas">
        <div className="btn">Entradas</div>
      </Link>
      <Link to="/saidas">
        <div className="btn">Saídas</div>
      </Link>
    </div>
  )
}

export default ButtonBar
