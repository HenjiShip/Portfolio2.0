import React, { createContext, useContext, useRef } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  // Define your state variables or any other global data here
  const project = useRef(null);
  const contact = useRef(null)

  const handleProject = () => {
    project.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Define any functions or methods that will modify the state here

  // Create an object to store the data and functions you want to pass down through context
  const contextValue = {
    contact,
    project,
    handleProject,
    handleContact
  };

  // Wrap the children components with the context provider
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
