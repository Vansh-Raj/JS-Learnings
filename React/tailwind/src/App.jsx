import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css'
import { Button } from './components/Button.jsx'
import { Input } from './components/Input.jsx'
import { Otp } from './components/otp.jsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div className='h-screen bg-blue-700' >
        <br /><br /><br />
       <Otp/>
        
      </div>

    
  )
}

export default App
