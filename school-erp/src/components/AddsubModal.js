import { Button,Modal,Input } from "antd";
import { useState } from "react";
import "./AddsubModal.css"

function AddsubModal() {
  const [modal2Open, setModal2Open] = useState(false);
    return (
        <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
       ABC
      </Button>
     
      <Modal
        title="Add a Subject"
        centered
        open={modal2Open}
        okText="Add"
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
         <hr/>
         <div className="subjectAdd">
            <p>Subject:</p>
            <Input placeholder="Enter a new subject" />
         </div>

      </Modal>
    </>
    )
}

export default AddsubModal;