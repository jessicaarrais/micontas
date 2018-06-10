import React from 'react';
import axios from 'axios';
import './extrato.css'

export default class Extrato extends React.Component {
  state = {
    appointments: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = [
          {
            date: "15/06",
            title: "pagamento fornecedores",
            payment: "R$ 2.220,00",
            hour: "06:00"
          },
          {
            date: "18/06",
            title: "pagamento fornecedores",
            payment: "R$ 2.220,00",
            hour: "06:00"
          },
          {
            date: "21/06",
            title: "pagamento fornecedores",
            payment: "R$ 2.220,00",
            hour: "06:00"
          }
        ]

        const appointments = data;
        this.setState({ appointments });
      });
  }

  render() {
    return (
      <ul>
        <div id="overlay"></div>
        <div id="container">
          <div id="header">
            <img className="img-voltar" src="./images/buttons/voltarxhdpi.png" alt="" />
            <div>
              <img className="img-extrato" src="./images/buttons/extratosxhdpi.png" alt="" />
              <h1 className="timeP">Extrato Financeiro</h1>
            </div>
          </div>
          <div className="balance">
            <span>R$ 50,00</span>
          </div>
          <div id="schedule">
            {
              this.state.appointments.map(appointment =>
                <div className="appointment" key={appointment.date}>
                  <div className="time">
                    <p className="timeP">{appointment.date}</p>
                    <p className="timeP">{appointment.hour}</p>
                  </div>
                  <div className="circle"></div>
                  <div className="event">
                    <h2 className="timeP">{appointment.payment}</h2>
                    <p className="timeP">{appointment.title}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <nav>
          <div className="payments">
            <div className="cardPayments">
              <img src="./images/buttons/pagamentos_fixa.png" alt="" />
            </div>
            <div className="cardPayments">
              <img src="./images/buttons/light_bank_fixa.png" alt="" />
            </div>
            <div className="cardPayments">
              <img src="./images/buttons/configuração_fixa.png" alt="" />
            </div>
          </div>
        </nav>
      </ul>
    )
  }
}
