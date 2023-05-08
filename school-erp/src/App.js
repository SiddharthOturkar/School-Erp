import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import ClassStandards from './components/ClassStandards';
import FourthClass from './components/StandardDashboard/FourthClass';
import StudentsCompo from './components/StudentsCompo';
import SubjectsCompo from './components/SubjectsCompo';
import DropdownCompo from './components/StandardDashboard/DropdownCompo';
import FifthClass from './components/StandardDashboard/FifthClass';
import SixthClass from './components/StandardDashboard/SixthClass';
import SeventhClass from './components/StandardDashboard/SeventhClass';
import EighthClass from './components/StandardDashboard/EighthClass';
import NinthClass from './components/StandardDashboard/NinthClass';

// import {Button} from  'antd';

const router = createBrowserRouter([
  {path:'/',element:<ClassStandards/>},
  {path:'/FourthStandard/*',element:<FourthClass/>},
  {path:'/StudentsCompo',element:<StudentsCompo/>},
  {path:'/SubjectsCompo',element:<SubjectsCompo/>},
  {path:'/DropdownCompo',element:<DropdownCompo/>},
  {path:'/FifthStandard',element:<FifthClass/>},
  {path:'/SixthStandard',element:<SixthClass/>},
  {path:'/SeventhStandard',element:<SeventhClass/>},
  {path:'/EighthStandard',element:<EighthClass/>},
  {path:'/NinthStandard',element:<NinthClass/>},


]);


function App() {
  return (
    <div>
      {/* <Button type="primary">My Antd Button</Button> */}
      <RouterProvider router={router}/>
   </div>
  );
}

export default App;
