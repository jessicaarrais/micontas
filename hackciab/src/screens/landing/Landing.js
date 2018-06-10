import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './landing.css'

function Landing(props) {
  return (
    <div className="landing">
      <img className="logo" src={logo} />
      <Link to="/register">
        <button className="btnLand">
          Entrar
        </button>
      </Link>
      <Link to="/login">
        <p>Cadastre-se</p>
      </Link>
    </div>
  )
}

export default Landing
