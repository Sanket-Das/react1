import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'

import { Blogs } from './pages/Blogs'
function App() {
  const [count, setCount] = useState(0)

  return (
    // <Home />
    <Blogs/>
  )
}

export default App
