/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './components/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import EventsList from './pages/Events-list'
import CauseList from './pages/Causes-list'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (

    <CauseList/>
    
    
  )
}

export default App