import axios from "axios";
import { Table } from "antd";
import React, { useEffect, useState } from "react";

function SubjectTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://retoolapi.dev/vNCBZv/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
  }, []);

  const columns = [
    {
      title: "Subject",
      dataIndex: "subjectName",
      key: "subjectName",
      render: (text, record, index) => {
        if (index === 0 || text !== data[index - 1].subjectName) {
          return <h3>{text}</h3>;
        } else {
          return null;
        }
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default SubjectTable;
