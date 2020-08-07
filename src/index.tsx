import * as React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import App from './app'

const appNode = document.getElementById('root')
const store = configureStore()

ReactDOM.render(<App store={store} />, appNode)
