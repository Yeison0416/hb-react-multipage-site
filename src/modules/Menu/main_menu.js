import React, { Component } from 'react'
import './main_menu.scss'

export default class Mainmenu extends Component {
  constructor (props) {
    super(props)
    this.shellMenu()
  }
  shellMenu () {
    console.log('entre')
  }
  render () {
    return <h1 className='containermenu'>{`hola ${this.props.name}`}</h1>
  }
}
