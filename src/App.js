import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUpForm from "./pages/SignUpForm";

function Home() {
  const [selected, setSelected] = useState("Home");
  const menuItems = ["Home", "Get Started", "API Reference", "Example Data", "Documents"];
  const navigate = useNavigate(); // Hook điều hướng

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>API Layer</h2>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <button
                key={item}
                className={`menu-button ${selected === item ? "active" : ""}`}
                onClick={() => setSelected(item)}
              >
                {item}
              </button>
            ))}
          </ul>
        </nav>
        <footer>
          <a href="#pricing" className="footer-link">Pricing</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#contact" className="footer-link">Contact</a>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>{selected}</h1>
        <p>This is the content for {selected}.</p>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        <h3>Upload Your First API</h3>
        <button>Upload Your API</button>
        <div className="auth-buttons">
          <button onClick={() => navigate("/login")}>Log In</button> {/* Chuyển sang trang Login */}
          <button onClick={() => navigate("/SignUpForm")}>Sign Up</button> {/* Chuyển sang trang SU */}
        </div>
      </aside>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUpForm" element={<SignUpForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
