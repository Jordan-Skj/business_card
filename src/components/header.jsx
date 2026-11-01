import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export function Header() {
  return (
    <header className="identity">
      <h1 className="name">Jorka</h1>
      <p className="role">Développeur web freelance</p>
      <a className="site" href="https://jorka.dev">jorka.dev</a>

      <div className="actions">
        <a className="btn btn-primary" href="mailto:contact@jorka.dev">
          <FaEnvelope /> Email
        </a>
        <a className="btn btn-outline" href="https://wa.me/243995659766">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </header>
  );
}