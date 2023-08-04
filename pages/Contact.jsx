import React from "react";
import { useStateContext } from "../context/StateContext";

const Contact = () => {
  const { contactScroll } = useStateContext();
  return (
    <div className="contact">
      <div ref={contactScroll} className="container">
        <div className="inner-container">
          <h3>Send me a message for work or freelance services</h3>
          <form className="form">
            <h4>Contact Me</h4>
            <textarea className="message" name="message" />
            <input className="button" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
