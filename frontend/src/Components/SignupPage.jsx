import React, { useState } from "react";
import { link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupPage.css";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import invisible from "./Assets/pass_invisible.png";
import { signup } from "../service/sys_service";

const SignupPage = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit",data);

    if  (data.username !== '' && data.email !== '' && data.password !== '' && data.confirmpassword !== '' && data.password===data.confirmpassword) {
      signup(data).then((res) => {
        if (res?.success && res.data) {
          console.log(res.data);
           navigate("/login")
        } else {
          console.log(res?.error);
        }
      });
    }else{
      alert("empty field")
    }

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
        <h2>Your time</h2>
        <h2>Your data</h2>
        <h2>Your peace of mind!</h2>
        <div className="rectangle"></div>
        <div className="circle"></div>
      </div>
      {/* signup form   */}
      <form className="signup-page" onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Create an Account</div>
        </div>

        <div className="inputs">
          <div className="input">
            {<img src={email_icon} alt="" />}
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required />
          </div>
          <div className="input">
            {<img src={user_icon} alt="" />}
            <input type="text" placeholder="Username" name="username" onChange={handleChange} value={data.username} />
          </div>

          <div className="input">
            {<img src={password_icon} alt="" />}
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} />

          </div>
          <div className="input">
            {<img src={password_icon} alt="" />}
            <input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange} value={data.confirmpassword} />
          </div>
          {error && <div className="error_msg">{error}</div>}
        </div>
        <div className="submit-container">
          <button type="submit" className="submit" >SIGN UP</button>
        </div>

        <div className="existing-user" >
          Already a user? <span onClick={() => navigate("/login")} >Sign In</span>{" "}
        </div>
      </form>
    </div>
  );
};
export default SignupPage;