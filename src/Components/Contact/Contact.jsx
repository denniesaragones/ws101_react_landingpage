import './Contact.css'

function Contact() {
    return (
      <div className="Contact">
        <section className="contact" id="contact">
            <h2 className="heading">Contact</h2>

            <form action="#" >
                <div className="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email Address" />
                </div>

                <div className="input-box">
                    <input type="number" placeholder="Mobile Number" />
                    <input type="text" placeholder="Email Subject" />
                </div>
                <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
      </div>
    );
  }
  
  export default Contact;