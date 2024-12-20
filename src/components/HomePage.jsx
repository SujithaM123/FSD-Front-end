/** @format */

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div
			style={{
				fontFamily: "'Poppins', sans-serif",
				backgroundColor: "#f5f7fa",
				minHeight: "100vh",
				padding: "20px",
			}}>
			{/* Header Section */}
			<header
				style={{
					background:
						"linear-gradient(135deg, rgba(0,36,92,1) 0%, rgba(8,76,157,1) 100%)",
					color: "#ffffff",
					padding: "60px 20px",
					textAlign: "center",
					borderRadius: "20px",
					marginBottom: "50px",
					boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
				}}>
				<h1
					style={{
						fontSize: "50px",
						fontWeight: "700",
						marginBottom: "20px",
						lineHeight: "1.2",
						letterSpacing: "1px",
					}}>
					Employee Management System
				</h1>
				<p
					style={{
						fontSize: "18px",
						marginBottom: "30px",
						maxWidth: "700px",
						margin: "0 auto",
						lineHeight: "1.8",
						color: "#d6e4f0",
					}}>
					Effortlessly manage employee details with our secure and efficient
					system. Add, view, and organize your workforce with just a few clicks.
				</p>
				<Link to='/get-started'>
					<button
						style={{
							padding: "15px 40px",
							backgroundColor: "#ffffff",
							color: "#00245c",
							borderRadius: "10px",
							fontSize: "18px",
							fontWeight: "600",
							cursor: "pointer",
							border: "none",
							transition: "all 0.3s ease-in-out",
							boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
						}}
						onMouseEnter={(e) => {
							e.target.style.backgroundColor = "#eceff4";
							e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
						}}
						onMouseLeave={(e) => {
							e.target.style.backgroundColor = "#ffffff";
							e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
						}}>
						Get Started
					</button>
				</Link>
			</header>

			{/* Main Content Section */}
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "30px",
					padding: "20px",
				}}>
				{/* Add Employee */}
				<div
					style={{
						backgroundColor: "#ffffff",
						padding: "30px",
						borderRadius: "15px",
						boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
						textAlign: "center",
						transition: "all 0.3s ease-in-out",
						maxWidth: "350px",
						width: "100%",
					}}
					onMouseEnter={(e) =>
						(e.currentTarget.style.boxShadow =
							"0 12px 30px rgba(0, 0, 0, 0.25)")
					}
					onMouseLeave={(e) =>
						(e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)")
					}>
					<h3
						style={{
							color: "#00245c",
							fontWeight: "700",
							marginBottom: "15px",
							fontSize: "22px",
						}}>
						Add Employee
					</h3>
					<p
						style={{
							color: "#084c9d",
							fontSize: "16px",
							marginBottom: "25px",
							lineHeight: "1.6",
						}}>
						Easily add new employees with our secure and user-friendly
						interface.
					</p>
					<Link to='/add-employee'>
						<button
							style={{
								padding: "12px 30px",
								backgroundColor: "#00245c",
								color: "#ffffff",
								borderRadius: "8px",
								fontSize: "16px",
								fontWeight: "600",
								cursor: "pointer",
								border: "none",
								transition: "all 0.3s ease-in-out",
							}}
							onMouseEnter={(e) => (e.target.style.backgroundColor = "#084c9d")}
							onMouseLeave={(e) =>
								(e.target.style.backgroundColor = "#00245c")
							}>
							Add Employee
						</button>
					</Link>
				</div>

				{/* View Employees */}
				<div
					style={{
						backgroundColor: "#ffffff",
						padding: "30px",
						borderRadius: "15px",
						boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
						textAlign: "center",
						transition: "all 0.3s ease-in-out",
						maxWidth: "350px",
						width: "100%",
					}}
					onMouseEnter={(e) =>
						(e.currentTarget.style.boxShadow =
							"0 12px 30px rgba(0, 0, 0, 0.25)")
					}
					onMouseLeave={(e) =>
						(e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)")
					}>
					<h3
						style={{
							color: "#00245c",
							fontWeight: "700",
							marginBottom: "15px",
							fontSize: "22px",
						}}>
						View Employees
					</h3>
					<p
						style={{
							color: "#084c9d",
							fontSize: "16px",
							marginBottom: "25px",
							lineHeight: "1.6",
						}}>
						Access and manage employee details with our organized dashboard.
					</p>
					<Link to='/view'>
						<button
							style={{
								padding: "12px 30px",
								backgroundColor: "#00245c",
								color: "#ffffff",
								borderRadius: "8px",
								fontSize: "16px",
								fontWeight: "600",
								cursor: "pointer",
								border: "none",
								transition: "all 0.3s ease-in-out",
							}}
							onMouseEnter={(e) => (e.target.style.backgroundColor = "#084c9d")}
							onMouseLeave={(e) =>
								(e.target.style.backgroundColor = "#00245c")
							}>
							View Employees
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
