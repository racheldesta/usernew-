import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './UpdateProfile.css';
import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
import user2 from "./Assets/user2.png";
import marrow from "./Assets/more_arrow.png";

const UpdateProfile = (props) => {
    // className="large-box"
   
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
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
            
          };
          resolve(profileData);
        }, 1000);
      });
    };
  
    if (!profile) {
      return <div>L...</div>;
    }
  
    return(
    <div >
    <header className="box">
        <nav className="box__navigation">
            <div></div>
            {<img src={cube} alt="" />}
            <div className="box__logo"> UMS</div>
           
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
    <div className="update-container">
        {/* <h2>My Profile</h2> */}
        
      
      <div className="update-body1">
      <div className="update-text-container">
      <span className="myprofile2"onClick={()=>navigate("/userdashboard")}>My Profile</span>
      <span className="updateprofile2"onClick={()=>navigate("/updateprofile")}>Update Profile</span>
    </div>
    <div className="update-picture-container">
          <img className="update-profile-picture" src={profilePic6} alt="" />
        </div>
        <div className='update-profile'>
        <div className="update-left-column">
          <input type="text" placeholder="Frist Name" />
          <input type="text" placeholder="Gender" />
          <input type="text" placeholder="Location" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="update-right-column">
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Comfirm Pasword" />
        </div>
        </div>
        <button className="update-button">Update</button>
      </div>
    </div>

    </div>
   )
    
    };

export default UpdateProfile;
