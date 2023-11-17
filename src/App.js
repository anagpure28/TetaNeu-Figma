import logo from './logo.svg';
import './App.css';
import Section1 from './Component/Section1/Section1';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
