import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <p>Get In Touch</p>

        <h1>Let's Talk Flowers</h1>

        <p>
          Whether you're looking for a thoughtful gift or planning
          something special, we're here to help you find the perfect
          flowers for your moment.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info-section">

          <p className="contact-label">CONTACT LAVANDER</p>

          <h2>
            We'd Love To
            <span> Hear From You</span>
          </h2>

          <p className="contact-description">
            Have a question about an arrangement, need help choosing
            the right flowers, or simply want to say hello?
            Send us a message and we'll be happy to help.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>hello@lavander.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaPhone />
              </div>

              <div>
                <h3>Phone</h3>
                <p>+20 100 000 0000</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>Egypt</p>
              </div>
            </div>

          </div>
        </div>

        <form className="contact-form">

          <h2>Send Us A Message</h2>

          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Tell us how we can help..."
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}