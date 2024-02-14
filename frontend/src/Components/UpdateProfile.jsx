import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './UpdateProfile.css';
import pp from "./Assets/pp.png";
import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
import marrow from "./Assets/more_arrow.png";

const UpdateProfile = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmassword] = useState("");
  
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
console.log(lastName)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .put(`http://192.168.0.242:5000/accounts/finish-profile/${id}`, {
        firstName,
        lastName,
        email,
        username,
        birthdate,
        location,
        password,
        confirmpassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/userdashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div>
      <header className="box">
        <nav className="box__navigation">
          <div></div>
          <img src={cube} alt="" />
          <div className="box__logo"> UMS</div>
          <div className="spacer"></div>
          <div className="box_navigation-items"></div>
          <div className="profile-picture-container"></div>
          <div className="dropdown">
            <img src={marrow} alt="" onClick={toggleDropdown} />
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => navigate("/")}>
                  Add Account
                </div>
                <div className="dropdown-item" onClick={() => navigate("/login")}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="update-container">
        <div className="update-body1">
          <div className="update-text-container">
            <span className="myprofile2" onClick={() => navigate("/userdashboard")}>My Profile</span>
            <span className="updateprofile2" onClick={() => navigate("/updateprofile")}>Update Profile</span>
          </div>
          <div className="update-picture-container">
            <img className="update-profile-picture" src={profilePic6} alt="" />
          </div>
          <form className='update-profile' onSubmit={handleSubmit}>
            <div className="update-left-column">
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Date Of Birth" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="update-right-column">
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastname(e.target.value)} />
              <input type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
              <input type="text" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmassword(e.target.value)} />
            </div>
            <button className="update-button" type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;