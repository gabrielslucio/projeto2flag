import './App.css';
import '../src/Styles/Reset.css';

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ChampionList from './Container/ChampionList/ChampionList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ChampionList />
      <Footer />
    </div>
  );
}

export default App;
