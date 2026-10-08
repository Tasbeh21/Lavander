import { Link } from "react-router-dom";
import lavenderHero from "../assets/images/lavender-hero.jpg.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Fresh Flowers, Beautiful Moments</p>

        <h1>
          Flowers That Speak
          <span> From The Heart</span>
        </h1>

        <p className="hero-text">
          Discover beautiful flowers and elegant bouquets made to make every
          moment special.
        </p>

        <Link to="/products" className="hero-btn">
          Shop Flowers
        </Link>
      </div>

      <div className="hero-image">
        <img src={lavenderHero} alt="Lavender flowers" />
      </div>
    </section>
  );
}
