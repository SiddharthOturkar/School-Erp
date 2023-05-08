import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo"

import { DashboardOutlined, UserOutlined, UnorderedListOutlined} from '@ant-design/icons/lib/icons'
import "./StudentsCompo.css";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;



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
          <h1> No Data </h1>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}


export default StudentsCompo;