//Importing required libraries
import React, { useEffect } from "react";
import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import {
  Menu,
  Tabs,
  Input,
  Form,
  Button,
  Select,
} from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo";
import {
  DashboardOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons/lib/icons";
import "./StudentsCompo.css";
import { useNavigate } from "react-router-dom";
// import UsersList from "./userList";
import { useContext, useState } from "react";
import  {addStudContext} from "./contexts/AddStudentProvider";
import { addSubContext } from "./contexts/AddSubjectProvider";
import data1 from "../AllSub.json";


//applied common required styling
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#fff",
  height: "100vh",
};
const headerStyle = {
  color: "#108ee9",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "grey",
  backgroundColor: "#fff",
};

function StudentsCompo() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { TabPane } = Tabs;

  // Defining diffrent states 
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredroll, setenteredroll] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [marksAdd, setmarksAdd] = useState("");
  const [disableRules, setDisableRules] = useState(false);
  const [studentOptions, setStudentOptions] = useState([]);
  // Using Contexts
  const { subject } = useContext(addSubContext);
  const { addStudDetails } = useContext(addStudContext);
  const { student } = useContext(addStudContext);
  const { addStud } = useContext(addStudContext);

  const { Sider } = Layout;
  const onChange = (key) => {
    console.log(key);
  };

  // Combining data from json file & localstorage to display subjects
  useEffect(() => {
    const stdValue = window.localStorage.getItem("dynamic");
    const filteredStudents = subject.filter((subject) => subject.standard === stdValue);
    const datajson = data1.filter((student1) => student1.std === stdValue);
    const mergedStudents = [...filteredStudents, ...datajson];
  
    const combinedOptions = mergedStudents.map((student) => ({
      value: student.sub || student.title,
      label: student.sub,
    }));
    setStudentOptions(combinedOptions);
  }, []);
  // console.log(studentOptions);
  
  // const handleAdd1 = (e) => {
  //     e.preventDefault();
  //     console.log('hello');

  // };

   const handleAllData = (e) => {

    if (selectedStudent != null && marksAdd>0 &&   selectedOption!= null ) {
      addStudDetails(selectedStudent, selectedOption, marksAdd);
      setDisableRules(true);
      console.log(disableRules);
      form.resetFields();

    }
    else
    {
    setDisableRules(false);
    console.log(selectedStudent);
    console.log(selectedOption);
    console.log(marksAdd);

    }
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);

  };


  const handleAdd = () => {

    if (name != null && roll >0 ) {
      addStud(name, roll);
      setDisableRules(true);
      console.log(disableRules);
      form.resetFields();
      setDisableRules(false);
      setName("");
      setRoll("");
    }
    else
    {
    setDisableRules(false);
    console.log(name);
    console.log(roll);
    }

  };

 

  const usernameChangeHandler = (event) => {
    setName(event.target.value);
    setenteredUsername(event.target.value);
  };

  const rollChangeHandler = (event) => {
    setRoll(event.target.value);
    setenteredroll(event.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Layout>
        <Sider style={siderStyle} className="siderStyle">
          <div className="Schoolerp">
            <h4>School ERP </h4>
          </div>
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            items={[
              {
                label: "Dashboard",
                key: "/FourthStandard/",
                icon: <DashboardOutlined />,
              },
              {
                label: "Students",
                className: "students",
                key: "/StudentsCompo",
                icon: <UserOutlined />,
              },
              {
                label: "Subjects",
                key: "/SubjectsCompo",
                icon: <UnorderedListOutlined />,
              },
            ]}
          ></Menu>
        </Sider>
        <Layout>
          <Header style={headerStyle} className="headerStyle">
            <DropdownCompo />
          </Header>
          <hr></hr>
          <Content style={contentStyle}>
            <Tabs onChange={onChange} type="card">
              <TabPane
                tab="Add Students"
                key="add-students"
                className="maindiv"
              >
                <Form form={form}>
                  <Form.Item
                    label="Student Name"
                    name="title"
                    htmlFor="studentName"
                    className="mainfields"
                    rules={
                      disableRules
                        ? [{message: "Please enter student name and try again"}]
                        : [
                            {
                              required: true,
                              message:<span style={{marginLeft:40}}>Please enter student name and try again</span>
                            },
                          ]
                    }
                  >
                    <Input
                      id="studentName"
                      type="text"
                      name="enteredUsername"
                      size="small"
                      className="inputcss"
                      placeholder="Enter Student Name"
                      onChange={usernameChangeHandler}
                      // onChange={(e) => setenteredUsername(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Roll No"
                    name="body"
                    className="mainfields"
                    
                    rules={
                      disableRules
                      ? []
                        : [
                            {
                              required: true,
                              message: <span style={{marginLeft:90}}>Please enter a valid roll no and try again</span>
                            },
                          ]
                    }
                  >
                    <Input
                      className="inputcss1"
                      type="text"
                      name="Student_Roll"
                      value={roll}
                      placeholder="Enter Roll No"
                      onChange={rollChangeHandler}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      // htmlType="submit"
                      className="addbtn"
                      onClick={handleAdd}
                    >
                      ADD
                    </Button>
                  </Form.Item>
                </Form>
            
                {/* <UsersList users={usersList}></UsersList> */}
              </TabPane>

              <TabPane tab="Add Marks" key="add-marks" className="maindiv">
                {/* <Form form={form} onFinish={handleAdd1}> */}
                <Form form={form}>
                  <Form.Item
                    label="Select a Student"
                    name="studentName"
                    className="mainfields"
                  >
                    <Select
                      className="inputcss"
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={student
                        .filter(
                          (student) =>
                            student.std ===
                            window.localStorage.getItem("dynamic")
                        )
                        .map((student) => ({
                          value: student.name,
                          label: student.name,
                        }))}
                        
                      value={selectedStudent} // Set the value of the Select component
                      onChange={setSelectedStudent} // Update the selected value
                    />
                  </Form.Item>

                  <Form.Item
                    label="Select a Subject"
                    name="subjectName"
                    className="mainfields"
                    // rules={[{ required: true }]}
                  >
                    <Select
                      className="inputcss"
                      showSearch
                      style={{
                        width: 200,
                      }}
                      placeholder="Select"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      value={selectedOption}
                      // 
                      options={studentOptions}
                      onChange={handleOptionSelect}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Enter Marks"
                    name="marks"
                    className="mainfields"
                    rules={  disableRules
                      ? []
                        :[
                      ({ getFieldValue }) => ({
                        required:
                        true &&
                          getFieldValue("studentName") &&
                          getFieldValue("subjectName"),
                        message: <span style={{marginLeft:70}}>Please enter marks</span>
                      }),
                    ]}
                    dependencies={["studentName", "subjectName"]}
                  >
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      className="inputcss2"
                      value={marksAdd}
                      onChange={(e) => setmarksAdd(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="button"
                      className="addbtn"
                      onClick={handleAllData}
                    >
                      ADD
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default StudentsCompo;



// import React, { useState, useEffect } from "react";
// import { Form, Select } from "antd";
// import data from "../AllSub.json";

// function YourComponent() {
//   const [form] = Form.useForm();
//   const [studentOptions, setStudentOptions] = useState([]);

//   useEffect(() => {
//     const stdValue = window.localStorage.getItem("dynamic");
//     const filteredStudents = student.filter((student) => student.std === stdValue);
//     const datajson = data.filter((student1)=>student1.std===stdValue);
//     const combinedOptions = filteredStudents.map((student) => ({
//       value: student.name,
//       label: student.name,
//     }));
//     setStudentOptions(combinedOptions);
//   }, []);

//   useEffect(() => {
//     const stdValue = window.localStorage.getItem("dynamic");
//     const filteredStudents = student.filter((student) => student.std === stdValue);
//     const datajson = data.filter((student1) => student1.std === stdValue);
  
//     const mergedStudents = [...filteredStudents, ...datajson];
  
//     const combinedOptions = mergedStudents.map((student) => ({
//       value: student.name,
//       label: student.name,
//     }));
//     setStudentOptions(combinedOptions);
//   }, []);
  

//   return (
//     <Form form={form}>
//       <Form.Item label="Select Student" name="studentName">
//         <Select
//           showSearch
//           style={{ width: 200 }}
//           placeholder="Select Student"
//           optionFilterProp="children"
//           filterOption={(input, option) =>
//             option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
//           }
//           options={studentOptions}
//         />
//       </Form.Item>
//     </Form>
//   );
// }

// export default YourComponent;
