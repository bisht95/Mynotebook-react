import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import NoteState from './context/notes/NoteState';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

       <NoteState>
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='about' element={<About />} />
          </Routes>
        </NoteState>

    </>
  )
}

export default App
