import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import EventsList from './pages/Events-list'

function App() {
  const [count, setCount] = useState(0)

  return (

    <EventsList />
  )
}

export default App