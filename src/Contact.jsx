import React from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4b542c88-6bc7-482f-ace9-5ba13dbcc74e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // Show success alert
      Swal.fire({
        title: "Message Sent!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });
    } else {
      // Show error alert
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error"
      });
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have a question or special request? We'd love to hear from you!</p>

      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <div className="contact-details">
        <p><strong>Address:</strong> 123 Bakery Street, Sweetville, CA 90210</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@sweetbakery.com</p>
      </div>
    </div>
  );
}

export default Contact;