import axios from "axios";
import {Table } from "antd";
import React, { useEffect, useState } from "react";


function TableStudent() {

    const [data, setData] = useState([]);
    const [studentNames, setStudentNames] = useState({});

      useEffect(() => {
        axios
          .get("https://retoolapi.dev/vNCBZv/data")
          .then((response) => {
            const modifiedData = response.data.map((record, index) => ({
              ...record,
              prevStudentName: index === 0 ? null : response.data[index - 1].studentName,
            }));
            setData(modifiedData);
            fetchStudentNames();
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
     
      const fetchStudentNames = () => {
        axios
          .get("https://retoolapi.dev/EnIO7E/data") // Fetching the student names from another API
          .then((response) => {
            const studentNamesData = response.data;
            const names = {};
            studentNamesData.forEach((student) => {
              names[student.key] = student.value; // Store student names in an object with key as the studentId
            });
            setStudentNames(names);
          })
          .catch((error) => {
            console.error("Error fetching student names:", error);
          });
      };

      const columns = [
        {
            title: "Student Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => <h3>{studentNames[record.studentName]}</h3>,
        },
        {
          title: "Roll Number",
          dataIndex: "studentName",
          key: "studentName",
          render: (studentName, record, index) => {
            if (index === 0 || studentName !== record.prevStudentName) {
              return studentName;
            }
            return null;
          },
        },
        {
          title: "Total Marks",
          dataIndex: "marks",
          key: "marks",
          render: (marks, record, index) => {
            if (index === 0 || record.studentName !== record.prevStudentName) {
              const filteredData = data.filter((r) => r.studentName === record.studentName);
              const totalMarks = filteredData.reduce((sum, r) => sum + parseInt(r.marks), 0);
              return totalMarks;
            }
            return null;
          },
        },
      ];
    return (
        <Table columns={columns} dataSource={data.filter((record, index) => (index === 0 || record.studentName !== data[index - 1].studentName))} />
    )
}

export default TableStudent;