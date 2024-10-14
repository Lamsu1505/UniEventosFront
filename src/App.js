import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './Pages/RegisterPage';
import { LogInPage } from './Pages/LogInPage';
import { HomePage } from './Pages/HomePage/HomePage';
import {LoginComponent} from "./components/Login_Component/LoginComponent";
import {RegisterComponent} from "./components/Register_Component/RegisterComponent";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterComponent />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/2" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
