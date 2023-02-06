import React from 'react';
import "./Side.css"
import image from "../../images/avatar.jpg"
import {useNavigate, NavLink } from "react-router-dom"
import logo from "../../images/logo.jpeg"
import { TbLayoutDashboard } from "react-icons/tb";
import { FiUser } from "react-icons/fi"
import {MdOutlineAssessment} from "react-icons/md"
import {MdOutlineLogout} from "react-icons/md";
import {useSelector, useDispatch} from "react-redux";
import { signOut } from "../../Contexts/IdReducer";
import Swal from 'sweetalert2';
import { AiOutlineClose } from 'react-icons/ai';

const Side = ({toggle}) => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.Id.Id);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  return (
    <div className="main-sidebar1" onClick={toggle}>
      <div className="top1">
        <div style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "space-around"}}>
        <AiOutlineClose/>
        <img src={logo} alt="logo" className="logo1" />
        </div>
        {
          profile ? (<div className="user-info1">
          {!profile? (<img className="profile-image1" src={image} alt="img" />):(<img className="profile-image1" src={profile.image} alt="img" />)}
          <div className="who1">
            <p>{profile.name}</p>
            <span>{profile.stack}</span>
          </div>
        </div>): (<div className="user-info1">
          <img className="profile-1" src={image} alt="img" />
          <div className="who1">
            <p>Welcome</p>
            <span>Visitor</span>
          </div>
        </div> )
        }
      </div>
      <div className="navs1">
        <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="/"><TbLayoutDashboard/> <span>Dashboard</span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-active1" : "navigation1")}to="user"> <FiUser/> <span>User Profile</span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-active1" : "navigation1")}to="assessment"><MdOutlineAssessment/> <span>Student Assessment</span></NavLink>
        {/* <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="voting" ><MdOutlineHowToVote/> <span>Vote</span></NavLink> */}
      </div>
      <div className="Log-out1"
      onClick={() => {
				dispatch(signOut());
                localStorage.setItem("SOTWUser", JSON.stringify({}))
                Toast.fire({
                    icon: 'success',
                    title: 'Logged out successfully'
                })
                navigate("/login")
            }}
      ><MdOutlineLogout/> Logout</div>
    </div>
  )
}

export default Side