import React from 'react';
import "./SideBar.css"
import { useStateContext } from '../../Contexts/ContextProvider.js';
import image from "../../images/images 3.jpg"
import {useNavigate, NavLink } from "react-router-dom"
import logo from "../../images/logo.jpeg"
import { TbLayoutDashboard } from "react-icons/tb";
import { FiUser } from "react-icons/fi"
import {MdOutlineAssessment} from "react-icons/md"
import {MdOutlineHowToVote} from "react-icons/md";
import {MdOutlineLogout} from "react-icons/md"


const Sidebar = () => {
  // const navigate = useNavigate()
    // const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

    // const handleCloseSideBar = () => {
    //     if (activeMenu !== undefined && screenSize <= 900) {
    //     setActiveMenu(false);
    //     }
    // };
  return (
    <div className="main-sidebar">
      <div className="top">
        <img src={logo} alt="logo" className="logo"/>
        <div className="user-info">
          <img className="profile-image" src={image} alt="img" />
          <div className="who">
            <p>Chiamaka Dubem</p>
            <span>Frontend Designer</span>
          </div>
        </div>
      </div>
      <div className="navs">
        <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="/"><TbLayoutDashboard/> <span>Dashboard</span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="user"> <FiUser/> <span>User Profile</span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="assessment"><MdOutlineAssessment/> <span>Student Assessment</span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="voting" ><MdOutlineHowToVote/> <span>Vote</span></NavLink>
      </div>
      <div className="Log-out"><MdOutlineLogout/> Logout</div>
    </div>
  )
}

export default Sidebar