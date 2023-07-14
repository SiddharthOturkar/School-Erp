import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu, Tabs, Input, Form, Button, Select, message } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo"
// import { useState } from "react";
import { DashboardOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons/lib/icons'
import "./StudentsCompo.css";
import { useNavigate } from "react-router-dom";
import UsersList from "./userList";
// import {useEffect } from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AddStudentProvider, { addStudContext } from "./contexts/AddStudentProvider";
import { addSubContext } from "./contexts/AddSubjectProvider";
const { Sider } = Layout;
const onChange = (key) => {
  console.log(key);
};


const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: '#fff',
  height: '100vh',
};
const headerStyle = {

  color: '#108ee9',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: 'grey',
  backgroundColor: '#fff',

};


function StudentsCompo() {
  const { TabPane } = Tabs;
  const [enteredUsername, setenteredUsername] = useState('');
  const [enteredroll, setenteredroll] = useState('');
  const [students, setStudents] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const {addStud} = useContext(addStudContext);
  const [name,setName] = useState('');
  const [ roll,setRoll] = useState('');
  const [marksAdd,setmarksAdd] = useState('');
  const {subject} = useContext(addSubContext);
  const {addStudDetails} = useContext(addStudContext);
  // const handleAdd1 = value => {
  //   setSelectedStudent(value);
  // };
  const {student} = useContext(addStudContext);
  const handleAdd1 = (e) => {

    e.preventDefault();
    addStudDetails(selectedStudent,selectedOption,marksAdd);
    console.log(selectedStudent);
    console.log(selectedOption);
    console.log(marksAdd);
    
    setSelectedOption('');
    setSelectedStudent('');
    setmarksAdd('');

   
    
};
  // useEffect(() => {
  //   axios.get('https://retoolapi.dev/FlCaNC/posts')
  //     .then(response => {
  //       setOptions(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // }, []);

  const staticOptions = [
    {
      class: "4th",
      key: 'Hindi',
      value: 'Hindi',
      label: "Hindi",
    },
    {
      class: "4th",
      key: 'English',
      value: 'English',
      label: "English",
    },
    {
      class: "4th",
      key: 'Maths',
      value: 'Maths',
      label: "Maths",
    },
    {
      class: "4th",
      key: 'Science',
      value: 'Science',
      label: "Science",
    },
    {
      class: "4th",
      key: 'Social Studies',
      value: 'Social Studies',
      label: "Social Studies",
    },
  ];


  const handleOptionSelect = value => {
    setSelectedOption(value);
    console.log("the value is :" +value);
  };


  // Combine static and fetched options
  // const combinedOptions = [...subject,...staticOptions];
  const [posts, setPosts] = useState([]);

  const [usersList, setUsersList] = useState([]);
  // useEffect(() => {
  //   axios.get("https://retoolapi.dev/EnIO7E/data").then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStud(name,roll);
    console.log(name);
    console.log(roll);
    const data = {
      Student_Name: name,
      Student_Roll: roll,
    };
    
    setName('');
    setRoll('');

    

    // axios.post("https://retoolapi.dev/EnIO7E/data", data).then((response) => {
    //   setPosts([...posts, response.data]);
    // });
  };

  const handleAdd = () => {

    //using context
    addStud(name,roll);
    console.log(name);
    console.log(roll);

    setName('');
    setRoll('');

  };

  const handleAllData = () =>{
    addStudDetails(selectedStudent,selectedOption,marksAdd);
    console.log(selectedStudent);
    console.log(selectedOption);
    console.log(marksAdd);
    
    setSelectedOption('');
    setSelectedStudent('');
    setmarksAdd('');
  }

  const usernameChangeHandler = (event) => {
    setName(event.target.value);
    setenteredUsername(event.target.value);
  }

  const rollChangeHandler = (event) => {
    setRoll(event.target.value);
    setenteredroll(event.target.value);
  }
  const navigate = useNavigate()

  // const addUserHandler = (uName, uRoll) => {
  //   setUsersList((prevUsersList) => {
  //     return [...prevUsersList, { name: uName, roll: uRoll }];
  //   });
  // }

  // function addAllData(name, roll, marksAdd)
  // {
  //   addStudDetails(name,roll,marksAdd);
  //   console.log(name + roll + marksAdd);
  // }
  
  // props.onAddUser(enteredUsername,enteredroll);
  return (

    <div style={{ display: "flex", flexDirection: "row" }}>
      <Layout>
        <Sider style={siderStyle} className="siderStyle">
          <div className="Schoolerp"><h4>School ERP </h4></div>
          <Menu onClick={({ key }) => {
            navigate(key)
          }}
            items={[
              { label: "Dashboard", key: "/FourthStandard/", icon: <DashboardOutlined /> },
              { label: "Students", className: "students", key: "/StudentsCompo", icon: <UserOutlined /> },
              { label: "Subjects", key: "/SubjectsCompo", icon: <UnorderedListOutlined /> },
            ]}>
          </Menu>
        </Sider>
        <Layout>
          <Header style={headerStyle} className="headerStyle">
            <DropdownCompo />
          </Header>
          <hr></hr>
          <Content style={contentStyle}>
            <Tabs onChange={onChange} type="card">
              <TabPane tab="Add Students" key="add-students" className="maindiv">
                <Form onSubmit={handleSubmit}>
                  <Form.Item
                    label="Student Name"
                    name="title"
                    htmlFor="studentName"
                    className="mainfields"
                    rules={[{ required: true, message: 'Please enter student name and try again' }]}
                  >
                    <Input id="studentName" value={name} type="text" name="Student_Name" size="small" className="inputcss" placeholder="Enter Student Name" onChange={usernameChangeHandler} />
                  </Form.Item>
                  <Form.Item
                    label="Roll No"
                    name="body"
                    className="mainfields"
                    rules={[{ required: true, message: 'Please enter a valid roll no and try again' }]}
                  >
                    <Input className="inputcss1" type="text" name="Student_Roll" value={roll} placeholder="Enter Roll No" onChange={rollChangeHandler} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="addbtn" onClick={handleAdd}>ADD</Button>
                  </Form.Item>
                </Form>
                <UsersList users={usersList}></UsersList>
              </TabPane>


              <TabPane tab="Add Marks" key="add-marks" className="maindiv">
                <Form onSubmit={handleAdd1}>
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
                        (option?.label ?? '').includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '')
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={student.map((student) => ({
                        value: student.name,
                        // value: student.id,
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
                        (optionA?.label ?? "").toLowerCase().localeCompare(
                          (optionB?.label ?? "").toLowerCase()
                        )
                      }
                      loading={loading}
                      value={selectedOption}
                      // options={combinedOptions}
                      options={subject.map((sub) => ({
                        value: sub.title,
                        // value : sub.id;
                        label: sub.title,
                      }))}
                      onChange={handleOptionSelect}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Enter Marks"
                    name="marks" 
                    className="mainfields"
                    rules={[
                      ({ getFieldValue }) => ({
                        required: getFieldValue('studentName') && getFieldValue('subjectName'),
                        message: 'Please enter marks',
                      }),
                    ]}
                    dependencies={['studentName', 'subjectName']}
                  >
                    <Input type="number" min={0} max={100} className="inputcss2" value={marksAdd} onChange={(e)=> setmarksAdd(e.target.value)}/>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="addbtn" onClick={handleAllData}>
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