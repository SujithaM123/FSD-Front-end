/** @format */

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
		if (!form.dateOfJoining)
			newErrors.dateOfJoining = "Date of joining is required.";
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
				await axios.post("http://localhost:5000/api/employees", form);
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
		<div style={styles.pageContainer}>
			<header style={styles.header}>
				<h1 style={styles.headerTitle}>Employee Management System</h1>
				<button
					style={styles.homeButton}
					onClick={() => (window.location.href = "/")}>
					Home
				</button>
			</header>
			<div style={styles.container}>
				<h2 style={styles.heading}>Add Employee</h2>
				{/* Success and Error Messages */}
				{successMessage && (
					<p style={styles.successMessage}>{successMessage}</p>
				)}
				{apiError && <p style={styles.apiError}>{apiError}</p>}

				<form onSubmit={handleSubmit}>
					{/* Name Field */}
					<div style={styles.formGroup}>
						<label style={styles.label}>Name:</label>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							style={styles.input}
						/>
						{errors.name && <p style={styles.errorText}>{errors.name}</p>}
					</div>

					{/* Employee ID Field */}
					<div style={styles.formGroup}>
						<label style={styles.label}>Employee ID:</label>
						<input
							type='text'
							name='employeeId'
							value={form.employeeId}
							onChange={handleChange}
							style={styles.input}
						/>
						{errors.employeeId && (
							<p style={styles.errorText}>{errors.employeeId}</p>
						)}
					</div>

					{/* Email Field */}
					<div style={styles.formGroup}>
						<label style={styles.label}>Email:</label>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							style={styles.input}
						/>
						{errors.email && <p style={styles.errorText}>{errors.email}</p>}
					</div>

					{/* Phone Field */}
					<div style={styles.formGroup}>
						<label style={styles.label}>Phone:</label>
						<input
							type='text'
							name='phone'
							value={form.phone}
							onChange={handleChange}
							style={styles.input}
						/>
						{errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
					</div>

					{/* Department Field */}
					<div style={styles.formGroup}>
						<label style={styles.label}>Department:</label>
						<select
							name='department'
							value={form.department}
							onChange={handleChange}
							style={styles.input}>
							<option value=''>Select Department</option>
							{departments.map((dept, idx) => (
								<option
									key={idx}
									value={dept}>
									{dept}
								</option>
							))}
						</select>
						{errors.department && (
							<p style={styles.errorText}>{errors.department}</p>
						)}
					</div>

					{/* Date of Joining Field */}
					<div style={styles.formGroup}>
						<label style={styles.label}>Date of Joining:</label>
						<input
							type='date'
							name='dateOfJoining'
							value={form.dateOfJoining}
							onChange={handleChange}
							style={styles.input}
						/>
						{errors.dateOfJoining && (
							<p style={styles.errorText}>{errors.dateOfJoining}</p>
						)}
					</div>

					{/* Role Field */}
					<div style={styles.formGroup}>
						<label style={styles.label}>Role:</label>
						<input
							type='text'
							name='role'
							value={form.role}
							onChange={handleChange}
							style={styles.input}
						/>
						{errors.role && <p style={styles.errorText}>{errors.role}</p>}
					</div>

					{/* Submit and Reset Buttons */}
					<div style={styles.buttonGroup}>
						<button
							type='submit'
							style={styles.submitButton}>
							Submit
						</button>
						<button
							type='button'
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
							style={styles.resetButton}>
							Reset
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const styles = {
	pageContainer: {
		fontFamily: "Arial, sans-serif",
		backgroundColor: "#f4f7fc",
		minHeight: "100vh",
	},
	header: {
		background: "linear-gradient(135deg, #00245c, #084c9d)",
		padding: "20px 40px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "#fff",
	},
	headerTitle: {
		fontSize: "24px",
		fontWeight: "bold",
	},
	homeButton: {
		backgroundColor: "#fff",
		color: "#00245c",
		padding: "10px 20px",
		borderRadius: "5px",
		border: "none",
		cursor: "pointer",
		fontWeight: "bold",
		transition: "background-color 0.3s ease",
	},
	container: {
		maxWidth: "600px",
		margin: "30px auto",
		padding: "40px",
		backgroundColor: "#fff",
		borderRadius: "10px",
		boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
	},
	heading: {
		textAlign: "center",
		marginBottom: "20px",
		fontSize: "24px",
		fontWeight: "bold",
		color: "#333",
	},
	successMessage: {
		color: "#28a745",
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: "15px",
	},
	apiError: {
		color: "#dc3545",
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: "15px",
	},
	formGroup: {
		marginBottom: "15px",
	},
	label: {
		fontWeight: "bold",
		color: "#084c9d",
		marginBottom: "5px",
		display: "block",
	},
	input: {
		width: "100%",
		padding: "10px",
		border: "1px solid #ccc",
		borderRadius: "5px",
		fontSize: "16px",
		margin: "5px",
	},
	errorText: {
		color: "#dc3545",
		fontSize: "14px",
		marginTop: "5px",
	},
	buttonGroup: {
		display: "flex",
		justifyContent: "space-between",
		marginTop: "20px",
	},
	submitButton: {
		backgroundColor: "#00245c",
		color: "#fff",
		border: "none",
		padding: "10px 20px",
		borderRadius: "5px",
		cursor: "pointer",
		fontWeight: "bold",
	},
	resetButton: {
		backgroundColor: "#dc3545",
		color: "#fff",
		border: "none",
		padding: "10px 20px",
		borderRadius: "5px",
		cursor: "pointer",
		fontWeight: "bold",
	},
};

export default EmployeeForm;
