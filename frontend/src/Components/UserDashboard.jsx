import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './UserDashboard.css';
import axios from "axios";
import inactive from "./Assets/inactive.png";
import cube from "./Assets/cube.png";
import email_icon from "./Assets/email.png";
import active from "./Assets/active.png";
import add from "./Assets/add.png";
import male from "./Assets/male.png";
import user2 from "./Assets/user2.png";
import marrow from "./Assets/more_arrow.png";

const UserDashboard = () => {
  const [data, setData] = useState({});
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    axios
      .get(`http://192.168.0.242:5000/accounts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          id: id,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, id]);

  const { picture, username, location, role, status, gender, email, phone } = data;
  
  const getStatusIcon = () => {
    if (status === true) {
      return <img src={active} alt="Active" />;
    } else {
      return <img src={inactive} alt="Inactive" />;
    }
  };

  const getStatusText = () => {
    if (status === true) {
      return <span style={{ color: "#00FF00" }}>Active</span>;
    } else {
      return <span style={{ color: "#FF0000" }}>Inactive</span>;
    }
  };

  return (
    <div className="profile-container">
      <header className="box">
        <nav className="box__navigation">
          <div></div>
          <img src={cube} alt="" />
          <div className="box__logo">UMS</div>
          <div className="spacer"></div>
          <div className="box_navigation-items">
            {/* <h4>{username}</h4> */}
          </div>
          <div className="profile-picture-container">
            {/* <img className="profile-picture" src={picture} alt="" /> */}
          </div>
          <div className="dropdown">
            <img src={marrow} alt="" onClick={toggleDropdown} />
            {showDropdown && (
              <div className="dropdown-menu">
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/")}
                >
                  {/* <img src={arrow} alt="" /> */}
                  Add Account
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/login")}
                >
                  {/* <img src={logout} alt="" /> */}
                  Logout
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div className="user_Dashboard">
        <div className="user_Dashboard_container">
          <span className="myprofile1" onClick={() => navigate("/userdashboard")}>My Profile</span>
          <span className="updateprofile1" onClick={() => navigate("/updateprofile")}>Update Profile</span>
        </div>
        {Object.keys(data).length > 0 ? (
          <div className="info-column">
            <img src={picture} alt="/ " className="profile-picture1" />
            <h3>{username}</h3>
            <p>{location}</p>
            <hr className="profile-line" />

            <p>
              <img src={user2} alt="" /> {role}
            </p>
            <p>
            {getStatusIcon()} {getStatusText()}
            </p>
            <hr className="profile-line" />

            <p>
              <img src={male} alt="" /> {gender}
            </p> 
            <p>
              <img src={email_icon} alt="" /> {email}
            </p>
            <p>
              <img src={add} alt="" /> {phone}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;