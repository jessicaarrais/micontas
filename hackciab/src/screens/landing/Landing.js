import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './landing.css'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        account: '',
        password: '',
      },
    }
  }

  handleChange = e => {
    const nameInput = e.target.name
    const valueInput = e.target.value

    this.setState({
      user: {
        [nameInput]: valueInput,
      }
    })
    console.log(this.state.user)
  }

  onValidate = e => {
    return true
  }

  handleSubmit = e => {
    e.preventDefault()

    const user = this.state.user

    if (this.onValidate) {
      this.props.onClickLogin(user)
      this.props.history.push('/')
    }
    console.log("click login")
  }

  render() {
    return (
      <div className="landing">
        <form onSubmit={this.handleSubmit}>
          <img className="logo" src={logo} />

          <label htmlFor="account">Conta:</label>
          <input className="inputLand" type="text" id="account" onChange={this.handleChange}/>

          <label htmlFor="senha">Senha:</label>
          <input className="inputLand" type="password" id="password" onChange={this.handleChange}/>

          <button className="btnLand">
            Entrar
          </button>
        </form>

        <Link to="/registrar">
          <p>Cadastre-se</p>
        </Link>

      </div>
    )
  }
}

export default Landing
