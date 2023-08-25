import React from 'react'
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              University
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/buy'}>
                    Buy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sell'}>
                    Sell
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/rent'}>
                    Rent
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/logout'}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/apartments" element={<Resource />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
=======
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
>>>>>>> 48e9864cd2d0395f0bfc8349344d7c5570a7a4fa
