import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
 import { Provider } from 'react-redux'
 import store from './login/store/store'
  //import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
      <App />
    </Provider>
)
