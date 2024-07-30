import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Blogs></Blogs>
      </div>
      
      
    </>
  )
}

export default App
