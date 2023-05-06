
import {Menu} from "antd";
import {DashboardOutlined,UserOutlined,UnorderedListOutlined} from '@ant-design/icons/lib/icons'
import { useNavigate } from "react-router-dom";

function StudentsCompo() {
  const navigate = useNavigate()
  return (
    <div style={{display:"flex" ,flexDirection:"row"}}>
      <Menu onClick={({key})=>{
          navigate(key)
      }} 
      items={[
        {label:"Dashboard",key:"/FourthStandard/",icon:<DashboardOutlined/>},
        {label:"Students",key:"/StudentsCompo",success:true,icon:<UserOutlined/>},
        {label:"Subjects",key:"/SubjectsCompo",  icon:<UnorderedListOutlined/>},
    ]}>
    </Menu>
    </div>
  );
}


export default StudentsCompo;