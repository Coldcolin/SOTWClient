import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/NavBar/Navbar'
import Sidebar from '../Components/SideBar/Sidebar'
import StudentOTW from '../Pages/STOW/StudentOTW'
import Voting from '../Pages/VOTING/Voting'
import UserProfile from '../Pages/UserProfile/UserProfile'
import Assessment from '../Pages/Assessment/Assessment'
import "./Dashboard.css"

const Dashboard = () => {
return (
    <div className="body">
    <div className="sidebar">
        <Sidebar/>
    </div>
    <div className="dashboard">
        <div className="navbar">
        <Navbar/>
        </div>
        <div className="main-content">
        <Routes>
            <Route path="/" element={<StudentOTW/>}/>
            <Route path="voting" element={<Voting/>}/>
            <Route path="user" element={<UserProfile/>}/>
            <Route path="assessment" element={<Assessment/>}/>
        </Routes>
        </div>
    </div>
</div>
)
}

export default Dashboard