import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './components/movie'

function App() {
  return (
    <>
      <div className="plain">
        <Movie/>
      </div>
    </>
  )
}

export default App
