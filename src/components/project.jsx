import "./project.css";
import Calculator from "../assets/img/calculator.png"
import Theme from "../assets/img/thememanagment.png"
import Form from "../assets/img/contactform.png"

const Project = () => {
    return (
        <section className="projects" id="projects">
            <h1 style={{ color: "black" }}>My Projects</h1>
            <div className="project-card">

                <div className="project-image">
                    <img
                        src={Calculator}
                        alt="Project Preview"
                    />
                </div>

                <div className="project-content">
                    <h2>Calculator App</h2>

                    <p>
                        Two input fields to accept numerical values
                    </p>

                    <p>
                        Four buttons to perform the following operations:
                           - Addition
                           - Subtraction
                           - Multiplication
                           - Division
                    </p>

                    <p>A Reset button to clear inputs and output</p>

                    <p>Display the calculated result in clear, readable text</p>

                    {/* <div className="project-tags">
                        <span>React</span>
                        <span>Node JS</span>
                        <span>PostgreSQL</span>
                        <span>Express</span>
                        <span>Redux</span>
                    </div> */}
                </div>

            </div>
            <div className="project-card">

                <div className="project-image">
                    <img
                        src={Theme}
                        alt="Project Preview"
                    />
                </div>

                <div className="project-content">
                    <h2>Theme Management System</h2>

                    <p>
                        Implement Light and Dark theme toggle
                    </p>

                    <p>
                        A button to switch between themes
                    </p>

                    <p>
                        Theme should be applied consistently across all components
                    </p>

                    <p>
                        At least three components should consume the context (e.g., Header, Content, Footer)
                    </p>

                    {/* <div className="project-tags">
                        <span>React</span>
                        <span>Node JS</span>
                        <span>PostgreSQL</span>
                        <span>Express</span>
                        <span>Redux</span>
                    </div> */}
                </div>

            </div>
            <div className="project-card">

                <div className="project-image">
                    <img
                        src={Form}
                        alt="Project Preview"
                    />
                </div>

                <div className="project-content">
                    <h2>Contact Form Application</h2>

                    <p>
                       Input fields for Name, Email, and Message
                    </p>

                    <p>
                        Handle input value changes using a custom hook
                    </p>

                    <p>
                        Form submission with basic validation
                    </p>

                    <p>
                        Display validation messages clearly

                    </p>

                    {/* <div className="project-tags">
                        <span>React</span>
                        <span>Node JS</span>
                        <span>PostgreSQL</span>
                        <span>Express</span>
                        <span>Redux</span>
                    </div> */}
                </div>

            </div>
        </section>
    );
};

export default Project;
