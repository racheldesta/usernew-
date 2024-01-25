import React from 'react';
import "./Admin2.css";

const Admin2 = ({ users, handleEdit, handleDelete, handleAddUser }) => (
  <div>
    <button className="add-user-button" onClick={handleAddUser}>
      +Add User 
    </button>
    <table className="ad-user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th>Role</th>
          <th>Activity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.role}</td>
            <td>{user.activity}</td>
            <td>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Admin2;