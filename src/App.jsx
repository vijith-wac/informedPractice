import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomComponent from './components/CustomComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomComponent/>
    </>
  )
}

export default App
