import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/layouts/Navbar/Navbar'
import Footer from './components/layouts/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './pages/Form/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route exact path='/' element={<Home />} />
          <Footer />
        </Routes>
        <Routes>
          <Route exact path='/submit' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App