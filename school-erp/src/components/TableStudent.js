// import axios from "axios";
// import {Table } from "antd";
// import React, { useContext, useEffect, useState } from "react";
// import { addStudContext } from "./contexts/AddStudentProvider";


// function TableStudent() {

//     const [data, setData] = useState([]);
//     const [dismarks,setDismarks] = useState([]);
//     const [cmd,setcmdData] = useState([]);
//     const [studentNames, setStudentNames] = useState({});
//     const {student} = useContext(addStudContext)    
//       useEffect(() => {
//         // const localData = localStorage.getItem('student')
//         const localData = localStorage.getItem('marks')
//         setData(JSON.parse(localData))
        
//         const studentNamesData = JSON.parse(localData);
//         const names = {};

//         studentNamesData.forEach((student) => {
//           names[student.key] = student.value; // Store student names in an object with key as the studentId
//         });
//         setStudentNames(names);


//         // const localData1 = localStorage.getItem('student')
//         // setDismarks(JSON.parse(localData1))
        
//         // setcmdData([...data,...dismarks])
//         // console.log(cmd);
//           // .get("https://retoolapi.dev/vNCBZv/data")
//           // .then((response) => {
//           //   const modifiedData = response.data.map((record, index) => ({
//           //     ...record,
//           //     prevStudentName: index === 0 ? null : response.data[index - 1].studentName,
//           //   }));
//           //   setData(modifiedData);
//           //   fetchStudentNames();
//           // })
//           // .catch((error) => {
//           //   console.error("Error fetching data:", error);
//           // });
//       }, []);

//       useEffect(()=>{
//         const localData1 = localStorage.getItem('student')
//         setDismarks(JSON.parse(localData1))
//       },[]);
     
//       const fetchStudentNames = () => {
//         axios
//           .get("https://retoolapi.dev/EnIO7E/data") // Fetching the student names from another API
//           .then((response) => {
//             const studentNamesData = response.data;
//             const names = {};
//             studentNamesData.forEach((student) => {
//               names[student.key] = student.value; // Store student names in an object with key as the studentId
//             });
//             setStudentNames(names);
//           })
//           .catch((error) => {
//             console.error("Error fetching student names:", error);
//           });
//       };

//       const columns = [
//         {
//             title: "Student Name",
//             dataIndex: "stdname",
//             key: "stdname",
//             render: (text, record) => <h3>{studentNames[record.studentName]}</h3>,
//             // render : ()=> data.filter((obj,index)=>{
//             //    data.findIndex((item)=>item.name === obj.name === index)
//             // })
//             // render: (text, record) => <h3>{data[record.stdname]}</h3>,
//             // render: (text, record) => <h3>{data[text]}</h3>,
//             // render: {student.map((i)=>{
//             //   <h2>i.name </h2>
//             // })},

//         },
//         {
//           title: "Roll Number",
//           dataIndex: "roll",
//           key: "roll",
//           // render: (studentName, record, index) => {
//           //   if (index === 0 || studentName !== record.prevStudentName) {
//           //     return studentName;
//           //   }
//           //   return null;
//           // },
//           // render: <h4>{dismarks}</h4>
//         },
//         {
//           title: "Total Marks",
//           dataIndex: "marksget",
//           key: "marksget",
//           // render: (marks, record, index) => {
//           //   if (index === 0 || record.studentName !== record.prevStudentName) {
//           //     const filteredData = data.filter((r) => r.studentName === record.studentName);
//           //     const totalMarks = filteredData.reduce((sum, r) => sum + parseInt(r.marks), 0);
//           //     return totalMarks;
//           //   }
//           //   return null;
//           // },
//         },
//       ];
//     return (
//         // <Table columns={columns} dataSource={data.filter((record, index) => (index === 0 || record.studentName !== data[index - 1].studentName))} />
//         // <Table columns={columns} dataSource={student} />
//         <Table columns={columns} dataSource={data}/>

    
//       )
// }

// export default TableStudent;
import { Table } from "antd";
import React, { useEffect, useState } from "react";

function TableStudent() {
  const [data, setData] = useState([]);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const studentRoll = JSON.parse(localStorage.getItem("student"));
    const marksData = JSON.parse(localStorage.getItem("marks"));

    setData(marksData);
    setStudentData(studentRoll);
  }, []);

  const uniqueStudentNames = Array.from(new Set(data.map(record => record.stdname)));

  const filteredData = uniqueStudentNames.map(studentName => {
    const matchingRecord = data.find(record => record.stdname === studentName);
    return matchingRecord;
  });

  const columns = [
    {
      title: "Student Name",
      dataIndex: "stdname",
      key: "stdname",
      render: (text) => {
        return <h3>{text}</h3>;
      },
    },
    {
      title: "Roll Number",
      dataIndex: "roll",
      key: "roll",
      render: (text, record) => {
        const matchingStudent = studentData.find(
          (student) => student.name === record.stdname
        );

        if (matchingStudent) {
          return <h3 style={{ fontWeight: "normal" }}>{matchingStudent.roll}</h3>;
        }
        return null;
      },
    },
    {
      title: "Total Marks",
      dataIndex: "marksget",
      key: "marksget",

      render: (text, record) => {
        const totalMarks = data.reduce((total, curr) => {
          if (curr.stdname === record.stdname) {
            return total + parseInt(curr.marksget);
          }
          return total;
        }, 0);

        return <h3 style={{ fontWeight: "normal" }}>{totalMarks}</h3>;
      },
    },
  ];

  return (
    <Table
      columns={columns} 
      dataSource={filteredData}
      size="small"
      bordered
      pagination={false}
      style={{ textAlign: "center", width: '50%', paddingLeft: 50 }}
    />
  );
}

export default TableStudent;


