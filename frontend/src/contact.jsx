import "./App.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_singh123", 
      "template_5gwvmj8",
      form.current,
      "vRarBU6_b_Ljnja93"
    )
    .then(() => {
      alert("Message Sent Successfully 🚀");
    })
    .catch((error) => {
  console.log(error);
  alert(error.text || "Failed ❌");
});

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <h1>Contact Me</h1>

        <div className="contact-content">

          <form ref={form} onSubmit={sendEmail} className="contact-left">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message 🚀
            </button>

          </form>

          <div className="contact-right">

            <h2>Connect With Me</h2>

            <p>
  📧
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=amansingh0645@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    amansingh0645@gmail.com
  </a>
</p>




            

  
<p>
  📱
  <a href="tel:+919661922233">
    +91 9661922233
  </a>
</p>

            <p>📍 India</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;