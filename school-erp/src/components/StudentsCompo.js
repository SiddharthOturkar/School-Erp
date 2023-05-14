import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu, Tabs, Input, Form, Button, Select } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo"

import { DashboardOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons/lib/icons'
import "./StudentsCompo.css";
import { useNavigate } from "react-router-dom";

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
  const handleAdd = (values) => {
    // Handle form submission with the entered values
    console.log(values);
  };
  const navigate = useNavigate()
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
                <Form onFinish={handleAdd}>
                  <Form.Item
                    label="Student Name"
                    name="studentName"
                    className="mainfields"
                    rules={[{ required: true, message: 'Please enter student name and try again' }]}
                  >
                    <Input size="small" className="inputcss" />
                  </Form.Item>
                  <Form.Item
                    label="Roll No"
                    name="rollNo"
                    className="mainfields"
                    rules={[{ required: true, message: 'Please enter a valid roll no and try again' }]}
                  >
                    <Input className="inputcss1" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="addbtn">ADD</Button>
                  </Form.Item>
                </Form>
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