import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-xl">UIG</span>
              </div>
              <h3 className="font-display text-lg font-semibold">
                Ustanova Igor Grdina
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students since 1950. Dedicated to fostering academic excellence and personal growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about-institution" className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm">
                  About Institution
                </Link>
              </li>
              <li>
                <Link to="/about-founder" className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm">
                  About Founder
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">info@ustanovaigorgrdina.edu</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+123 456 7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">123 School Street, City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Ustanova Igor Grdina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
