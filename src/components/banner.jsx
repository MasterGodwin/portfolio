import "./banner.css";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-content">

        <p>HELLO</p>

        <h1>I am Nesaraj Godwin</h1>

        <h2>Software Developer</h2>
 
        <div className="banner-social">
          <a
            href="https://www.linkedin.com/in/nesaraj-godwin-st-6b67b5255"
            target="_blank"
            rel="noreferrer" 
            className="social-icon"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/MasterGodwin" 
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Banner;
