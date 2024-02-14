import React, { useState } from "react";
import "./RestPassword.css";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import invisible from "./Assets/pass_invisible.png";
import { useNavigate } from "react-router-dom";
import { Reset_Page } from "../service/sys_service";
const Reset = () => {
 
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      setError("Passwords doesn't match");
      return;
    }

    Reset_Page(data.password, data.confirmPassword).then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        navigate("/login");
      } else {
        console.log(res.error);
      }
    });
  };


  return (
    <div className="signup">
      <div className="welcome">
        <h1 className="greeting">Welcome !</h1>
        <div class="triangle-left"></div>
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
        <div class="rectangle"></div>
        <div class="circle"></div>
      </div>
      
      <form className="reset-page">
        <div className="reset-header">
          <div className="reset-text">Create New Password</div>
        </div>

        <div className="reset-inputs">
          
          { <img src={password_icon} alt="" className="rpass_icon"/> }
          <input type={showPassword ? "text" : "password"}  placeholder="Password" name="password" onChange={handleChange} value={data.password} />
            <img src={invisible} alt=""  className="rinvisible-icon" onClick={() => setShowPassword(!showPassword)} />
        
          <img src={password_icon} alt=""   className="rpass_icon2"  />
            <input type={showPassword ? "text" : "password"} placeholder=" Confirm Password" name="confirmPassword"
            onChange={handleChange}
            value={data.confirmPassword} />
        </div>
        {error && <div className="rerror-message">{error}</div>}
        <div className="reset-submit-container">
          <button className="reset-submit" onClick={handleSubmit}>CONTINUE</button>
        </div>

      </form>
    </div>
  );
};
export default Reset;
