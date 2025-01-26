import React from "react";
import "../styles/UserTable.css";

const UserTable = ({ users, onEditUser, onDeleteUser }) => (
  <div className="table-container">
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department === "" ? "Not available" : user.department}</td>
              <td>
                <button
                  className="btn edit-btn"
                  onClick={() => onEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn delete-btn"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="no-users">
              No users available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default UserTable;
