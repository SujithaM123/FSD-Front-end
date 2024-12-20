import React, { useState } from "react";
import axios from "axios";

// Predefined Department Options
const departments = ["HR", "Engineering", "Marketing", "Sales", "Finance"];

const EmployeeForm = () => {
  const [form, setForm] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    department: "",
    dateOfJoining: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required.";
    if (!form.employeeId) newErrors.employeeId = "Employee ID is required.";
    if (form.employeeId && form.employeeId.length > 10)
      newErrors.employeeId = "Employee ID must be less than 10 characters.";
    if (!/^[A-Za-z0-9]+$/.test(form.employeeId))
      newErrors.employeeId = "Employee ID must be alphanumeric.";
    if (!form.email) newErrors.email = "Email is required.";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email format is invalid.";
    if (!form.phone) newErrors.phone = "Phone number is required.";
    if (form.phone && !/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!form.department) newErrors.department = "Department is required.";
    if (!form.dateOfJoining) newErrors.dateOfJoining = "Date of joining is required.";
    else if (new Date(form.dateOfJoining) > new Date())
      newErrors.dateOfJoining = "Date of joining cannot be a future date.";
    if (!form.role) newErrors.role = "Role is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post("http://localhost:5000/api/employees", form);
        setSuccessMessage("Employee added successfully!");
        setForm({
          name: "",
          employeeId: "",
          email: "",
          phone: "",
          department: "",
          dateOfJoining: "",
          role: "",
        });
        setErrors({});
      } catch (err) {
        setApiError(err.response?.data?.message || "Error submitting form.");
      }
    }
  };

  return (
    <div
      className="employee-form"
      style={{
        width: "50%",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1
          style={{
            textAlign: "center",
            color: "#007BFF",
            marginBottom: "30px",
          }}
        >
          Employee Management System
        </h1>

        {/* Success and Error Messages */}
        {successMessage && (
          <p
            style={{
              color: "green",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            {successMessage}
          </p>
        )}
        {apiError && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            {apiError}
          </p>
        )}

        {/* Name Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            title="Enter the full name of the employee."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>
          )}
        </div>

        {/* Employee ID Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="employeeId" style={{ fontWeight: "bold" }}>
            Employee ID:
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={form.employeeId}
            onChange={handleChange}
            title="Enter a unique alphanumeric Employee ID (max 10 characters)."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          {errors.employeeId && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.employeeId}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            title="Enter a valid email address (e.g., example@mail.com)."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="phone" style={{ fontWeight: "bold" }}>
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            title="Enter a 10-digit phone number."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          {errors.phone && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.phone}</p>
          )}
        </div>

        {/* Department Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="department" style={{ fontWeight: "bold" }}>
            Department:
          </label>
          <select
            id="department"
            name="department"
            value={form.department}
            onChange={handleChange}
            title="Select the department the employee belongs to."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          >
            <option value="">Select Department</option>
            {departments.map((dept, idx) => (
              <option key={idx} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.department}</p>
          )}
        </div>

        {/* Date of Joining Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="dateOfJoining" style={{ fontWeight: "bold" }}>
            Date of Joining:
          </label>
          <input
            type="date"
            id="dateOfJoining"
            name="dateOfJoining"
            value={form.dateOfJoining}
            onChange={handleChange}
            title="Select the employee's date of joining."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          {errors.dateOfJoining && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.dateOfJoining}</p>
          )}
        </div>

        {/* Role Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="role" style={{ fontWeight: "bold" }}>
            Role:
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            title="Enter the role or position of the employee."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          {errors.role && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.role}</p>
          )}
        </div>

        {/* Submit and Reset Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="submit"
            className="submit-button"
            style={{
              padding: "12px 24px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() =>
              setForm({
                name: "",
                employeeId: "",
                email: "",
                phone: "",
                department: "",
                dateOfJoining: "",
                role: "",
              })
            }
            style={{
              padding: "12px 24px",
              backgroundColor: "#DC3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
