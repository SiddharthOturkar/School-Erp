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

  // {student
  //   .filter((student) => student.std === window.localStorage.getItem("dynamic"))
  //   .map((student) => ({
  //     value: student.name,
  //     label: student.name,
  //   }))
  const uniqueStudentNames = Array.from(new Set(data.filter((studentName)=>studentName.std ===window.localStorage.getItem("dynamic") ).map(record => record.stdname)));

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


