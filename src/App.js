import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Contact/>
    </>
  );
}

export default App;
