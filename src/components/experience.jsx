import "./experience.css";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <h1 style={{color: 'black'}}>Experience</h1>

                <div className="process-timeline">
                    <div className="process-step">
                        <div className="process-number"></div>
                        {/* <div className="process-image">
                            <img src="../assets/contentImages/automatic.webp" alt="Automatic Weighing" />
                        </div> */}
                        <div className="process-content">
                            <h4>Zenskar Software Solutions</h4>
                            <p>Software Trainee</p>
                            <p>Feb 2024 - May 2024</p>
                        </div>
                    </div>
                    <div className="process-step">
                        <div className="process-number"></div>
                        {/* <div className="process-image">
                            <img src="../assets/contentImages/Vehiclearrive.webp" alt="Vehicle Arrives" />
                        </div> */}
                        <div className="process-content">
                            <h4>JellySoft</h4>
                            <p>Website Designer</p>
                            <p>June 2024 - December 2024</p>
                        </div>
                    </div>
                    <div className="process-step">
                        <div className="process-number"></div>
                        {/* <div className="process-image">
                            <img src="../assets/contentImages/automatic.webp" alt="Automatic Weighing" />
                        </div> */}
                        <div className="process-content">
                            <h4>Sazs Apps</h4>
                            <p>Software Trainee</p>
                            <p>August 2025 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;