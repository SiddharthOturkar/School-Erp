import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { Menu, Space, Tag, Button, message, Popconfirm } from "antd";
import DropdownCompo from "./StandardDashboard/DropdownCompo";
import AddsubModal from "./AddsubModal";
import {
  DashboardOutlined,
  UserOutlined,
  UnorderedListOutlined,
  DeleteTwoTone,
} from "@ant-design/icons/lib/icons";
import "./SubjectsCompo.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { addSubContext } from "./contexts/AddSubjectProvider";
import data from "../AllSub.json";

const { Sider } = Layout;

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
  // textAlign: 'center',
  minHeight: 120,
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#fff",
};

// Function to handle cancel in Popconfirm
const cancel = (e) => {
  console.log(e);
  message.error("Clicked on No");
};

function SubjectsCompo({ stand }) {
  // const [subjects,setSubjects] = useState([]);

  // useEffect(() => {

  // }, []);

  // Using Context to access subject data and removeSub function
  const { subject } = useContext(addSubContext);
  const [posts, setPosts] = useState([]);
  const { removeSub } = useContext(addSubContext);
  useEffect(() => {
    // Fetching subject data using Axios
    axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
      setPosts(response.data);
    });
  }, [posts]);

  const navigate = useNavigate();
  const a = JSON.parse(window.localStorage.getItem("subject"));
  const b = window.localStorage.getItem("dynamic");

  // Rendering subjects based on the standard selected
  for (let i = 0; i < a.length; i++) {
    if (a[i].standard === b) {
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
                    key: "/StudentsCompo",
                    icon: <UserOutlined />,
                  },
                  {
                    label: "Subjects",
                    className: "subjects",
                    key: "/SubjectsCompo",
                    icon: <UnorderedListOutlined />,
                  },
                ]}
              ></Menu>
            </Sider>
            <Layout>
              <Header style={headerStyle} className="headerStyle">
                <DropdownCompo title="Class 4" />
                <div className="subbtn">
                  <AddsubModal />
                </div>
              </Header>
              <hr></hr>
              <Content style={contentStyle} className="contentStyle">
                <h2>Core Subjects</h2>
                <hr />
                <Space size={[40, "small"]} wrap className="coresub">
                  {data.map((i) => {
                    if (i.std === window.localStorage.getItem("dynamic")) {
                      return (
                        <Tag key={i.id} bordered={false}>
                          {i.sub}
                        </Tag>
                      );
                    }
                  })}
                </Space>
                <Content style={contentStyle} className="additionalsub">
                  <h2>Additional Subjects</h2>
                  <hr />
                  {/* <h1 className="placeholder1">No Subjects</h1> */}

                  <ul className="subList">
                    {subject.map((post) => {
                      if (
                        post.standard === window.localStorage.getItem("dynamic")
                      ) {
                        return (
                          <Popconfirm
                            title="Delete the task"
                            description="Delete this subject..Are you sure? "
                            onConfirm={() => removeSub(post.id)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <li key={post.id}>
                              <Button type="link">
                                <Tag key={post.id} bordered={false}>
                                  {post.title}{" "}
                                  <DeleteTwoTone twoToneColor="red" />
                                </Tag>
                              </Button>{" "}
                            </li>
                          </Popconfirm>
                        );
                      }
                    })}
                  </ul>
                </Content>
              </Content>
            </Layout>
          </Layout>
        </div>
      );
    }
  }
  // If no subjects are found for the selected standard
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
                key: "/StudentsCompo",
                icon: <UserOutlined />,
              },
              {
                label: "Subjects",
                className: "subjects",
                key: "/SubjectsCompo",
                icon: <UnorderedListOutlined />,
              },
            ]}
          ></Menu>
        </Sider>
        <Layout>
          <Header style={headerStyle} className="headerStyle">
            <DropdownCompo title="Class 4" />
            <div className="subbtn">
              <AddsubModal />
            </div>
          </Header>
          <hr></hr>
          <Content style={contentStyle} className="contentStyle">
            <h2>Core Subjects</h2>
            <hr />
            <Space size={[40, "small"]} wrap className="coresub">
              {data.map((i) => {
                if (i.std === window.localStorage.getItem("dynamic")) {
                  return (
                    <Tag key={i.id} bordered={false}>
                      {i.sub}
                    </Tag>
                  );
                }
              })}
            </Space>
            <Content style={contentStyle} className="additionalsub">
              <h2>Additional Subjects</h2>
              <hr />
              <h1 className="placeholder1">No Subjects</h1>
            </Content>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default SubjectsCompo;
