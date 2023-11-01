import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { NewsProvider } from './Context/NewsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NewsProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </NewsProvider>
)
