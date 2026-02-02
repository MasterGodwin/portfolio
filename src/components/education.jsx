import "../components/education.css";

const Education = () => {
    return (
        <section className="education" id="education">
            <div className="education-container">
                <h1 style={{ color: 'black' }}>Education</h1>

                <div className="education-box">
                    <h3>B.Sc Computer Science</h3>
                    <p>Government Art & Science College, Kovilpatti</p>
                    <p>2020 - 2023 </p>
                </div>

                <div className="education-box"> 
                    <h3>HSC</h3>
                    <p>Government Higher Secondary School, Padanthal</p>
                    <p>2018 - 2020 </p>
                </div>

                <div className="education-box">
                    <h3>SSLC</h3>
                    <p>Government Higher Secondary School, Padanthal</p>
                    <p>2008 - 2018 </p>
                </div>
            </div>
        </section>
    )
}

export default Education;