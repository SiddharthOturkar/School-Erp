// Importing required libraries & Components

import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu } from "antd";
import DropdownCompo from "./DropdownCompo";
import { DashboardOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons/lib/icons'
import './FourthClass.css'
import { useNavigate } from "react-router-dom";
import TableStudent from "../TableStudent";
import SubjectTable from "../SubjectTable";

const { Sider } = Layout;

// Defined some basic styling 
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

function FourthClass() {
  const navigate = useNavigate()
  // Calling the data from localstorage
  const a = JSON.parse(window.localStorage.getItem("marks"));
  const b = window.localStorage.getItem("dynamic");
  for (let i = 0; i < a.length; i++) {
    //Applied if else to displaying data or no data
    if (a[i].std===b) {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Layout>
            <Sider style={siderStyle} className="siderStyle">
              <div className="Schoolerp"><h4>School ERP </h4></div>
              <Menu onClick={({ key }) => navigate(key)} items={[
                { label: "Dashboard", className: "dashboard", key: "/FourthStandard/", icon: <DashboardOutlined /> },
                { label: "Students", key: "/StudentsCompo", icon: <UserOutlined /> },
                { label: "Subjects", key: "/SubjectsCompo", stand: "trial", icon: <UnorderedListOutlined /> },
              ]}>
              </Menu>
            </Sider>
            <Layout>
              <Header style={headerStyle} className="headerStyle">
                <DropdownCompo  />
              </Header>
              <hr className="hrline"></hr>
              <Content style={contentStyle}>
                <h2 style={{ textAlign: "left", paddingLeft: 50, color: "black" }}>Student-Wise Total Marks</h2>
                <hr style={{ marginLeft: 50, marginTop: -40, marginBottom: 40, color: "black" }}></hr>
                <TableStudent />
                <h2 style={{ textAlign: "left", paddingLeft: 50, color: "black" }}>Subject-Wise Average Marks & Top Scorers</h2>
                <hr style={{ marginLeft: 50, marginTop: -40, marginBottom: 40, color: "black" }}></hr>
                <SubjectTable />
              </Content>
            </Layout>
          </Layout>
        </div>
      );
    }
}
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Layout>
          <Sider style={siderStyle} className="siderStyle">
            <div className="Schoolerp"><h4>School ERP </h4></div>
            <Menu onClick={({ key }) => navigate(key)} items={[
              { label: "Dashboard", className: "dashboard", key: "/FourthStandard/", icon: <DashboardOutlined /> },
              { label: "Students", key: "/StudentsCompo", icon: <UserOutlined /> },
              { label: "Subjects", key: "/SubjectsCompo", stand: "trial", icon: <UnorderedListOutlined /> },
            ]}>
            </Menu>
          </Sider>
          <Layout>
            <Header style={headerStyle} className="headerStyle">
              <DropdownCompo  />
            </Header>
            <hr></hr>
            <Content style={contentStyle}>
              <h1>No Data Found</h1>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
}

export default FourthClass;
