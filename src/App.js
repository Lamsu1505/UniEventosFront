import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './Pages/RegisterPage';
import { LogInPage } from './Pages/LogInPage';
import { HomePage } from './Pages/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LogInPage />} />
            </Routes>
        </Router>
    );
}

export default App;
