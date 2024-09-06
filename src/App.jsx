import Home from './pages/Home/Home'
import { Routes, Route } from "react-router-dom";
import Form from './pages/Form/Form';
import Videos from './pages/Videos/Videos';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/submit' element={<Form />} />
        <Route exact path='/videos' element={<Videos />} />
      </Routes>

    </>
  )
}

export default App