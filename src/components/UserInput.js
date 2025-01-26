// UserInput.js
import React from "react";
import styles from "../styles/App.css"; // Assuming the same styles for the form

const UserInput = ({
  formData,
  isEdit,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        placeholder="Department"
        onChange={handleInputChange}
        required
      />
      <button type="submit">{isEdit ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserInput;
