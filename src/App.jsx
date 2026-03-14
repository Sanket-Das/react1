/* eslint-disable no-unused-vars */
import { useState } from 'react'

import Header from './components/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import EventsList from './pages/Events-list'
import {Router,BrowserRouter} from 'react-router-dom'
import ContactPage from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContactPage />
  )
}

export default App