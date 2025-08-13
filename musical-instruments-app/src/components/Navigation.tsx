import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link 
        to="/cards" 
        className={`nav-button ${location.pathname === '/cards' ? 'active' : ''}`}
      >
        Listagem (cards)
      </Link>
      <Link 
        to="/table" 
        className={`nav-button ${location.pathname === '/table' ? 'active' : ''}`}
      >
        Listagem (tabela)
      </Link>
    </nav>
  );
};