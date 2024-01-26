import React, { useState , useEffect} from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import './AdminDashboard.css';
import cube from "./Assets/cube.png";
import search from "./Assets/search.png";
import lady from "./Assets/lady.png";

function AdminDashboard ()  {
  const [role, setRole] = useState('User');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
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
            <ul>
              <li><a href="/">Login/Logout</a></li>
            </ul>
          </div>
          <div className="profile-picture-container">
            <img className="profile-picture" src={lady} alt="" />
          </div>
        </nav>
      </header>
      <div>
        <div className="search_container">
            <h3>USer Management</h3>
            {/* <div className="search_bar"> */}
                <div className="search_input">
                 
                <input type="text" placeholder="Search User" />
                { <img src={search} alt="" /> }
                {/* </div> */}
            </div>

        </div>
        
        <div className="search_table">
          <input type="text" placeholder="User Name" />
          <div className="role-container">
        <label htmlFor="role" placeholder="role"></label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
          <input type="text" placeholder="status" />
           <button className="filter-button">Filter</button>
        
          
        </div>
        
      </div>
     

     
    </div>
  )
}

export default AdminDashboard;