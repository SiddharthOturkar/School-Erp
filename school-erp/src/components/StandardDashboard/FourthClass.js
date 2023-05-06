import { Layout } from "antd";
import { Header,Content } from "antd/es/layout/layout";
import {Menu} from "antd";
import {DashboardOutlined,UserOutlined,UnorderedListOutlined} from '@ant-design/icons/lib/icons'
import './FourthClass.css'
import { useNavigate } from "react-router-dom";
// import StudentsCompo from "../StudentsCompo";
const {Sider } = Layout;


const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: '#fff',
  height:'100vh',
};
const headerStyle = {
  // textAlign: 'center',
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
  return (
    <div style={{display:"flex" ,flexDirection:"row"}}>
      {/* <Menu onClick={({key})=>{
          navigate(key)
      }} 
      items={[
        {label:"Dashboard",key:"/FourthStandard/", success:true,icon:<DashboardOutlined/>},
        {label:"Students",key:"/StudentsCompo",icon:<UserOutlined/>},
        {label:"Subjects",key:"/SubjectsCompo", icon:<UnorderedListOutlined/>},
    ]}>
    </Menu> */}
    {/* <Content/> */}
    

      <Layout>
        <Sider style={siderStyle} className="siderStyle">
          <h4>School ERP </h4>
        <Menu onClick={({key})=>{
          navigate(key)
      }} 
      items={[
        {label:"Dashboard",key:"/FourthStandard/", success:true,icon:<DashboardOutlined/>},
        {label:"Students",key:"/StudentsCompo",icon:<UserOutlined/>},
        {label:"Subjects",key:"/SubjectsCompo", icon:<UnorderedListOutlined/>},
    ]}>
    </Menu>
        </Sider>
        
      <Layout>
        <Header style={headerStyle} className="headerStyle">Class 4<sup>th</sup></Header>
        <hr></hr>
        <Content style={contentStyle}>No Data</Content>
      </Layout>
    </Layout>
    </div>
  );
}

// function Content()
// {
//   return <div>
//     <Routes>
//       <Route path="/FourthStandard/*" element={<div>Dashboard</div>}></Route>
//       <Route path="/students" element={<div>Students</div>}></Route>
//       <Route path="/subjects" element={<div>Subjects</div>}></Route>
//     </Routes>

//   </div>;
// }

export default FourthClass;