import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BirthdayParty from './BIrthdayParty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BirthdayParty />
    </>
  )
}

export default App
