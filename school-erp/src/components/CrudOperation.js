
// import "antd/dist/antd.css";
// import "./App.css";
// import { Table } from "antd";
// import { useState } from "react";
// function CrudOperation() {
//     const [dataSource]=useState([
//         {
//             id:1,
//             name:"stud1",
//         },
//         {
//             id:2,
//             name:'stud2'
//         },
//         {
//             id:3,
//             name:'stud3'
//         },
//     ])
//     const columns = [
//         {
//             key:'1',
//             subject:'Mathss'
//         },
//         {
//             key:'2',
//             subject:'Englishh'
//         },
//         {
//             key:'3',
//             subject:'Sciencee'
//         },
//         {
//             key:'4',
//             subject:'Historyy'
//         },
//     ];
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <Table columns={columns}
//                     dataSource={dataSource}>
                    
//                 </Table>

//             </header>
//         </div>
//     )
// }

// export default CrudOperation;

import React, { useState } from 'react';
import './CrudOperation.css'
function CrudOperation() {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');

  const handleAddSubject = () => {
    const newSubject = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID for each subject
      name: subjectName
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName('');
  };

  return (
    <div>
      <ul >
        {subjects.map((subject) => (
          <li className="subject-list" key={subject.id}>{subject.name}</li>
        ))}
      </ul>

      <input
        type="text"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="Enter subject name"
      />
      <button onClick={handleAddSubject}>Add</button>
    </div>
  );
}

export default CrudOperation;
