import './App.css'
import Secondpage from './Component/Secondpage'
import Home from './Component/Home';

import { BrowserRouter as BrowserRouter, Router, Route, Routes } from 'react-router-dom';
// importing the Route from react router dom 

function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>
          {/* home page for input name, phone, email  */}

          <Route path='/logged' element={<Secondpage/>}/>
          {/* Routing to second only after getting data from user  */}

        </Routes>
    </BrowserRouter>
  )
}

export default App
