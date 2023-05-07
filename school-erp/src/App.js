import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import ClassStandards from './components/ClassStandards';
import FourthClass from './components/StandardDashboard/FourthClass';
import StudentsCompo from './components/StudentsCompo';
import SubjectsCompo from './components/SubjectsCompo';
import DropdownCompo from './components/StandardDashboard/DropdownCompo'
// import {Button} from  'antd';

const router = createBrowserRouter([
  {path:'/',element:<ClassStandards/>},
  {path:'/FourthStandard/*',element:<FourthClass/>},
  {path:'/StudentsCompo',element:<StudentsCompo/>},
  {path:'/SubjectsCompo',element:<SubjectsCompo/>},
  {path:'/DropdownCompo',element:<DropdownCompo/>},


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
