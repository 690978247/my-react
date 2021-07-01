import React, { Component } from 'react'
import Header from '../../components/header'
import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <Header param1='abc' param2='c' func1={() => {console.log('func1')}} />
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default Home