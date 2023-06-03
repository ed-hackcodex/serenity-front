import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react'
import Home from './pages/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
