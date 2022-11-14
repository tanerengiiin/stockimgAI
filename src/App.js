import React , { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import GetStarted from './Components/GetStarted';
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import { Routes, Route } from "react-router-dom"
import Page404 from "./Components/Page404"
import MainContext from './MainContext';
import Login from './Components/Login';
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const data = {
    modalIsOpen,setModalIsOpen
  }
 
  return (
    <MainContext.Provider value={data}>
      <div className="App" >
        <Navbar />
        <Login/>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        
        <Footer />

      </div>
    </MainContext.Provider>
  );
}

export default App;
