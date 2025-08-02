
import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 }from "react-router-dom";
 import Login from './screens/Login';
import Signup from './screens/Signup';


const App = () => {
  return (
    <Router>
    <>
    <Routes>
      <Route  exact path='/' element= {<Home/>}></Route>
      <Route  exact path='/Login' element= {<Login/>}></Route>
      <Route  exact path='/Signup' element= {<Signup/>}></Route>
    </Routes>
    </>
    </Router>
  )
}

export default App
