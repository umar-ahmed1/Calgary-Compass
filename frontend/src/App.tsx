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
import MyItinerary from './pages/MyItinerary';

window.Buffer = window.Buffer || require("buffer").Buffer;
function App() {

  const user = localStorage.getItem('user');

  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Header />}>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/test' element = {<Test/>}></Route>
          <Route path = '/itinerary' element={!user ? <Login /> : <Itinerary/>}></Route>
          <Route path = '/myitinerary' element={!user ? <Login /> : <MyItinerary/>}></Route>
        </Route>
        <Route path = '/login' element = {<Login />}></Route>
        <Route path = '/signup' element = {<SignUp />}></Route>
        <Route path='/LoggedInHomePage' element={<LoggedInHomePage />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

