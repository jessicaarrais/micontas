import React, { Component } from 'react'
import Cards from '../../components/card/Cards'
import ButtonBar from '../../components/button-bar/ButtonBar'
import './home.css'

function  Home() {
  return (
    <div className="home">
      <h1>Conta Salário Home</h1>

      <div className="balance">

      </div>

      <Cards />
      <ButtonBar />

    </div>
  )
}

export default Home
