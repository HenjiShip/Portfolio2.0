import React from "react";
import { useStateContext } from "../context/StateContext";
import Emailme from "../components/Emailme";
import Socials from "../components/Socials";

const Contact = () => {
  const { contactScroll } = useStateContext();
  return (
    <div className="contact">
      <div ref={contactScroll} className="container">
        <div className="inner-container">
          <h3>
            Send me a message for work or freelance services.
            <Socials float="float-left" />
          </h3>

          <Emailme />
        </div>
      </div>
    </div>
  );
};

export default Contact;
