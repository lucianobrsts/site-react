import { useState } from 'react'
import boavistaLogo from './assets/image/logoGamesRetro.png'
import './assets/css/App.css'
import Header from './components/Header'
import Card from './components/Card'
import MiniCard from './components/MiniCard'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='header'>
      <Header />
    <div>

        <a href="https://boavistatecnologia.com.br/" target="_blank">
          <img src={boavistaLogo} className="logo" alt="Boavista Tecnologia" />
        </a>
      </div>
    </div>

    <div className='card'>
      <Card />  
    </div>

    <p className="read-the-docs">
      Página em construção - Aguardem pelas novidades
    </p>
    </>
  )
}

export default App
