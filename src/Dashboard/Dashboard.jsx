import React, {useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/NavBar/Navbar'
import Sidebar from '../Components/SideBar/Sidebar'
import Side from '../Components/SideBar/Side'
import StudentOTW from '../Pages/STOW/StudentOTW'
import Voting from '../Pages/VOTING/Voting'
import UserProfile from '../Pages/UserProfile/UserProfile'
import Assessment from '../Pages/Assessment/Assessment'
import "./Dashboard.css"
import AllUsers from "../Pages/AllUsers/AllUsers";
import AllStudents from "../Pages/AllStudents/AllStudents";
import Tutors from "../Pages/Tutors/AllTutors";
import RequireAuth from '../Components/RequireAuth';
import TutorAuth from "../Components/TutorAuth.js"
import Detail from '../Pages/UserProfile/Detail'
import {AuthContext} from "../Contexts/AuthProvider"


const Dashboard = () => {
    const { showSide, toggleSide} = useContext(AuthContext)
    
return (
    <div className="body">
    <div className="sidebar">
        <Sidebar/>
    </div>
    <div className="dashboard">
        <div className="navbar">
        <Navbar/>
        {showSide ? <Side toggle={toggleSide}/>: null }
        </div>
        <div className="main-content">
        <Routes>
            <Route path="/" element={<StudentOTW/>}/>
            <Route element={<TutorAuth />}>
                <Route path="assessment" element={<Assessment/>}/>
            </Route>
            <Route element={<RequireAuth />} >
                <Route path="voting" element={<Voting/>}/>
                <Route path="user" element={<UserProfile/>}/>
                <Route path="detail/:id" element={<Detail/>}/>
            </Route>
            
            <Route path="users" element={<AllUsers/>}/>
            <Route path="students" element={<AllStudents/>}/>
            <Route path="tutors" element={<Tutors/>}/>
            
        </Routes>
        </div>
    </div>
</div>
)
}

export default Dashboard