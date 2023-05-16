import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu, Tabs, Input, Form, Button, Select } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo"
import { useState } from "react";
import { DashboardOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons/lib/icons'
import "./StudentsCompo.css";
import { useNavigate } from "react-router-dom";
import UsersList from "./userList";
import {useEffect } from "react";
import axios from "axios";

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
  const [enteredUsername, setenteredUsername]=useState('');
  const [enteredroll, setenteredroll]=useState('');

  const [posts, setPosts] = useState([]);

  const [usersList,setUsersList]=useState([]);
  useEffect(() => {
    axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      body: e.target.body.value,
    };

    axios.post("https://retoolapi.dev/FlCaNC/posts", data).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleAdd = (event) => {
    // Handle form submission with the entered values
    event.preventDefault();
    console.log(enteredUsername,enteredroll);
    setenteredUsername('');
    setenteredroll('');
  };

  const usernameChangeHandler = (event)=>{
    setenteredUsername(event.target.value);
  }

  const rollChangeHandler = (event)=>{
    setenteredroll(event.target.value);
  }
  const navigate = useNavigate()

  const addUserHandler = (uName,uRoll)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,roll:uRoll}];
    });
  }

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
                    <Input id="studentName"   value={enteredUsername} type="text" name="title" size="small" className="inputcss" onChange={usernameChangeHandler} />
                  </Form.Item>
                  <Form.Item
                    label="Roll No"
                    name="body"
                    className="mainfields"
                    rules={[{ required: true, message: 'Please enter a valid roll no and try again' }]}
                  >
                    <Input className="inputcss1" type="text" name="body"  value={enteredroll} onChange={rollChangeHandler}/>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="addbtn" onClick={handleAdd} onAddUser={addUserHandler}>ADD</Button>
                  </Form.Item>
                </Form>
                <UsersList users={usersList}></UsersList>
              </TabPane>


              <TabPane tab="Add Marks" key="add-marks" className="maindiv">
                <Form onFinish={handleAdd}>
                  <Form.Item
                    label="Select a Student"
                    name="studentName"
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
                      options={[
                        {
                          value: "1",
                          label: "Student A",
                        },
                        {
                          value: "2",
                          label: "Student B",
                        },
                        {
                          value: "3",
                          label: "Student C",
                        },
                        {
                          value: "4",
                          label: "Student D",
                        },
                        {
                          value: "5",
                          label: "Student E",
                        },
                        {
                          value: "6",
                          label: "Student F",
                        },
                      ]}
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
                      options={[
                        {
                          value: "1",
                          label: "Hindi",
                        },
                        {
                          value: "2",
                          label: "English",
                        },
                        {
                          value: "3",
                          label: "Marathi",
                        },
                        {
                          value: "4",
                          label: "Maths",
                        },
                        {
                          value: "5",
                          label: "Science",
                        },
                        {
                          value: "6",
                          label: "Social Studies",
                        },
                      ]}
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
                    <Input type="number" min={0} max={100} className="inputcss2" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="addbtn">
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