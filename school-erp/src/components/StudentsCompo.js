import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu,Tabs,Input, Form, Button } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo"

import { DashboardOutlined, UserOutlined, UnorderedListOutlined} from '@ant-design/icons/lib/icons'
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
              { label: "Dashboard",  key: "/FourthStandard/", icon: <DashboardOutlined /> },
              { label: "Students",className: "students", key: "/StudentsCompo", icon: <UserOutlined /> },
              { label: "Subjects", key: "/SubjectsCompo", icon: <UnorderedListOutlined /> },
            ]}>
          </Menu>
        </Sider>
        <Layout>
          <Header style={headerStyle} className="headerStyle">
          <DropdownCompo/>
          </Header>
          <hr></hr>
          <Content style={contentStyle}>
          <Tabs onChange={onChange} type="card">
        <TabPane tab="Add Students" key="add-students">
          <Form onFinish={handleAdd}>
            <Form.Item
              label="Student Name"
              name="studentName"
              rules={[{ required: true, message: 'Please enter the student name' }]}
            >
              <Input size="small" className="inputcss" />
            </Form.Item>
            <Form.Item
              label="Roll No"
              name="rollNo"
              rules={[{ required: true, message: 'Please enter the roll number' }]}
            >
              <Input className="inputcss"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">ADD</Button>
            </Form.Item>
          </Form>
        </TabPane>

        
        <TabPane tab="Add Marks" key="add-marks">
          <Form onFinish={handleAdd}>
            <Form.Item
              label="Student Name"
              name="studentName"
              rules={[{ required: true, message: 'Please enter the student name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Roll No"
              name="rollNo"
              rules={[{ required: true, message: 'Please enter the roll number' }]}
              
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">ADD</Button>
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