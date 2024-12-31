
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Booktable from './pages/Booktable';

function App() {
  return (
   <div>
     <Navbar />
     {/* Add your components here */} 
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="menu" element={<Menu />} />
      <Route  path="about" element={<About />} />
      <Route  path="booktable" element={<Booktable />} />
    </Routes>
    </div>
   
  )
}

export default App
