import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Perfil(props) {
  return (
    <div className="perfil">
      <h1>Perfil</h1>
      <Link to="/">
        <button onClick={props.onClickLogoff}>
          Sair
        </button>
      </Link>
    </div>
  )
}

export default Perfil
