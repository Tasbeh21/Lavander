import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>Lavander</h2>

          <p>
            Flowers that speak from the heart.
            Thoughtfully designed for beautiful and meaningful moments.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Pinterest">
              <FaPinterestP />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Flowers</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/cart">Shopping Cart</Link>
          <Link to="/products">Our Collection</Link>
          <Link to="/contact">Need Help?</Link>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <div className="footer-contact-item">
            <FaEnvelope />
            <span>hello@lavander.com</span>
          </div>

          <div className="footer-contact-item">
            <FaPhone />
            <span>+20 100 000 0000</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Lavander. All rights reserved.</p>

        <p>Made with love for beautiful moments.</p>
      </div>

    </footer>
  );
}