import ReactDOM from 'react-dom/client'
import 'regenerator-runtime/runtime'

import { UserProvider } from './context/UserContext'

import App from './App.jsx'
import './index.css'
import { CommonDataProvider } from './context/CommonDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CommonDataProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CommonDataProvider>
)
