import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Login from './Component/Login';
import Logout from './Component/Logout';
import Signup from './Component/Signup';
import Nopage from './Component/Nopage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;