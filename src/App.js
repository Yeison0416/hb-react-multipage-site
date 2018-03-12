import React, { Component } from 'react'
import Menu from './modules/Menu/main_menu.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.data = props.data
  }

  render () {
    return (
      <React.Fragment>
        <Menu name={this.data.name} apellido={this.data.apellido} />
      </React.Fragment>
    )
  }
}
