import React from "react";

const UserTable = ({ users, onEditUser, onDeleteUser }) => (
  <table className="w-full border-collapse border border-gray-300 text-left">
    <thead className="bg-gray-200">
      <tr>
        <th className="border px-4 py-2">ID</th>
        <th className="border px-4 py-2">First Name</th>
        <th className="border px-4 py-2">Last Name</th>
        <th className="border px-4 py-2">Email</th>
        <th className="border px-4 py-2">Department</th>
        <th className="border px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td className="border px-4 py-2">{user.id}</td>
          <td className="border px-4 py-2">{user.firstName}</td>
          <td className="border px-4 py-2">{user.lastName}</td>
          <td className="border px-4 py-2">{user.email}</td>
          <td className="border px-4 py-2">{user.department ==="" ? "Not availabe" : user.department}</td>
          <td className="border px-4 py-2">
            <button
              onClick={() => onEditUser(user)}
              className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteUser(user.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
