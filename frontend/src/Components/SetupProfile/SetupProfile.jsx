import React, { useState } from "react";
import "./SetupProfile.css";
import user_icon from "../Assets/person.png";
import select_cal_icon from "../Assets/select_cal_icon.png";
import location from "../Assets/location.png";
import photo from "../Assets/Photo_6.png";
import arrow from "../Assets/arow.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SetupProfile = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewProfilePicture, setPreviewProfilePicture] = useState(photo);

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
    setPreviewProfilePicture(photo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("gender", gender);
    formData.append("phoneNumber", phoneNumber);
    formData.append("birthdate", birthdate);
    formData.append("location", location);
    formData.append("profilePicture", profilePicture);

    // Send the data to the backend using axios
    axios
      .put("http://localhost:5000/accounts/update-profile/1", formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
        // Redirect to the next page or handle success
        navigate("/adduser"); // Replace "/next-page" with your desired next page URL
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

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
          set up your profrile.Let's know a little bit about you.this won't
          take long.
        </p>
        <div className="arrow">{<img src={arrow} alt="" />}</div>
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
            {<img src={user_icon} alt="" />}
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
            {<img src={user_icon} alt="" />}
            <select
              id="gender"
              placeholder="Gender"
              value={gender}
              onChange={handleGenderChange}
            >
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
            {<img src={select_cal_icon} alt="" />}
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={handleBirthdateChange}
            />
          </div>
          {/* location */}
          <div className="setup-input">
            {<img src={location} alt="" />}
            <input
              type="text"
              id="location"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
            />
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
            <button
              type="button"
              className="clear-submit"
              onClick={handleClear}
            >
              Clear
            </button>
            <button type="submit" className="finish-submit">
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetupProfile;