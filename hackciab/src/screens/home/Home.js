import React, { Component } from 'react'
import Cards from '../../components/card/Cards'
import ButtonBar from '../../components/button-bar/ButtonBar'
import './home.css'

function  Home(props) {
  return (
    <div className="home">
      <h1>Conta Salário Home</h1>

      <button onClick={props.onClickLogoff}>Sair</button>

      <div className="balance">

      </div>

      <Cards />
      <ButtonBar />

    </div>
  )
}

export default Home
