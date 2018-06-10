import React from 'react'
import{ Link } from 'react-router-dom'
import './not-found.css'

function NotFound() {
  return (
    <div>
      <h1>Página não encontrada.</h1>
      <p>;(</p>
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default NotFound
