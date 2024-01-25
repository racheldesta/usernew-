import React, { useState , useEffect} from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import './AdminDashboard.css';
import cube from "./Assets/cube.png";
import lady from "./Assets/lady.png";

function AdminDashboard ()  {
    const[data, setData] = useState([
    {
        id:1,
        username:'Aster Aweke',
        email:'aster.aweke@gmail.com',
        status:'active',
        role:'user',
        activity:'loged in'
    },
    {
        id:2,
        username:'Robe Getachew',
        email:'robe.getachew@gmail.com',
        status:'active',
        role:'user',
        activity:'updated picter'
    },
    {
        id:3,
        username:'Abebe Kebede',
        email:'abebe.kebede@gmail.com',
        status:'inactive',
        role:'user',
        activity:'updated location'
    },
    {
        id:4,
        username:'Eden Tesfaye',
        email:'eden.tesfaye@gmail.com',
        status:'active',
        role:'user',
        activity:'changed password'
    },
    {
        id:5,
        username:'Kebede Abebe',
        email:'kebede.abebe@gmail.com',
        status:'active',
        role:'user',
        activity:'Active'
    }
]);
  useEffect(()=>{
  axios.get('')
  .then(res => setData(res.data))
  .catch(er => console.log(er));
  },[])
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
            <div className="search_bar">
                <div className="search_input">
                 
                <input type="text" placeholder="Search User" />
                {/* { <img src={search} alt="" /> } */}
                </div>
            </div>

        </div>
        
        <div className="search_table">
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Role" />
          <input type="text" placeholder="status" />
          <button className="add-button">Filter</button>
        </div>
        
      </div>
      <div className="table1">
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email Address</th>
                    <th>Status</th>
                    <th>Role</th>
                    <th>Activity</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
        <tbody>
            {
                data.map((user,index) => (
                    <tr key = {index}>
                        <td> {user.username}</td>
                        <td >{user.email}</td>
                        <td >{user.status}</td>
                        <td >{user.role}</td>
                        <td >{user.activity}</td>
                        <td >{user.action}</td>
                        <td>
                            <button> edit</button>
                            <button>delete</button>
                        </td>


                    </tr>
                ))
            }
        </tbody>

      </div>
    
     
    </div>
  )
}

export default AdminDashboard;