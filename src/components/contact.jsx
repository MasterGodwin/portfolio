import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_2bn9cia",
            "template_itr1n64",
            formRef.current,
            "3Adbq_aKJJjAxFG_-"
        )
        .then(
            () => {
                alert("Message sended Successfully");   
            },
            () => {
                alert("Failed to send the message, please try again");
            }
        );
        e.target.reset();
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h1>Contact Us</h1>

                    <div>
                        <h3><i className="fa-solid fa-location-dot"></i> Address</h3>
                        <p>
                             3/854B, SR Naidu Nagar,<br />Venkatachalapuram, <br />Sattur - 626203, <br />Virudhunagar District.
                        </p>
                        <h3 style={{ color: "black" }}><i className="fa-solid fa-envelope"></i> Email Us</h3>
                        <p style={{ textAlign: "left" }}>
                            nesarajgodwin80@gmail.com
                        </p>
                        <h3 style={{ color: "black" }}><i className="fa-solid fa-phone"></i> Call Us</h3>
                        <p style={{ textAlign: "left" }}>
                            +91 63853 76036
                        </p>
                    </div>
                </div>
                <div className="contact-right">
                    <h1>Contact form</h1>
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-gap">
                            <input type="text" className="form-input" name="name" placeholder="Name" required/>
                            <input type="text" className="form-input" name="subject" placeholder="Subject" required/>
                        </div>
                        <div className="form-gap">
                            <input type="email" className="form-input" name="email" placeholder="Email" required />
                            <input type="text" className="form-input" name="phone" placeholder="Phone" required />
                        </div>
                        <div>
                            <textarea type="text" className="form-input-message" name="message" placeholder="Message" required/>
                        </div>
                        <button className="contact-button">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;