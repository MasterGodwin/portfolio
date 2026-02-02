import Image from "../assets/img/Godwin.png"
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">



        <div className="about-content">
          <h5>About</h5>
          <h2>About Us</h2>

          <p>
            I am Nesaraj Godwin, a passionate Software Developer with a strong foundation in building <br />
            responsive and user-friendly web applications. I enjoy turning ideas into real-world <br />
            solutions using clean code and modern technologies.
          </p>

          <p>
            I have hands-on experience working with HTML, CSS, JavaScript, React JS, Node JS, PHP, <br /> 
            and databases like MySQL and PostgreSQL. I focus on writing scalable, maintainable <br />
            code and creating smooth user experiences across all devices.
          </p>

          <p>I am a quick learner who enjoys solving problems, exploring new technologies, and <br />
          continuously improving my skills. Currently, I am looking for opportunities where I <br />
          can contribute to meaningful projects, grow as a developer, and add value to a 
          dynamic team.</p>

          <div className="tech-stack">
            <span className="tech-btn html">HTML</span>
            <span className="tech-btn css">CSS</span>
            <span className="tech-btn js">JavaScript</span>
            <span className="tech-btn react">React JS</span>
            <span className="tech-btn node">Node JS</span>
            <span className="tech-btn rn">React Native</span>
            <span className="tech-btn php">PHP</span>
            <span className="tech-btn mysql">MySQL</span>
            <span className="tech-btn pg">PostgreSQL</span>
            <span className="tech-btn mssql">Microsoft SQL</span>
          </div>


        </div>

        <div className="about-image">
          <img src={Image} alt="About Us" />
        </div>

      </div>
    </section>
  );
};

export default About;
