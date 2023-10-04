
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import StuSignUp from './components/StuSignUp';
import StaffSignUp from './components/StaffSignUp';
import Login from './components/Login';
import StuLogin from './StuLogin';
import Log from './components/Log';
import Editpage from './components/EditPage';
import Stu_Application from './Stu_Application';
import HomePage from './components/HomePage';
import Stu_record from './components/Stu_record';
import {Routes,Route} from "react-router-dom"
// import Projectpage from  './Projectpage';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Log />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/StuLogin' element={<StuLogin />} />
        <Route path='/StuSignUp' element={<StuSignUp />} />
        <Route path='/StaffSignUp' element={<StaffSignUp />} />
        <Route path='/EditPage' element={<Editpage />} />
        <Route path='/Stu_Application' element={<Stu_Application />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Stu_record' element={<Stu_record />} />
        {/* <Route path='/Projectpage' element={<Projectpage />} /> */}
      </Routes>
      {/* <Login/> */}
    </>
  );
}

export default App;
