import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pp from "./Assets/pp.png";
import './AddUser.css';
import axios from 'axios';
import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
import user_icon from "./Assets/person.png";
import password_icon from "./Assets/password.png";
const AddUser = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  console.log(token);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewProfilePicture, setPreviewProfilePicture] = useState(pp);
  const [error, setError] = useState("");

  const countries = ["USA", "Canada", "UK", "Australia", "Germany"]; // Add more countries as needed

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handlePhoneChange = (e) => {
    const inputPhoneNumber = e.target.value;
   // const numericPhoneNumber = inputPhoneNumber.replace(/[^0-9]/g, "");
    setPhone(inputPhoneNumber);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setPreviewProfilePicture(URL.createObjectURL(file));
  };

  const navigate = useNavigate();

 
console.log(phone)
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post(`http://192.168.0.242:5000/accounts/Add-user`, {
      firstName,
      lastName,
      userName,
      gender,
      phone,
      password,
      confirmpassword,
      location
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        id: id
      }
      
    })
    .then((response) => {
      // console.log(response.data);
      navigate("/admindashboard");
    })
    .catch((error) => {
      console.log(error);
    });
  
    }
    return(
    // className="large-box"
    <div >
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
          <img className="profile-picture" src={profilePic6} alt="" />
        </div>
      </nav>
    </header>
    <form className="profile-container"onSubmit={handleSubmit} >
      <div className="body1">
        <div> <h2>Add New User</h2> </div>
        <div className='profile'>
        <div className="left-column">
          <input type="text"
           placeholder="Frist Name" 
           value={firstName}
              onChange={handleFirstNameChange} />
           <select
              id="gender"
              className="gender"
              placeholder="Gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select >
           <select
              className="location"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
            >
              <option value="">Location</option>
              {countries.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          <input type="password" 
          placeholder="Password"
          value={password}
           onChange={handlePasswordChange}
            />
          
        </div>
        <div className="right-column">
          <input type="text"
           placeholder="Last Name"
           value={lastName}
           onChange={handleLastNameChange}
            />
          <input type="text" 
          placeholder="Phone number"
          value={phone}
          onChange={handlePhoneChange}
          />
          <input type="text"
           placeholder="Username"
           value={userName}
           onChange={handleUserNameChange}
            />
          <input type="text"
           placeholder="Comfirm Pasword"
           value={confirmpassword}
           onChange={handleConfirmPasswordChange} />
        </div>
        </div>
        <button className="add-button">ADD USER</button>
      </div>
    </form>

    </div>

    
);
    };
export default AddUser;
