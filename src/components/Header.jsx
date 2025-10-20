import { Link } from "react-router-dom";
import "./Header.css";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <a href="/">
            <img src="./images/ig_logo.png" alt="Ustanova Igor Grdina" />
          </a>
        </div>
        <div className="header-navigation">
          <nav className="primary-navigation">
            <ul>
              <li>
                <Link to="/">{t("novice.header")}</Link>
              </li>
              <li>
                <Link to="/institution">{t("ustanova.header")}</Link>
              </li>
              <li>
                <Link to="/founder">{t("ustanovitelj.header")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("kontakt.header")}</Link>
              </li>
              <li>
                <LanguageToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
