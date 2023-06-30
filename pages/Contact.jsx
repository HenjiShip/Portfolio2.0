import React from "react";
import { useStateContext } from "../context/StateContext";

const Contact = () => {
  const { contact } = useStateContext();
  return (
    <div className="contact">
      <div ref={contact} className="container">
        Contact
      </div>
    </div>
  );
};

export default Contact;
