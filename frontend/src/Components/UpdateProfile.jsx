import React from 'react';
import { useNavigate } from "react-router-dom";
import './UpdateProfile.css';
import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
const UpdateProfile = (props) => {
    // className="large-box"
   
    const navigate = useNavigate();
   
   
   
    return(
    <div >
    <header className="box">
        <nav className="box__navigation">
            <div></div>
            {<img src={cube} alt="" />}
            <div className="box__logo"> UMS</div>
           
            <div className="spacer"></div>
            <div className="box_navigation-items">
                <ul>
                    <li><a href="/">Login/Logout</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <div className="update-container">
        {/* <h2>My Profile</h2> */}
        
      
      <div className="update-body1">
      <div className="update-text-container">
      <span className="myprofile1"onClick={()=>navigate("/userdashboard")}>My Profile</span>
      <span className="updateprofile1"onClick={()=>navigate("/updateprofile")}>Update Profile</span>
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
