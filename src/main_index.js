import '../node_modules/reset-css/_reset.scss'

import React from 'react'
import { render } from 'react-dom'

import App from './App'
import dataMenu from './data/data_main_menu.json'

render(<App data={dataMenu} />, document.querySelector('.app'))
