import React, { useState , useEffect} from "react";
import './AdmineditUserprofile.css';
import { useParams } from "react-router-dom";

import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
import user2 from "./Assets/user2.png";
import email_icon from "./Assets/email.png";
import active from "./Assets/active.png";
import add from "./Assets/add.png";
import female from "./Assets/female.png";
import lady from "./Assets/lady.png";
import boss from "./Assets/boss.png";
import marrow from "./Assets/more_arrow.png";
import back_arrow from "./Assets/Back _arrow.png";
import { useNavigate } from "react-router-dom";

const AdmineditUser = () => {
  const { userId } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [profile, setProfile] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const data = [
    { date: '2024-01-24', activity: 'Updated profile' },
    { date: '2024-01-23', activity: 'Created new post' },
    { date: '2024-01-22', activity: 'Logged in' },
    // ... add more data here
  ];

  const isYesterday = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedYesterday = yesterday.toISOString().split('T')[0];
    return date === formattedYesterday;
  };
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const profileD = () => {
    // Simulating an API call to fetch profile data
    return new Promise((resolve) => {
      setTimeout(() => {
        const profileData = {
          picture: boss,
          username: 'Abebe Kebede',
          location: 'Adama,Ethiopia',
          gender: 'Male',
          active: true,
          phone: '+251 900000000',
          email: 'abc12@gmail.com'
        };
        resolve(profileData);
      }, 1000);
    });
  };

  // const fetchProfileData = () => {
  //   // Simulating an API call to fetch profile data
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const profileData = {
  //         picture: profilePic6,
  //         username: 'Kebede Abebe',
  //       };
  //       resolve(profileData);
  //     }, 1000);
  //   });
  // };

  useEffect(() => {
    profileD().then((profileD) => {
      setProfile(profileD);
    });
  }, []);

  // useEffect(() => {
  //   fetchProfileData().then((profileData) => {
  //     setProfile(profileData);
  //   });
  // }, []);

  useEffect(() => {
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  if (!profile) {
    return <div>Loading...</div>;
  }




  return (

    <div className="root">
    
      <img src={back_arrow}  className='backarrow' alt=""  onClick={() => navigate("/admindashboard")}/>
      
    <div className="profile-container-admin">
      
      <header className="box">
        <nav className="box__navigation">
          <div></div>
          <img src={cube} alt="" />
          <div className="box__logo">UMS</div>
          <div className="spacer"></div>
          <div className="box_navigation-items">
            <ul>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
          <div className="profile-picture-container">
            <img className="profile-picture" src={lady} alt="" />
          </div>
        </nav>
      </header>
       
     {/* <div className="edit-pro-container-layout"> */}

  {/* left side container with user information */}

  <div className="edit-pro-left-container">
 
    <div className="edit-admin-profile">
      <div className="edit-profile-column">

        <div className="edit-user-location">
        <img src={profile.picture} alt="Profile Picture" className="edit-profile-pictureu" />
        <h3>{profile.username}</h3>
        <p>{profile.location}</p></div>
        <hr className="edit-profile-line" />

        <div className="edit-gender-status">
        <p>{ <img src={female} alt="" /> } {profile.gender}</p> 
        <p> { <img src={active} alt="" /> }{profile.active ? 'Active' : 'Inactive'}</p></div>
        <hr className="edit-profile-line" />
       
       <div className="edit-emain-phone">
       
        <p>{ <img src={add} alt="" /> } {profile.phone}</p>
        <p>{ <img src={email_icon} alt="" /> } {profile.email}</p></div>
        
      </div>
    </div>
  </div>

  {/* right side container with edit user's profile and user activity */}
<div className="edit-right"> 

{/* edit user's profile */}
        <div className="edit-top-right-container">
  <div>
    <h2>Edit User's Profile</h2>
  </div>
  <div className='edit-pro-profile'>
    <div className="edit-pro-left-column">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {!passwordMatch && (
        <p className="password-mismatch">Passwords do not match</p>
      )}
    </div>
    <div className="edit-pro-right-column">
      <input
        type="text"
        placeholder="Username"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  </div>
  <button className="edit-save-button">Save</button>
</div>
  {/* user activity */}
        <div className="edit-bottom-right-container">
          <div><h2>user Activity</h2></div>
          <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Activity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className={isYesterday(item.date) ? 'highlighted' : ''}
          >
            <td>{item.date}</td>
            <td>{item.activity}</td>
          </tr>
        ))}
      </tbody>
    </table>
        
        </div>
        </div>
      </div>
     </div>
  );
};

export default AdmineditUser;