import Social from '../../Header/SocialIcon/Social';
import './Contact.css'
import Form from './Form';
function Contact(){
    return(
        <div className="contact-section">
            <h1>Contact</h1>
            <div className="contact">
                <section>
                    <Form/>
                </section>
                <section className="personal-info">
                    <div>
                        <h3>Get In Touch</h3>
                        <p>My Name Is Ravi.</p>
                    </div>
                    <div>
                        <h3>My Address</h3>
                        <p>Pune,India</p>
                        <p>9999999999</p>
                        <p>maneravi3332@gmail.com</p>
                    </div>
                        
        

                </section>
            </div>
            <span id="social-icon">
                <Social></Social>

            </span>

        </div>

    );
}

export default Contact;