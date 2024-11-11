import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/allUsers.css'
import axios from 'axios';
import Footer from './Footer';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await axios.get('http://localhost:6001/fetch-users').then((response) => {
      setUsers(response.data);
    });
  };

  return (
    <>
      <Navbar />

      <div className="all-users-page">
        <h2 style={{fontSize : 40, color : '#2b6a8a'}}>All Users</h2>

        <div className="users-container">
          <div className="users-column">
            <h3>Customers</h3>
            <div className="all-users">
              {users
                .filter((user) => user.usertype === 'customer')
                .map((user) => (
                  <div className="user" key={user._id}>
                    <p><b>UserId:</b> {user._id}</p>
                    <p><b>Username:</b> {user.username}</p>
                    <p><b>Email:</b> {user.email}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="operators-column">
            <h3>Flight Operators</h3>
            <div className="all-users">
              {users
                .filter((user) => user.usertype === 'flight-operator')
                .map((user) => (
                  <div className="user" key={user._id}>
                    <p><b>Id:</b> {user._id}</p>
                    <p><b>Flight Name:</b> {user.username}</p>
                    <p><b>Email:</b> {user.email}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
