import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import invisible from "../Assets/pass_invisible.png";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useNavigate } from "react-router-dom";
import { signin } from "../../service/sys_service";
const LoginPage = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error1, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signin(data.email, data.password).then((res) => {
      if (res.success && res.data) {
        const { jwtToken } = res.data;
        const { id } = res.data;
        const { role } = res.data; // Assuming the role is returned in the response
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("id", id);
        localStorage.setItem("role", role); // Store the role in local storage
        console.log(res.data);
        
        if (role === "Admin") {
          navigate("/admindashboard"); // Redirect to admin dashboard if the role is admin
        } 
        else {
          navigate("/setup"); // Redirect to user dashboard for other roles
        }
      } else {
        setError("Wrong password"); // Display error message
        console.log(res.error);
      }
    });
  };



  return (
    <div className="signup">
      <div className="welcome">
        <h1 className="greeting">Welcome !</h1>
        <div className="triangle-left"></div>
        <p className="paragraph">
          From chaos to clarity.simplify user management
          and say goodbye Your
          spreadsheets.
        </p>
        <div className="head">
        <h2>Your time</h2>
        <h2>Your data</h2>
        <h2>Your peace of mind!</h2>
        </div>
        <div className="rectangle"></div>
        <div className="circle"></div>
      </div>

      <form className="login-page">
        <div className="login-header">
          <div className="login-text">Login</div>
        </div>

        <div className="login-inputs">
         
            {<img src={user_icon} alt="" className='user_icon' />}
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} />
        
       
            {<img src={password_icon} alt="" className='pass_icon' /> }
            <input type={showPassword ? "text" : "password"}  placeholder="Password" name="password" onChange={handleChange} value={data.password} />
            <img src={invisible} alt="" className="invisible-i" onClick={() => setShowPassword(!showPassword)} /> 
      
        </div>
        {error1 && <div className="error_msg">{error1}</div>}
        <div className="login-submit-container">
          <button className="login-submit" onClick={handleSubmit}>LOGIN</button>
        </div>

        <div className="forgot-password" >
          <span onClick={() => navigate("/forget")} >Forgot Password?</span>{" "}
        </div>
        <div className="newuser" >
          New user? <span onClick={() => navigate("/")} >Sign Up</span>{" "}
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
