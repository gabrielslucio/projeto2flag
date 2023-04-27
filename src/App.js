import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ChampionList from './Container/ChampionList/ChampionList';
import ChampionPage from './Pages/ChampionPage/ChampionPage';
import GuideList from './Pages/GuideList/GuideList';

import './App.css';
import '../src/Styles/Reset.css';
import ScrollTop from './Functions/ScrollTop/ScrollTop';
import CreateAccount from './Pages/CreateAccount/CreateAccount';

function App() {
  
    return (
      <BrowserRouter>
      <div className="App">      
        <Routes>
          <Route 
            index path="/" 
            element={ 
              <> 
                <Navbar /> 
                <ScrollTop /> 
                <Home />
                <Footer />
              </> 
            } 
          />
          <Route 
            index path="/campeao/:id" 
            element={ 
              <> 
                <Navbar /> 
                <ScrollTop /> 
                <ChampionPage />
                <Footer />
              </> 
            } 
          />
          <Route 
            index path="/guias-todos" 
            element={ 
              <> 
                <Navbar /> 
                <ScrollTop /> 
                <GuideList />
                <Footer />
              </> 
            } 
          />
          <Route path="/criar-conta" element={<CreateAccount />} />
        </Routes>      
    </div>
    </BrowserRouter>
    );
}

export default App;
