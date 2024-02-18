import React from 'react';
import Header from './components/Header'
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './components/Test';
import Itinerary from './pages/Itinerary';
import RecreationData from './components/RecreationData';
import LoggedInHomePage from './pages/LoggedInHomePage';

function App() {

  const user = localStorage.getItem('user');


  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Header />}>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/test' element = {<Test/>}></Route>
          <Route path = '/Itinerary' element={!user ? <Login /> : <Itinerary/>}></Route>
        </Route>
        <Route path = '/Login' element = {<Login />}></Route>
        <Route path = '/SignUp' element = {<SignUp />}></Route>
        <Route path='/LoggedInHomePage' element={<LoggedInHomePage />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

