import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f8f9fc",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          background:
            "linear-gradient(135deg, rgba(0,36,92,1) 0%, rgba(8,76,157,1) 100%)",
          color: "#ffffff",
          padding: "60px 20px",
          textAlign: "center",
          borderRadius: "12px",
          marginBottom: "50px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
          Employee Management System
        </h1>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Manage your organization's employees with ease. Add, edit, and track
          employee details securely and efficiently with our intuitive system.
        </p>
        <button
          style={{
            padding: "12px 30px",
            backgroundColor: "#ffffff",
            color: "#00245c",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#eceff4")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          Get Started
        </button>
      </header>

      {/* Main Content Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          padding: "0 20px",
        }}
      >
        {/* Add Employee */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)")
          }
        >
          <h3
            style={{
              color: "#00245c",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "20px",
            }}
          >
            Add Employee
          </h3>
          <p style={{ color: "#084c9d", fontSize: "16px", marginBottom: "20px" }}>
            Add new employees to the system with secure form validation.
          </p>
          <Link to="/add-employee">
  <button
    style={{
      padding: "10px 25px",
      backgroundColor: "#00245c",
      color: "#ffffff",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      border: "none",
      transition: "all 0.3s ease-in-out",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#084c9d")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#00245c")}
  >
    Add Employee
  </button>
</Link>

        </div>

        {/* View Employees */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)")
          }
        >
          <h3
            style={{
              color: "#00245c",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "20px",
            }}
          >
            View Employees
          </h3>
          <p style={{ color: "#084c9d", fontSize: "16px", marginBottom: "20px" }}>
            Access the list of employees and their details.
          </p>
          <button
            style={{
              padding: "10px 25px",
              backgroundColor: "#00245c",
              color: "#ffffff",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#084c9d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#00245c")}
          >
            View Employees
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default HomePage;
