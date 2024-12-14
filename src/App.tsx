import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx';
import Dashboard from './Components/Dashboard.tsx';
import Charts from './Components/Charts';
//import { DataProvider } from './contexts/DataContext.tsx';
import DataInputForm from './Components/DataInputForm.tsx';
import './App.css';
import "boxicons/css/boxicons.min.css";


const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <Routes>
                    <Route path="/home" element={
                        <>
                            <h1>Home</h1>
                            <p>Welcome to the SnugSafe Dashboard.</p>
                            <DataInputForm addData={(newData) => { console.log(newData); }} />
                        </>
                    } />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/charts" element={<Charts data={[]} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;