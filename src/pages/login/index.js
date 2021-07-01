import React, { Component } from 'react' 
import Header from '../../components/header'
import './login.scss'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <Header />
        <button onClick={/* this.gotoHome.bind(this) */ () => {this.gotoHome()} } >跳转Home页</button>
      </div>
    )
  }

  gotoHome() {
    this.props.history.push('/home')
  }
}

export default Login