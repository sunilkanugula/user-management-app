// App.js
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUsers } from "./api/apiServices";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
import UserInput from "./components/UserInput"; 
import styles from "./styles/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    // Fetch users when the component mounts
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        toast.error("Error fetching users!");
      }
    };

    loadUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
    setIsEdit(false);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = { ...formData, id: newId };
    setUsers([...users, newUser]);
    toast.success("User added successfully!");
    clearForm();
  };

  const handleEditUser = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setUsers(users.map((u) => (u.id === formData.id ? formData : u)));
    toast.success("User updated successfully!");
    clearForm();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.error("User deleted successfully!");
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Pagination logic
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const displayedUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className={styles.appContainer}>
      {/* Toast Container for global toasts */}
      <ToastContainer />

      {/* User form to add or edit users */}
      <UserInput
        formData={formData}
        isEdit={isEdit}
        handleInputChange={handleInputChange}
        handleSubmit={isEdit ? handleUpdateUser : handleAddUser}
      />

      {/* Table to display users */}
      <UserTable
        users={displayedUsers}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />

      {/* Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
