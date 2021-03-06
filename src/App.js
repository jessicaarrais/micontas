import React, { Component } from 'react';
import { Route, Switch, Redirect, withRoute } from 'react-router-dom'
import Landing from './screens/landing/Landing'
import Home from './screens/home/Home'
import Register from './screens/register/Register'
import Payroll from './screens/payroll/Payroll'
import Perfil from './screens/perfil/Perfil'
import Extrato from './screens/extrato/Extrato'
import NotFound from './screens/not-found/NotFound'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
    }
  }

  onLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({
      user: true,
    })
    console.log("entrou", user)
  }

  onLogoff = () => {
    localStorage.clear()
    this.setState({
      user: false,
    })
    console.log("saiu")
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={props => (
            this.state.user ?
              <Home user={this.state.user} /> :
              <Redirect to="/landing" />
          )} />

          <Route path='/landing' render={props => (
            <Landing onClickLogin={this.onLogin} user={this.state.user} history={props.history}/>
          )} />
          <Route path='/registrar' render={props => (
            <Register onClickLogin={this.onLogin} history={props.history} />
          )} />
          <Route path='/folha' component={Payroll}/>
          <Route path='/extrato' component={Extrato} />
          <Route path='/perfil'  render={props => (
            <Perfil onClickLogoff={this.onLogoff}  />
          )} />
          <Route component={NotFound} />

        </Switch>
      </div>
    );
  }
}

export default App;
