import React from "react";
import { useStateContext } from "../context/StateContext";

const Contact = () => {
  const { contactScroll } = useStateContext();
  return (
    <div className="contact">
      <div ref={contactScroll} className="container">
        Contact
      </div>
    </div>
  );
};

export default Contact;
