import React from 'react'
import ReactDOM from 'react-dom/client'

import { UserProvider } from './context/UserContext'

import App from './App.jsx'
import './index.css'
import { CommonDataProvider } from './context/CommonDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommonDataProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CommonDataProvider>
  </React.StrictMode>,
)
