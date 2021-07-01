import React, { Component } from 'react'
import Header from '../../components/header'
import './home.scss'
import { Button } from 'antd'

class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <Header param1='abc' param2='c' func1={() => {console.log('func1')}} />
        <h1>Home Page</h1>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default Home