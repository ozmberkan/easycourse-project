import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import TeacherRateProfile from './pages/teacher/TeacherRateProfile';
import Student from './pages/student/StudentProfile';
import TeacherProfile from './pages/teacher/TeacherProfile';
import TeacherSearch from './pages/teacher/TeacherSearch.jsx';
import TeacherMeet from './pages/teacher/TeacherMeet.jsx';
import StudentMeet from './pages/student/StudentMeet.jsx';
import Contact from './pages/contact/Contact';
import Advantage from './pages/advantage/Advantage';

import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/teacherrate" element={<TeacherRateProfile />} />
            <Route path="/teacherprofile" element={<TeacherProfile />} />
            <Route path="/studentprofile" element={<Student />} />
            <Route path="/teachersearch" element={<TeacherSearch />} />
            <Route path="/teachermeet" element={<TeacherMeet />} />
            <Route path="/studentmeet" element={<StudentMeet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/advantage" element={<Advantage />} />
        </Routes>
    </BrowserRouter>
</React.StrictMode>
);