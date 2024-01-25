import React, { useState , useEffect} from "react";
import './ProfileofAdmin.css';
import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
import user2 from "./Assets/user2.png";
import email_icon from "./Assets/email.png";
import active from "./Assets/active.png";
import add from "./Assets/add.png";
import female from "./Assets/female.png";
import lady from "./Assets/lady.png";

const ProfileofAdmin = () => {
  const [inputValue, setInputValue] = useState("");
  const [profile, setProfile] = useState(null);

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
          picture: lady,
          username: 'Aster Aweke',
          location: 'Addis Ababa',
          gender: 'female',
          active: true,
          phone: '+251 900000000',
          rolee:'Admin',
          email: 'abc12@gmail.com'
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
            <ul>
              <li><a href="/">Login/Logout</a></li>
            </ul>
          </div>
          <div className="profile-picture-container">
            <img className="profile-picture" src={lady} alt="" />
          </div>
        </nav>
      </header>

     <div className="pro-container-layout">
  <div className="pro-left-container">
    <div className="admin-profile">
      <div className="profile-column">

        <div className="user-location">
        <img src={profile.picture} alt="Profile Picture" className="profile-pictureu" />
        <h3>{profile.username}</h3>
        <p>{profile.location}</p></div>
        <hr className="profile-line" />

        <div className="gender-status">
        <p> { <img src={user2} alt="" /> } {profile.role ? 'Admin' : 'Admin'}</p>
        <p> { <img src={active} alt="" /> }{profile.active ? 'Active' : 'Inactive'}</p></div>
        <hr className="profile-line" />
       
       <div className="emain-phone">
       <p>{ <img src={female} alt="" /> } {profile.gender}</p> 
        <p>{ <img src={add} alt="" /> } {profile.phone}</p>
        <p>{ <img src={email_icon} alt="" /> } {profile.email}</p></div>
        
      </div>
    </div>
  </div>

        <div className="pro-right-container">
          <div><h2>Edit Profile</h2></div>
          <div className='pro-profile'>
            <div className="pro-left-column">
              <input type="text" placeholder="Frist Name" value={inputValue} onChange={handleChange} />
              <input type="text" placeholder="Gender" value={inputValue} onChange={handleChange} />
              <input type="text" placeholder="Location" value={inputValue} onChange={handleChange} />
              <input type="password" placeholder="Password" value={inputValue} onChange={handleChange} />
            </div>
            <div className="pro-right-column">
              <input type="text" placeholder="Last Name" value={inputValue} onChange={handleChange} />
              <input type="text" placeholder="Phone number" value={inputValue} onChange={handleChange} />
              <input type="text" placeholder="Username" value={inputValue} onChange={handleChange} />
              <input type="text" placeholder="Comfirm Pasword" value={inputValue} onChange={handleChange} />
            </div>
          </div>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileofAdmin;