import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Ustanova Igor Grdina</h2>
          <p>Empowering students since 1950.</p>
        </div>
        <div className="footer-links">
          <h3>Hitre povezave</h3>
          <ul>
            <li><Link to="/">Domov</Link></li>
            <li><Link to="/news">Novice</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Kontakt</h3>
          <p>Email: info@ustanovaIgorGrdina.edu</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 School Street, City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ustanova Igor Grdina. All rights reserved.</p>
      </div>
    </footer>
  );
}
