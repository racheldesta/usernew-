import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './UserDashboard.css';
import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
import email_icon from "./Assets/email.png";
import active from "./Assets/active.png";
import add from "./Assets/add.png";
import male from "./Assets/male.png";
import user2 from "./Assets/user2.png";
import marrow from "./Assets/more_arrow.png";

const UserDashboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [profile, setProfile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetchProfileData().then((profileData) => {
      setProfile(profileData);
    });
  }, []);

  const fetchProfileData = () => {
    // Simulating an API call to fetch profile data
    return new Promise((resolve) => {
      setTimeout(() => {
        const profileData = {
          picture: profilePic6,
          username: 'Kebede Abebe',
          location: 'Addis Ababa',
          gender: 'Male',
          active: true,
          phone: '+251 900000000',
          email: 'abc12@gmail.com',
          role:'user'
        };
        resolve(profileData);
      }, 1000);
    });
  };

  if (!profile) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="profile-container">
      <header className="box">
        <nav className="box__navigation">
          <div></div>
          <img src={cube} alt="" />
          <div className="box__logo">UMS</div>
          <div className="spacer"></div>
          <div className="box_navigation-items">
          <h4>{profile.username}</h4>
          </div>
          <div className="profile-picture-container">
            <img className="profile-picture" src={profile.picture} alt="" />
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
      <span className="myprofile1"onClick={()=>navigate("/userdashboard")}>My Profile</span>
      <span className="updateprofile1"onClick={()=>navigate("/updateprofile")}>Update Profile</span>
    </div>
      <div className="info-column">

        <img src={profile.picture} alt="/ " className="profile-picture1" />
        <h3>{profile.username}</h3>
        <p>{profile.location}</p>
        <hr className="profile-line" />

        <p>{ <img src={user2} alt="" /> } {profile.role ? 'User' : 'Admin'}</p>
        <p>{ <img src={active} alt="" /> }{profile.active ? 'Active' : 'Inactive'}</p>
        <hr className="profile-line" />

        <p>{ <img src={male} alt="" /> }  {profile.gender}</p> 
        <p>{ <img src={email_icon} alt="" /> } {profile.email}</p>
        <p>{ <img src={add} alt="" /> } {profile.phone}</p>
        
      </div>
    </div>
  </div>

  
   
  );
};

export default UserDashboard;