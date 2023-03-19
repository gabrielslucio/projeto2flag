import './App.css';
import '../src/Styles/Reset.css';

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
