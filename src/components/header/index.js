import React, { Component } from 'react' 
import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="M-header" >
        Header - {this.props.param1} - {this.props.param2}
      </div>
    )
  }
}

export default Header