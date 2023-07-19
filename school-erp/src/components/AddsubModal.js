import { Button, Modal, Input } from "antd";
import { addSubContext } from "./contexts/AddSubjectProvider";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./AddsubModal.css"
import { PlusOutlined } from '@ant-design/icons/lib/icons'


function AddsubModal({title}) {
  const { addSub } = useContext(addSubContext);
  // const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState([]);
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);

  const handleSubmit = () => {
    addSub(subjectName) //using context
    console.log(subjectName);
    setSubjectName('') //clearing the input field
    setModal2Open(false);
    // axios api request to post data
    // axios.post('https://retoolapi.dev/FlCaNC/posts', { title: subjectName })
    //   .then(response => {
    //     // Handle successful response
    //     console.log('Subject added successfully');
    //     setModal2Open(false);
    //   })
    //   .catch(error => {
    //     // Handle error
    //     console.error('Error adding subject:', error);
    //   });
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
          <div style={{display:"flex", flexDirection:'row', marginTop:20}}>
            <p  style={{textAlign:"center",padding:10}}>Subject:</p>
            <Input
              type="text"
              name="title"
              standard= {title}
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              placeholder="Enter a new subject"
              style={{height:40}}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddsubModal;