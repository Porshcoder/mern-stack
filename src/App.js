import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<Services/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
   </Routes>
   
   <Footer/>
    </>
  );
}

export default App;
