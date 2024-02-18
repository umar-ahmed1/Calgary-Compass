import React from 'react';
import Header from './components/Header'
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './components/Test';
import Itinerary from './pages/Itinerary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Header />}>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/test' element = {<Test/>}></Route>
        </Route>
        <Route path = '/Login' element = {<Login />}></Route>
        <Route path = '/SignUp' element = {<SignUp />}></Route>
        <Route path = '/Itinerary' element={<Itinerary/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

