// import logo from "./logo.svg";
import "./App.css";
import SignupPage from "./Components/SignupPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import SetupProfile from "./Components/SetupProfile/SetupProfile";
import Profile from "./Components/Profile";
import ForgetPassword from "./Components/ForgetPassword";
import VerificationPage from "./Components/VerificationPage";
import AddUser from "./Components/AddUser";
import UpdateProfile from "./Components/UpdateProfile";
import ProfileofAdmin from "./Components/ProfileofAdmin";
import Reset from "./Components/RestPassword";
import UserDashboard from "./Components/UserDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import Admin2 from "./Components/Admin2";
import AdmineditUser from "./Components/AdmineditUserprofile";
import Table from "./Components/Table";
import SetupProfile2 from "./Components/SetupProfile/setupProfile2";




function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      {/* <Route path="/setup" element={<SetupProfile/>}></Route> */}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/forget" element={<ForgetPassword/>}></Route>
      <Route path="/verification" element={<VerificationPage/>}></Route>
      <Route path="/reset" element={<Reset/>}></Route>
      <Route path="/adduser" element={<AddUser/>}></Route>
      <Route path="/updateprofile" element={<UpdateProfile/>}></Route>
      <Route path="/profileofadmin" element={<ProfileofAdmin/>}></Route>
      <Route path="/userdashboard" element={<UserDashboard/>}></Route>
      <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
      <Route path="/admin2" element={<Admin2/>}></Route>
      <Route path="/adminedituser" element={<AdmineditUser/>}></Route>
      <Route path="/table" element={<Table/>}></Route>
      <Route path="/setup" element={<SetupProfile2/>}></Route>


    </Routes>
  );
}

export default App;
