import React, { useState } from "react";
import "./SetupProfile.css";
import axios from "axios";
import user_icon from "../Assets/person.png";
import select_cal_icon from "../Assets/select_cal_icon.png";
import location from "../Assets/location.png";
import pp from "../Assets/pp.png";
import arrow from "../Assets/arow_icon.png";
import { useNavigate } from "react-router-dom";

const SetupProfile2 = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  console.log(token);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewProfilePicture, setPreviewProfilePicture] = useState(pp);
  const [error, setError] = useState("");

  const countries = ["USA", "Canada", "UK", "Australia", "Germany"]; // Add more countries as needed

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    const numericPhoneNumber = inputPhoneNumber.replace(/[^0-9]/g, "");
    setPhoneNumber(numericPhoneNumber);
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

  const handleClear = () => {
    setName("");
    setGender("");
    setPhoneNumber("");
    setBirthdate("");
    setLocation("");
    setProfilePicture(null);
    setPreviewProfilePicture(pp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(name)
    // const data = new FormData();
    // data.append("name", name);
    // data.append("gender", gender);
    // data.append("phonenumber", phoneNumber);
    // data.append("dateofbirth", birthdate);
    // data.append("location", location);
    // data.append("profilepicture", profilePicture);

    // console.log(data)
    axios
  .put(`http://192.168.0.241:5000/accounts/update-profile/${id}`, {
    name,
    gender,
    phoneNumber,
    birthdate,
    location
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
      id: id
    }
  })
  .then((response) => {
     console.log(response.data);
    navigate("/admindashboard");
  })
  .catch((error) => {
    console.log(error);
  });
  }

  return (
    <div className="signup">
      <div className="welcome">
        <div className="triangle-left-setup"></div>
        {previewProfilePicture && (
          <div className="preview-profile-picture">
            <img
              className="profile-picture3"
              src={previewProfilePicture}
              alt="Preview"
            />
          </div>
        )}
        <p className="paragraph">
          set up your profile. Let's know a little bit about you. This won't take long.
        </p>
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
        <div className="rectangle"></div>
        <div className="circle"></div>
      </div>
      <div className="signup-page">
        <div className="header">
          <div className="text">Finish Account Setup</div>
        </div>
        {/* setup form */}
        <form className="setup-inputs" onSubmit={handleSubmit}>
          
          {/* name */}
          <div className="setup-input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          {/* gender */}
          <div className="setup-input">
            <img src={user_icon} alt="" />
            <select
              id="gender"
              placeholder="Gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* phone number */}
          <div className="setup-input">
            <input
              type="text"
              placeholder="Phone Number"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          {/* date of birth */}
          <div className="setup-input">
            <img src={select_cal_icon} alt="" />
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={handleBirthdateChange}
            />
          </div>
          {/* location */}
          <div className="setup-input">
            <img src={location} alt="" />
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
          </div>
          {/* profile picture */}
          <div className="setup-input">
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </div>
          <div className="setup-container">
            <button type="button" className="clear-submit" onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className="finish-submit" >  
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default SetupProfile2;