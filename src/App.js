import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import MyProfile from './components/myprofile';
import EditProfile from './components/editprofile';
import ViewPosts from './components/viewposts';
import UserDashboard from './components/userdashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<UserDashboard isLoggedIn="true"/>}></Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/myprofile' element={<MyProfile/>}></Route>
      <Route path='/viewposts' element={<ViewPosts/>}></Route>
      <Route path='/editprofile' element={<EditProfile/>}></Route>

    </Routes>
  </BrowserRouter>

  );
}

export default App;
