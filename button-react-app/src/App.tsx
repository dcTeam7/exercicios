import { useState } from 'react'
import './App.css'
import ButtonCount from './ButtonCount'
import Image from './Image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='squad'>
        <Image url="https://github.com/KevinDik.png"nome="Kevin Diego"/> 
        <Image url="https://github.com/Bruno-GSilva.png"nome="Bruno"/> 
        <Image url="https://github.com/chicoedumacedo.png" nome="Eduardo"/> 
        <Image url="https://github.com/LucasDCoelho.png" nome="lucas"/> 
      </div>
      <h1>Suicide Squad</h1>
      <div className="card">
        <ButtonCount count={count} setCount={setCount} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
