import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage';
import { LogInPage } from './Pages/LogInPage/LogInPage';
import { HomePageNotLoged } from './Pages/HomePage/NotLoget/HomePageNotLoged';
import {LoginComponent} from "./components/Login_Component/LoginComponent";
import {RegisterComponent} from "./components/Register_Component/RegisterComponent";
import {HomePageLoged} from "./Pages/HomePage/Loged/HomePageLoged";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePageNotLoged />} />
                <Route path="/register" element={<RegisterComponent />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/loged" element={<HomePageLoged />} />

            </Routes>
        </Router>
    );
}

export default App;
