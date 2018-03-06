import React, { Component } from 'react'
import Menu from './modules/Menu/main_menu.js'

export default class App extends Component { // de que es la extension, y porque se coloca fragment y component, como es que solo renderisa un elemento, donde es que el nos dijo que espera que se vean ahi en lista los elementos del proyecto completo
  constructor (props) {
    super(props)
    this.data = props.data
  }

  render () { // Que es lo que estoy diciendo con react.fragment, porque key
    return (
      <React.Fragment>
        <Menu name={this.data.name} apellido={this.data.apellido} />
      </React.Fragment>
    )
  }
}
