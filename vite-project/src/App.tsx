import './App.css'
import Secondpage from './Component/Secondpage'
import Home from './Component/Home';

import { BrowserRouter as BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/logged' element={<Secondpage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
