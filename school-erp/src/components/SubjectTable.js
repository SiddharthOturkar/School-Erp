import { Table } from "antd";
import React, { useEffect, useState } from "react";

function SubjectTable() {
  const [data, setData] = useState([]);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const studentRoll = JSON.parse(localStorage.getItem("student"));
    const marksData = JSON.parse(localStorage.getItem("marks"));
    const dynamic = window.localStorage.getItem("dynamic");
    const datajson = marksData.filter((student1) => student1.std === dynamic);
    // setData(marksData);
    setData(datajson);
    setStudentData(studentRoll);
  }, []);

  // const len = studentData.length;
  const len = data.length;
  
  const uniqueSubNames = Array.from(new Set(data.filter((studentName)=>studentName.std ===window.localStorage.getItem("dynamic") ).map(record => record.subname)));

  const filteredData = uniqueSubNames.map(subname => {
    const matchingRecords = data.filter(record => record.subname === subname);
    const totalMarks = matchingRecords.reduce((total, curr) => total + parseInt(curr.marksget), 0);
    const sortedMarks = matchingRecords.sort((a, b) => b.marksget - a.marksget);
    return {
      subname: subname,
      total: totalMarks,
      // marksget: sortedMarks[0]?.marksget || "-",
      marksget: sortedMarks[0]?.stdname || "-",
      marksSecHigh: sortedMarks[1]?.stdname || "-",
      marksThiHigh: sortedMarks[2]?.stdname || "-",
    };
  });

  const columns = [
    {
      title: "Subject",
      dataIndex: "subname",
      key: "subname",
      render: (text) => {
        return <h3>{text}</h3>;
      },
    },
    {
      title: "Average Marks",
      dataIndex: "total",
      key: "total",
      render: (text) => {
        return <h3 style={{ fontWeight: "normal" }}>{Math.round(text / len)}</h3>;
      },
    },
    {
      title: "Top Scorer Rank 1",
      dataIndex: "marksget",
      key: "marksget",
    },
    {
      title: "Top Scorer Rank 2",
      dataIndex: "marksSecHigh",
      key: "marksSecHigh",
    },
    {
      title: "Top Scorer Rank 3",
      dataIndex: "marksThiHigh",
      key: "marksThiHigh",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={filteredData}
      size="middle"
      bordered
      pagination={true}
      style={{ textAlign: "center", width: "70%", paddingLeft: 50 }}
    />
  );
}

export default SubjectTable;
