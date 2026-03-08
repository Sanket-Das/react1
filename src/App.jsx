import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EventsDetails from './pages/Events-details'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Blogs/>
    <EventsDetails />
    // <Header/>
  )
}

export default App
