// import "./About.css";
import Image from "../assets/img/Godwin.png"

const About = () => {
  return (
    <section className="about">
      <div className="about-container">



        <div className="about-content">
          <h5>About</h5>
          <h2>About Us</h2>

          <p>
            We are a creative tech team focused on delivering high-quality web
            applications, clean UI designs, and reliable digital solutions.
          </p>

          <p>
            Our goal is to combine technology and creativity to build products
            that users love.
          </p>

          <button className="about-btn">Contact Us</button>
        </div>

        <div className="about-image">
          <img src={Image} alt="About Us" />
        </div>

      </div>
    </section>
  );
};

export default About;
