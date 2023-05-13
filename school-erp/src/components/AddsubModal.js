import { Button,Modal,Input } from "antd";
import { useState } from "react";
import "./AddsubModal.css"
import {PlusOutlined} from '@ant-design/icons/lib/icons'

function AddsubModal() {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');

  const handleAddSubject = () => {
    const newSubject = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID for each subject
      name: subjectName,
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName('');
  };
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
        onOk={() => {handleAddSubject()}}
        onCancel={() => setModal2Open(false)}
      >
         <hr/>
         <div className="subjectAdd">
            <p>Subject:</p>
            <Input type="text"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="Enter subject name" />
         </div>

      </Modal>
      <ul >
        {subjects.map((subject) => (
          <li className="subject-list" key={subject.id}>{subject.name}</li>
        ))}
      </ul>
    </>
    )
}

export default AddsubModal;