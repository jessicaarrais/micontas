import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/buttons/logo_vertical_branco.png'
import '../landing/landing.css'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: '',
        cpf: '',
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
    console.log(this.onValidate())

    console.log(this.state.user)
  }

  handleSubmit = e => {
    e.preventDefault()

    if (true) {
      const user = this.state.user
      this.props.onClickLogin(user)
      this.props.history.push('/')
    }
    console.log("click login")
  }

  render() {
    return (
      <div className="landing">
        <form onSubmit={this.handleSubmit}>
          <img className="logoLand" src={logo} />

          <label htmlFor="name">Nome completo:</label>
          <input className="inputLand" type="text" id="name" onChange={this.handleChange}/>
          {this.state.user.error && this.state.user.error.name === 'name' && (
            <p className="erro">{this.state.user.error.msg}</p>
          )}

          <label htmlFor="password">Senha:</label>
          <input className="inputLand" type="password" id="password" onChange={this.handleChange}/>
          {this.state.user.error && this.state.user.error.name === 'password' && (
            <p className="erro" >{this.state.user.error.msg}</p>
          )}

          <button className="btnLand">
            Entrar
          </button>
        </form>

        <Link to="/">
          <p>Voltar</p>
        </Link>

      </div>
    )
  }
}

export default Register
