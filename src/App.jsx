/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './components/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
   <Header/>
  )
}

export default App
