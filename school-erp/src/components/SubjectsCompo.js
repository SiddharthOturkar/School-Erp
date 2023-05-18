import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu, Space, Tag, Button, message, Popconfirm } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo"
import AddsubModal from "./AddsubModal";
import { DashboardOutlined, UserOutlined, UnorderedListOutlined, DeleteTwoTone } from '@ant-design/icons/lib/icons'
import "./SubjectsCompo.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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

const confirm = (postId) => {
  // console.log(e);
  axios.delete(`https://retoolapi.dev/FlCaNC/posts/${postId}`)
    .then(response => {
      // Handle successful deletion
      console.log('Post deleted successfully.');
    })
    .catch(error => {
      // Handle error
      console.error('Error deleting post:', error);
    });
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};

function StudentsCompo() {
  const [posts, setPosts] = useState([]);

  

  useEffect(() => {
    axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

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
              { label: "Students", key: "/StudentsCompo", icon: <UserOutlined /> },
              { label: "Subjects", className: "subjects", key: "/SubjectsCompo", icon: <UnorderedListOutlined /> },
            ]}>
          </Menu>
        </Sider>
        <Layout>
          <Header style={headerStyle} className="headerStyle">
            <DropdownCompo />
            <div className="subbtn"><AddsubModal /></div>
          </Header>
          <hr></hr>
          <Content style={contentStyle} className="contentStyle">
            <h2>Core Subjects</h2>
            <hr />
            <Space size={[40, 'small']} wrap className="coresub">
              <Tag bordered={false}>Hindi</Tag>
              <Tag bordered={false}>English</Tag>
              <Tag bordered={false}>Maths</Tag>
              <Tag bordered={false}>Science</Tag>
              <Tag bordered={false}>Social Studies</Tag>
            </Space>
            <Content style={contentStyle} className="additionalsub">
              <h2>Additional Subjects</h2>
              <hr />
              {/* <h1 className="placeholder1">No Subjects</h1> */}

              <ul className="subList">
                {posts.map((post) => (
                  <Popconfirm
                    title="Delete the task"
                    description="Delete this subject..Are you sure? "
                    onConfirm={() => confirm(post.id)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  ><li key={post.id}><Button type="link"><Tag key={post.id} bordered={false}>{post.title} <DeleteTwoTone twoToneColor="red" /></Tag></Button></li>
                  </Popconfirm>))}
              </ul>

            </Content>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}


export default StudentsCompo;