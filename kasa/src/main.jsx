import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/style/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  /* à voir si il faut ajouter dans les balises React.StrictMode */
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
