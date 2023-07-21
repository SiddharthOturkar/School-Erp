import { createContext, useEffect, useState } from "react";

// Creating a new context called "addStudContext"
export const addStudContext = createContext();

function AddStudentProvider(props) {
  // State to manage the student data using local storage
  const [student, setStudent] = useState(() => {
    const studentData = localStorage.getItem("student");
    // If there's data in local storage, parse and use it, otherwise, start with an empty array
    return studentData ? JSON.parse(studentData) : [];
  });

  // State to manage the student marks data using local storage
  const [marks, setMarks] = useState(() => {
    const studentMarks = localStorage.getItem("marks");
    // If there's data in local storage, parse and use it, otherwise, start with an empty array
    return studentMarks ? JSON.parse(studentMarks) : [];
  });

  // Function to add a new student to the student state
  const addStud = (name, roll) => {
    setStudent([
      ...student,
      {
        name: name,
        roll: roll,
        id: Math.random(),
        std: window.localStorage.getItem("dynamic"), // Get the current class from localStorage
      },
    ]);
    console.log(student);
  };

  // Function to add student details including subject marks to the marks state
  const addStudDetails = (stdname, subname, marksget) => {
    setMarks([
      ...marks,
      {
        stdname: stdname,
        subname: subname,
        marksget: marksget,
        id: Math.random(),
        std: window.localStorage.getItem("dynamic"), // Get the current class from localStorage
      },
    ]);
  };

  // Save the student state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(student));
  }, [student]);

  // Save the marks state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("marks", JSON.stringify(marks));
  }, [marks]);

  // Provide the state and functions to the children components through the addStudContext.Provider
  return (
    <addStudContext.Provider
      value={{ student, marks, addStud, addStudDetails }}
    >
      {props.children}
    </addStudContext.Provider>
  );
}

// Export the AddStudentProvider component to make it available for use in other files
export default AddStudentProvider;
