import React, { useState, useEffect } from 'react';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-information">
      <div className="user-information__left">
        <img src={user.profilePicture} alt="Profile picture" />
        <h2>{user.username}</h2>
        <p>{user.location}</p>
        <p>{user.status}</p>
      </div>
      <div className="user-information__right">
        <p>Gender: {user.gender}</p>
        <p>Email: {user.email}</p>
        <p>Phone number: {user.phoneNumber}</p>
      </div>
    </div>
  );
}

export default Profile;
