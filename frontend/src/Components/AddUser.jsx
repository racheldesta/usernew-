import React from 'react';
import './AddUser.css';
import cube from "./Assets/cube.png";
import profilePic6 from "./Assets/Photo_6.png";
import user_icon from "./Assets/person.png";
import password_icon from "./Assets/password.png";
const AddUser = (props) => (
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
    <div className="profile-container">
      <div className="body1">
        <div> <h2>Add New User</h2> </div>
        <div className='profile'>
        <div className="left-column">
          <input type="text" placeholder="Frist Name" />
          <input type="text" placeholder="Gender" />
          <input type="text" placeholder="Location" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="right-column">
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Comfirm Pasword" />
        </div>
        </div>
        <button className="add-button">ADD USER</button>
      </div>
    </div>

    </div>

    
);

export default AddUser;
