import { Button,Modal,Input } from "antd";
import { useState,useEffect } from "react";
import axios from "axios";

import "./AddsubModal.css"
import {PlusOutlined} from '@ant-design/icons/lib/icons'

function AddsubModal() {
  // const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();

    const data = {
      title: e.target.title.value,
      body: e.target.body.value,
    };

    axios.post("https://retoolapi.dev/FlCaNC/posts", data).then((response) => {
      setPosts([...posts, response.data]);
    });
  };
  // const handleAddSubject = () => {
    
  //   const newSubject = {
  //     id: Math.random().toString(36).substr(2, 9), // Generate a random ID for each subject
  //     name: subjectName,
      
  //   };
  //   console.log(newSubject.name);
  //   setSubjectName(prevArray => [...prevArray,newSubject])

  //   setSubjects([...subjects, newSubject]);
  //   setSubjectName('');
  // };
  const [modal2Open, setModal2Open] = useState(false);
    return (
        <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
      <PlusOutlined/>Add Subject
      </Button>
     
      <Modal
        title="Add a Subject"
        centered
        open={modal2Open}
        okText="Add"
        // onOk={() => setModal2Open(false)}
        onOk={() => handleSubmit()}
        onCancel={() => setModal2Open(false)}
      >
         <hr/>
         <div className="subjectAdd">
            <p>Subject:</p>
            <Input type="text"
            name="title"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="Enter subject name" />
         </div>

      </Modal>
    </>
    )
}

export default AddsubModal;