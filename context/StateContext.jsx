import React, { createContext, useContext, useRef } from "react";

const Context = createContext();

// handles onClick scrolling in Home.jsx
export const StateContext = ({ children }) => {
  // Define your state variables or any other global data here
  const projectScroll = useRef(null);
  const contactScroll = useRef(null)

  const handleProjectScroll = () => {
    projectScroll.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactScroll = () => {
    contactScroll.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Define any functions or methods that will modify the state here

  // Create an object to store the data and functions you want to pass down through context
  const contextValue = {
    contactScroll,
    projectScroll,
    handleProjectScroll,
    handleContactScroll,
  };

  // Wrap the children components with the context provider
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
