import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import './AdminDashboard.css';
import cube from "./Assets/cube.png";
import search from "./Assets/search.png";
import lady from "./Assets/lady.png";
import edit from "./Assets/edit.png";
import { useNavigate } from "react-router-dom";
import ddelete from "./Assets/delete.png";

function AdminDashboard() {
  const [role, setRole] = useState('User');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const columns = [
    {
      name: 'User Name',
      selector: row => row.username,
    },
    {
      name: 'Email Address',
      selector: row => row.email,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: 'Role',
      selector: row => row.role,
    },
    {
      name: 'Activity',
      selector: row => row.activity,
    },
    {
      name: 'Action',
      selector: row => (
        <div>
          <img src={edit} className="edit" alt="" />
          <img src={ddelete} className="delete" alt="" />
        </div>
      ),
      wrap: true,
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.0.241:5000/accounts/All-user/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const mappedData = response.data.map((item) => ({
          username: item.username,
          email: item.email,
          status: item.status,
          role: item.role,
          activity: item.activity,
        }));
        setData(mappedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

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
              <li><a href="/">Logout</a></li>
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
          <div className="search_input">
            <input type="text" placeholder="Search User" />
            <img src={search} alt="" />
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

      <div className="alluser">
        <h2 className="list">List of All user</h2>
      </div>
      <div className="addacount">
        <button onClick={() => navigate("/adduser")}>+ Add User</button>
      </div>

      <div className="container-mt-5">
        <DataTable
          columns={columns}
          data={data}
          noHeader
         
         
          highlightOnHover
          striped
          dense
        />
      </div>
    </div>
  );
}

export default AdminDashboard;