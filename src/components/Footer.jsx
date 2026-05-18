import logoFooter from '../assets/logo-footer.png';

export default function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={logoFooter} alt="Kasa" className="kasa-footer__logo" />
      <p className="kasa-footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}