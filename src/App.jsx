import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import BlogsList from './pages/Blogs-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BlogsList/>
    // <Home />
  )
}

export default App
