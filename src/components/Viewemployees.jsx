/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Viewemployees = () => {
	const [employees, setEmployees] = useState([]);
	const [editingRow, setEditingRow] = useState(null); // Track which row is being edited
	const [formValues, setFormValues] = useState({}); // Temporary form values for editing

	// Fetch employees
	const fetchEmployees = async () => {
		try {
			const response = await axios.get(
				"http://localhost:5000/api/employees/list"
			);
			setEmployees(response.data);
		} catch (error) {
			toast.error("Error fetching employees");
		}
	};

	useEffect(() => {
		fetchEmployees();
	}, []);

	// Handle delete
	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/api/employees/delete/${id}`);
			setEmployees((prevEmployees) =>
				prevEmployees.filter((emp) => emp.id !== id)
			);
			toast.success("Employee deleted successfully");
		} catch (error) {
			toast.error("Failed to delete employee");
		}
	};

	// Start editing a row
	const handleEditStart = (emp) => {
		setEditingRow(emp.id);
		setFormValues(emp);
	};

	// Cancel editing
	const handleEditCancel = () => {
		setEditingRow(null);
		setFormValues({});
	};

	// Save edited data
	const handleEditSave = async (id) => {
		try {
			await axios.put(
				`http://localhost:5000/api/employees/update/${id}`,
				formValues
			);
			setEmployees((prevEmployees) =>
				prevEmployees.map((emp) =>
					emp.id === id ? { ...formValues, id } : emp
				)
			);
			setEditingRow(null);
			toast.success("Employee updated successfully");
		} catch (error) {
			toast.error("Failed to update employee");
		}
	};

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
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
				<h2 style={styles.heading}>Employee List</h2>
				{employees.length === 0 ? (
					<p style={styles.noDataText}>No employees found.</p>
				) : (
					<table style={styles.table}>
						<thead>
							<tr style={styles.headerRow}>
								<th style={styles.th}>ID</th>
								<th style={styles.th}>Name</th>
								<th style={styles.th}>Employee ID</th>
								<th style={styles.th}>Email</th>
								<th style={styles.th}>Phone</th>
								<th style={styles.th}>Department</th>
								<th style={styles.th}>Date of Joining</th>
								<th style={styles.th}>Role</th>
								<th style={styles.th}>Actions</th>
							</tr>
						</thead>
						<tbody>
							{employees.map((emp) => (
								<tr
									key={emp.id}
									style={styles.row}>
									<td style={styles.td}>{emp.id}</td>
									<td style={styles.td}>
										{editingRow === emp.id ? (
											<input
												type='text'
												name='name'
												value={formValues.name || ""}
												onChange={handleInputChange}
												style={styles.input}
											/>
										) : (
											emp.name
										)}
									</td>
									<td style={styles.td}>{emp.employeeId}</td>
									<td style={styles.td}>
										{editingRow === emp.id ? (
											<input
												type='email'
												name='email'
												value={formValues.email || ""}
												onChange={handleInputChange}
												style={styles.input}
											/>
										) : (
											emp.email
										)}
									</td>
									<td style={styles.td}>
										{editingRow === emp.id ? (
											<input
												type='text'
												name='phone'
												value={formValues.phone || ""}
												onChange={handleInputChange}
												style={styles.input}
											/>
										) : (
											emp.phone
										)}
									</td>
									<td style={styles.td}>
										{editingRow === emp.id ? (
											<input
												type='text'
												name='department'
												value={formValues.department || ""}
												onChange={handleInputChange}
												style={styles.input}
											/>
										) : (
											emp.department
										)}
									</td>
									<td style={styles.td}>
										{editingRow === emp.id ? (
											<input
												type='date'
												name='dateOfJoining'
												value={formValues.dateOfJoining || ""}
												onChange={handleInputChange}
												style={styles.input}
											/>
										) : (
											emp.dateOfJoining
										)}
									</td>
									<td style={styles.td}>
										{editingRow === emp.id ? (
											<input
												type='text'
												name='role'
												value={formValues.role || ""}
												onChange={handleInputChange}
												style={styles.input}
											/>
										) : (
											emp.role
										)}
									</td>
									<td style={styles.td}>
										{editingRow === emp.id ? (
											<>
												<button
													onClick={() => handleEditSave(emp.id)}
													style={styles.saveButton}>
													Save
												</button>
												<button
													onClick={handleEditCancel}
													style={styles.cancelButton}>
													Cancel
												</button>
											</>
										) : (
											<>
												<button
													onClick={() => handleEditStart(emp)}
													style={styles.editButton}>
													Edit
												</button>
												<button
													onClick={() => handleDelete(emp.id)}
													style={styles.deleteButton}>
													Delete
												</button>
											</>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
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
		maxWidth: "1200px",
		margin: "30px auto",
		padding: "20px",
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
	noDataText: {
		textAlign: "center",
		fontSize: "16px",
		color: "#777",
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
		marginTop: "20px",
	},
	headerRow: {
		backgroundColor: "#084c9d",
		color: "#fff",
	},
	th: {
		padding: "15px",
		textAlign: "left",
		borderBottom: "2px solid #ddd",
		fontWeight: "bold",
	},
	row: {
		transition: "background-color 0.3s",
	},
	td: {
		padding: "15px",
		borderBottom: "1px solid #ddd",
	},
	input: {
		width: "100%",
		padding: "8px",
		border: "1px solid #ccc",
		borderRadius: "4px",
	},
	editButton: {
		padding: "5px 10px",
		backgroundColor: "#28a745",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
		marginRight: "5px",
	},
	deleteButton: {
		padding: "5px 10px",
		backgroundColor: "#dc3545",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	},
	saveButton: {
		padding: "5px 10px",
		backgroundColor: "#007BFF",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
		marginRight: "5px",
	},
	cancelButton: {
		padding: "5px 10px",
		backgroundColor: "#6c757d",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	},
};

export default Viewemployees;
