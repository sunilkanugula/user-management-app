import React from "react";
import "../styles/UserInput.css"; // Assuming the styles file is in the `styles` directory

const UserInput = ({
  formData,
  isEdit,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter first name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Enter last name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            name="department"
            value={formData.department}
            placeholder="Enter department"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isEdit ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserInput;
