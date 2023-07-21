// Importing necessary components and libraries
import { Button, Modal, Input } from "antd";
import { addSubContext } from "./contexts/AddSubjectProvider";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./AddsubModal.css";
import { PlusOutlined } from "@ant-design/icons/lib/icons";

// Functional component definition for AddsubModal
function AddsubModal({ title }) {
  // Getting the addSub function from the addSubContext using useContext
  const { addSub } = useContext(addSubContext);

  // State to manage the subject name entered in the input field
  const [subjectName, setSubjectName] = useState([]);

  // State to store data fetched from an API using Axios
  const [posts, setPosts] = useState([]);

  // Fetching data from an API using Axios on component mount
  useEffect(() => {
    axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  // Function to handle the submission of a new subject
  const handleSubmit = () => {
    addSub(subjectName); // Using the addSub function from context to add the new subject
    console.log(subjectName);
    setSubjectName(""); // Clearing the input field after submission
    setModal2Open(false); // Closing the modal after successful submission
  };

  // Function to handle keydown event (e.g., when the Enter key is pressed)
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSubjectName(event.target.value);
      setModal2Open(false);
      addSub(subjectName); // Using the addSub function from context to add the new subject
      console.log(subjectName);
      setSubjectName(""); // Clearing the input field after submission
    }
  };

  // State to manage the visibility of the modal
  const [modal2Open, setModal2Open] = useState(false);

  // Render the Add Subject button and the modal for adding subjects
  return (
    <>
      {/* Button to trigger the modal */}
      <Button type="primary" onClick={() => setModal2Open(true)}>
        <PlusOutlined />
        Add Subject
      </Button>

      {/* Modal to add a new subject */}
      <Modal
        title="Add a Subject"
        centered
        open={modal2Open}
        okText="Add"
        onOk={handleSubmit} // Handling the click of the Add button in the modal
        onCancel={() => setModal2Open(false)} // Handling the cancel event
      >
        <hr />
        <div className="subjectAdd">
          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <p style={{ textAlign: "center", padding: 10 }}>Subject:</p>
            {/* Input field to enter a new subject */}
            <Input
              type="text"
              name="title"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              onKeyDown={handleKeyDown} // Handling the keydown event (e.g., Enter key press)
              placeholder="Enter a new subject"
              style={{ height: 40 }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

// Export the AddsubModal component to make it available for use in other files
export default AddsubModal;
