import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Counter from './Counter.jsx'

const element = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

const element1 = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Visit google 1'
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
)
