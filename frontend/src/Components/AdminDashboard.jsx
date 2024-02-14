import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
  const [username, setUsername] = useState('');
  const [userNameFilter, setUserNameFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
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
      selector: row => (
        <span style={{ color: row.status === 'Active' ? "#00FF00" : 'red' }}>{row.status}</span>
      ),
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
          <Link to={`/adminedituser/${row.userId}`}>
            <img src={edit} className="edit" alt="" />
          </Link>
          <img
            src={ddelete}
            className="delete"
            alt=""
            onClick={() => updateUserStatus(row.userId, row.status === "Active")}
          />
        </div>
      ),
      wrap: true,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams();
      if (username) {
        searchParams.append('username', username);
      }
      if (userNameFilter) {
        searchParams.append('userNameFilter', userNameFilter);
      }
      if (roleFilter) {
        searchParams.append('roleFilter', roleFilter);
      }
      if (statusFilter) {
        searchParams.append('statusFilter', statusFilter);
      }

      try {
        const response = await axios.get(`http://192.168.0.242:5000/accounts/All-user/?${searchParams.toString()}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const mappedData = response.data.map((item) => ({
          userId: item.id,
          username: item.username,
          email: item.email,
          status: item.status ? 'Active' : 'Inactive',
          role: item.role,
          activity: item.activity,
        }));

        setData(mappedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token, username, userNameFilter, roleFilter, statusFilter]);

  const updateUserStatus = (userId, currentStatus) => {
    const newStatus = !currentStatus; // Toggle the status value
  
    axios
      .put(
        `http://192.168.0.242:5000/accounts/status/${userId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("User status updated successfully");
  
        // Update the status in the local state (data)
        setData((prevData) => {
          const updatedData = prevData.map((item) => {
            if (item.userId === userId) {
              return { ...item, status: newStatus ? "Active" : "Inactive" };
            }
            return item;
          });
          return updatedData;
        });
      })
      .catch((error) => {
        console.log("Error updating user status", error);
      });
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUserNameFilterChange = (event) => {
    setUserNameFilter(event.target.value);
  };

  const handleRoleFilterChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
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
          <input type="text" placeholder="Search User" value={username} onChange={handleUsernameChange} />            <img src={search} alt="" />
          </div>
        </div>
        <div className="search_table">
          <input type="text" placeholder="User Name" value={userNameFilter} onChange={handleUserNameFilterChange} />
          
            <label htmlFor="role" placeholder="Role"></label>
            <select id="role" value={roleFilter} onChange={handleRoleFilterChange}>
              <option value="">Role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
        
       
            <label htmlFor="status" className="status" placeholder="status"></label>
            <select id="status" value={statusFilter} onChange={handleStatusFilterChange}>
              <option value="User">Status</option>
              <option value="User">Active</option>
              <option value="Admin">Inactive</option>
            </select>
         
          {/* <input type="text" placeholder="status" value={statusFilter} onChange={handleStatusFilterChange} />
          <button className="filter-button">Filter</button> */}
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