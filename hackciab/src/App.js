import React, { Component } from 'react';
import { Route, Switch, Redirect, withRoute } from 'react-router-dom'
import Landing from './screens/landing/Landing'
import Home from './screens/home/Home'
import Register from './screens/register/Register'
import Payroll from './screens/payroll/Payroll'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: false,
    }
  }

  onLogin = () => {
    this.setState({
      user: true,
    })
  }

  onLogoff = () => {
    this.setState({
      user: false,
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={props => (
            this.state.user ? <Home /> : <Redirect to="/landing" />
          )} />

          <Route path='/landing' render={props => (
            <Landing onClickLogin={this.onLogin} onClickLogoff={this.onLogoff} />
          )} />
          <Route path='/registrar' component={Register} />
          <Route path='/folha' component={Payroll} />

        </Switch>
      </div>
    );
  }
}

export default App;
