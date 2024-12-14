import React from "react";
import Dashboard from "./Components/Dashboard";

const App = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <header>
                <h1>SnugSafe Dashboard</h1>
                <p>Monitor and analyze neonatal data with ease.</p>
            </header>
            <main>
                <Dashboard />
            </main>
            <footer style={{ marginTop: "20px", textAlign: "center" }}>
                <p>&copy; 2024 SnugSafe. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;