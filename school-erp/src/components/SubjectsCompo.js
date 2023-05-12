import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu,Button, Space, Tag   } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo"
import AddsubModal from "./AddsubModal";
import { DashboardOutlined, PlusOutlined,UserOutlined, UnorderedListOutlined} from '@ant-design/icons/lib/icons'
import "./SubjectsCompo.css";
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
  // textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: 'black',
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
              { label: "Students", key: "/StudentsCompo", icon: <UserOutlined /> },
              { label: "Subjects",className: "subjects", key: "/SubjectsCompo", icon: <UnorderedListOutlined /> },
            ]}>
          </Menu>
        </Sider>
        <Layout>
          <Header style={headerStyle} className="headerStyle">
          <DropdownCompo/>
          <div className="subbtn"><AddsubModal/></div>
          </Header>
          <hr></hr>
          <Content style={contentStyle} className="contentStyle">
          <h2>Core Subjects</h2>
          <hr/>
            <Space size={[40, 'small']} wrap className="coresub">
              <Tag bordered={false}>Hindi</Tag>
              <Tag bordered={false}>English</Tag>
              <Tag bordered={false}>Maths</Tag>
              <Tag bordered={false}>Science</Tag>
              <Tag bordered={false}>Social Studies</Tag>
            </Space>
            <Content style={contentStyle} className="additionalsub">
          <h2>Additional Subjects</h2>
          <hr/>
          <h1 className="placeholder1">No Subjects</h1>
          
          </Content>
          </Content>

          
        </Layout>
      </Layout>
    </div>
  );
}


export default StudentsCompo;