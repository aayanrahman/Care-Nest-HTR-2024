import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.tsx";
import Dashboard from "./Components/Dashboard.tsx";
import Charts from "./Components/Charts.tsx";
import DataInputForm from "./Components/DataInputForm.tsx";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Home from "./Components/Home.tsx"; // Import Home component if needed

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "100vw" }}>
                <Routes>
                    {/* Home Route */}
                    <Route
                        path="/home"
                        element={<Home/>}
                    />

                    {/* Dashboard Route */}
                    <Route path="/dashboard" element={<Dashboard />} />

                </Routes>
            </div>
        </Router>
    );
};

export default App;
