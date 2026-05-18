import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <header className="kasa-header">
      <img src={logo} alt="Kasa - Location d'appartements" className="kasa-header__logo" />
      <nav className="kasa-header__nav">
        {/* ajoute la classe active si l'ulilisateur est sur la page */}
        <Link 
          to="/" 
          className={`kasa-header__link ${location.pathname === '/' ? 'kasa-header__link--active' : ''}`}
        >
          Accueil
        </Link>
        <Link 
          to="/about" 
          className={`kasa-header__link ${location.pathname === '/about' ? 'kasa-header__link--active' : ''}`}
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}