import Layout from "./layout/Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';

{/* All page impor in layout page access through layout and also using router DOM for page apth (callback Route) */}

function App() {
  return (
    <div>
        <BrowserRouter>                                   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
