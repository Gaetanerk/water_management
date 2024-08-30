import MesEspaces from './mes_espaces';
import Recommandations from '../navbar/recommandations';
import Assistance from '../navbar/assistance';
import '../navbar/navbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const NavbarMel = () => {
  return (
    <Router>
        <nav>
            <ul id='ulNavbar'>
                <img id='logo' src="./images/navbar/Logo_Lille_mais_bleu.svg"></img>
                <li><Link to="/mes_espaces" className="nav-link">Mes Espaces</Link></li>
                <li><Link to="/recommandations" className="nav-link">Recommandations</Link></li>
                <li><Link to="/assistance" className="nav-link">Assistance</Link></li>
            </ul>
            <div id='lignBlue'></div>
        </nav>
        <Routes>
            <Route path="/mes_espaces" element={<MesEspaces />} />
            <Route path="/recommandations" element={<Recommandations />} />
            <Route path="/assistance" element={<Assistance />} />
        </Routes>
    </Router>
  );
};

export default NavbarMel;