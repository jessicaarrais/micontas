import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../../components/card/Cards'
import ButtonBar from '../../components/button-bar/ButtonBar'
import './home.css'
import parceiros from "../img/parceriros.png"
import logoMini from '../img/logo_mini.png'
import fornecedores from '../img/fornecedores.png'
import folhaPagamento from '../img/folha_pagamento.png'
import pagamentos from '../img/pagamentos_fixa.png'
import lightBank from '../img/../img/light_bank_fixa.png'
import perfil from '../img/perfil.png'

function  Home(props) {
  return (
    <div>
      <div className="cards">
        <div className="logo">
          <img src={logoMini} alt="Logo" />
          <p>Juliana Alberti</p>
      </div>
      <div className="balance">
        <span>R$ 50,00</span>
      </div>
      <div className="statement-account"></div>
      <div className="status">
        <p>Seu último pagamento foi para XXXXXX no valor de R$ XX,XX</p>
      </div>
      <div className="partners">
        <Link to="/parceiros">
          <div className="cardPartners">
            <img src={parceiros} alt="Parceiros" />
          </div>
        </Link>
        <Link to="/fornecedores">
          <div className="cardPartners">
            <img src={fornecedores} alt="Fornecedores" />
          </div>
        </Link>
        <Link to="/folha">
          <div className="cardPartners">
            <img src={folhaPagamento} alt="Folha de pagamento" />
          </div>
        </Link>
      </div>
      </div>
      <nav>
        <div className="payments">
          <Link to="/pagamentos">
            <div className="cardPayments">
              <img src={pagamentos} alt="Pagamentos" />
            </div>
          </Link>
          <Link to="/pagamentos">
            <div className="cardPayments">
              <img src={lightBank} alt="Light Bank" />
            </div>
          </Link>
          <Link to="/perfil">
            <div className="cardPayments">
              <img src={perfil} alt="Perfil" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Home
