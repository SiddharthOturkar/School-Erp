import { createContext, useEffect, useState } from "react";
import { message } from "antd";

// Creating a new context called "addSubContext"
export const addSubContext = createContext();

function AddSubjectProvider(props) {
  // State to manage the subject data using local storage
  const [subject, setSub] = useState(() => {
    const localData = localStorage.getItem("subject");
    // If there's data in local storage, parse and use it, otherwise, start with an empty array
    return localData ? JSON.parse(localData) : [];
  });

  // Function to add a new subject to the subject state
  const addSub = (title) => {
    setSub([
      ...subject,
      {
        title: title,
        id: Math.random(),
        standard: window.localStorage.getItem("dynamic"), // Get the current class from localStorage
      },
    ]);
  };

  // Function to remove a subject from the subject state
  const removeSub = (id) => {
    // Filter out the subject with the provided id and update the subject state
    setSub(subject.filter((sub) => sub.id !== id));
    // Display a success message using Ant Design's message component
    message.success("Subject deleted successfully");
  };

  // Save the subject state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("subject", JSON.stringify(subject));
  }, [subject]);

  // Provide the state and functions to the children components through the addSubContext.Provider
  return (
    <addSubContext.Provider value={{ subject, addSub, removeSub }}>
      {props.children}
    </addSubContext.Provider>
  );
}

// Export the AddSubjectProvider component to make it available for use in other files
export default AddSubjectProvider;
