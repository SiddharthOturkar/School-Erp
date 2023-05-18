import { Button, Modal, Input } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

import "./AddsubModal.css"
import { PlusOutlined } from '@ant-design/icons/lib/icons'

function AddsubModal() {
  // const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleSubmit = () => {
    // Make an API request to add the subject using Axios
    axios.post('https://retoolapi.dev/FlCaNC/posts', { title: subjectName })
      .then(response => {
        // Handle successful response
        console.log('Subject added successfully');
        setModal2Open(false);
      })
      .catch(error => {
        // Handle error
        console.error('Error adding subject:', error);
      });
  };

  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        <PlusOutlined />Add Subject
      </Button>

      <Modal
        title="Add a Subject"
        centered
        open={modal2Open}
        okText="Add"
        onOk={handleSubmit}
        onCancel={() => setModal2Open(false)}
      >
        <hr />
        <div className="subjectAdd">
          <p>Subject:</p>
          <Input
            type="text"
            name="title"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="Enter subject name"
          />
        </div>
      </Modal>
    </>
  )
}

export default AddsubModal;