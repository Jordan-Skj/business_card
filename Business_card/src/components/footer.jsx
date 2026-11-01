import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaTiktok,
  FaLinkedin,
  FaSquareGithub,
} from "react-icons/fa6";

const reseaux = [
  { nom: "Facebook", href: "https://www.facebook.com/jorkadev", Icone: FaSquareFacebook },
  { nom: "Instagram", href: "https://www.instagram.com/jorkaskj/", Icone: FaSquareInstagram },
  { nom: "TikTok", href: "https://www.tiktok.com/@jourdain2430", Icone: FaTiktok },
  { nom: "LinkedIn", href: "https://www.linkedin.com/in/jorka-shongo-702806400/", Icone: FaLinkedin },
  { nom: "GitHub", href: "https://github.com/Jordan-Skj", Icone: FaSquareGithub },
];

export function Footer() {
  return (
    <footer className="socials-bar">
      <ul className="socials">
        {reseaux.map(({ nom, href, Icone }) => (
          <li key={nom}>
            <a href={href} aria-label={nom}>
              <Icone />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}