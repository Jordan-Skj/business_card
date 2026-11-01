import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export function Header() {
  return (
    <header className="identity">
      <h1 className="name">Jourdain Shongo</h1>
      <p className="role">Développeur web freelance</p>
      <a className="site" href="https://jordan-skj.github.io/jorkadev-portfolio/">jorkadev-portfolio</a>

      <div className="actions">
        <a className="btn btn-primary" href="jorkaSkj@proton.me">
          <FaEnvelope /> Email
        </a>
        <a className="btn btn-outline" href="https://wa.me/+243808981347">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </header>
  );
}