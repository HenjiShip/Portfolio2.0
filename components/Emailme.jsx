import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Emailme = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cagp4a5ghdcfgc",
        "template_uspqde5",
        form.current,
        "KbYYgPsOeetQOHYsa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="emailjs">
      <form ref={form} onSubmit={sendEmail} className="form">
        <h4>Contact Me</h4>
        <input
          className="small-input"
          type="text"
          name="user_name"
          placeholder="John Doe"
          required
        />
        <input
          className="small-input"
          type="email"
          name="user_email"
          placeholder="JohnDoe@gmail.com"
          required
        />
        <textarea
          className="message"
          name="message"
          placeholder="Message..."
          required
        />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

export default Emailme;
