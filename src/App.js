import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ChampionList from './Container/ChampionList/ChampionList';
import ChampionPage from './Pages/ChampionPage/ChampionPage';

import './App.css';
import '../src/Styles/Reset.css';

/*
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <ChampionList />
        <Routes>
          <Route path="/campeao/:id" element={<ChampionPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
*/

function App() {
  
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route index path="/" element={ <Home /> } />
          <Route exact path="/campeao/:id" element={ <ChampionPage /> } />
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    );
}

export default App;
