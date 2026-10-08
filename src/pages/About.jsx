import aboutFlowers from "../assets/images/about-flowers.jpg.webp"
export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p>Our Story</p>

        <h1>More Than Flowers</h1>

        <p>
          At Lavander, we believe flowers are more than beautiful
          arrangements. They are a way to express feelings,
          celebrate moments, and create memories that stay.
        </p>
      </section>

      <section className="about-story">
        <div className="about-image">
          <img src={aboutFlowers} alt="Lavander flowers" />
        </div>

        <div className="about-text">
          <p>THE LAVANDER STORY</p>

          <h2>Flowers That Speak From The Heart</h2>

          <p>
            Lavander was created with a simple idea: every feeling
            deserves a beautiful expression.
          </p>

          <p>
            From a thoughtful gift to a special celebration, we
            carefully curate flowers that help turn meaningful
            moments into beautiful memories.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div>
          <h3>Thoughtfully Curated</h3>
          <p>Every arrangement is chosen with care and attention.</p>
        </div>

        <div>
          <h3>Meaningful Moments</h3>
          <p>Flowers designed to express what words sometimes cannot.</p>
        </div>

        <div>
          <h3>Elegant Details</h3>
          <p>Simple, timeless beauty in every floral creation.</p>
        </div>
      </section>
    </main>
  );
}