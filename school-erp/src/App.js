// import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import ClassStandards from './components/ClassStandards';
// import {Button} from  'antd';

function App() {
  return (
    <div className="App-header">
      <h3>Enter a Class</h3>
      {/* <Button type="primary">My Antd Button</Button> */}
      <ClassStandards/>
   </div>
  );
}

export default App;
