import Foyer from './foyer';
import Recommandations from './recommandations';
import Assistance from './assistance';
import './navbar.css';
import { Route, Routes, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul id='ulNavbar'>
          <img id='logo' src="./images/navbar/Logo_Lille_mais_bleu.svg" alt="Logo"></img>
          <li><Link to="/foyer" className="nav-link">Foyer</Link></li>
          <li><Link to="/recommandations" className="nav-link">Recommandations</Link></li>
          <li><Link to="/assistance" className="nav-link">Assistance</Link></li>
        </ul>
        <div id='lignBlue'></div>
      </nav>
      <Routes>
        <Route path="/foyer" element={<Foyer />} />
        <Route path="/recommandations" element={<Recommandations />} />
        <Route path="/assistance" element={<Assistance />} />
      </Routes>
    </div>
  );
};

export default Navbar;