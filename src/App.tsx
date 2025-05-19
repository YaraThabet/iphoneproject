import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gsap from './pages/Gsap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Gsap />
    </>
  )
}

export default App
