import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className={props.cardClass}>
      {props.children}
    </div>
  )
}

export default Card
