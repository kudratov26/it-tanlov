import Home from './pages/Home/Home'
import { Routes, Route } from "react-router-dom";
import Form from './pages/Form/Form';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/submit' element={<Form />} />
      </Routes>

    </>
  )
}

export default App