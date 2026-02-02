import "./contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h1>Contact Us</h1>

                    <div>
                        <h3><i className="fa-solid fa-location-dot"></i> Address</h3>
                        <p>
                            &nbsp;&nbsp;&nbsp; 3/854B, SR Naidu Nagar,<br /> &nbsp;&nbsp;&nbsp; Venkatchalapuram, <br /> &nbsp;&nbsp;&nbsp; Sattur - 626203, <br /> &nbsp;&nbsp;&nbsp; Virudhunagar District.
                        </p>
                        <h3 style={{ color: "black" }}><i className="fa-solid fa-envelope"></i> Email Us</h3>
                        <p style={{ textAlign: "left" }}>
                            &nbsp;&nbsp;&nbsp; nesarajgodwin80@gmail.com
                        </p>
                        <h3 style={{ color: "black" }}><i className="fa-solid fa-phone"></i> Call Us</h3>
                        <p style={{ textAlign: "left" }}>
                            &nbsp;&nbsp;&nbsp; +91 6385376036
                        </p>
                    </div>
                </div>
                <div className="contact-right">
                    <h1>Contact form</h1>
                    <form className="contact-form">
                        <div className="form-gap">
                            <input type="text" className="form-input" name="name" placeholder="Name" />
                            <input type="text" className="form-input" name="subject" placeholder="Subject" />
                        </div>
                        <div className="form-gap">
                            <input type="email" className="form-input" name="email" placeholder="Email" />
                            <input type="text" className="form-input" name="phone" placeholder="Phone" />
                        </div>
                        <div>
                            <textarea type="text" className="form-input-message" name="message" placeholder="Message" />
                        </div>
                        <button className="contact-button">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;