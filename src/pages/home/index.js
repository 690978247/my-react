import React, { Component } from 'react'
import Header from '../../components/header'
import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <Header />
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default Home