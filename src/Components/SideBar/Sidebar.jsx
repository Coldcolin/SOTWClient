import React, {useContext} from 'react';
import "./SideBar.css"
// import { useStateContext } from '../../Contexts/ContextProvider.js';
import image from "../../images/avatar.jpg"
import {useNavigate, NavLink} from "react-router-dom"
import logo from "../../images/logo.jpeg"
import { TbLayoutDashboard } from "react-icons/tb";
import { FiUser } from "react-icons/fi"
import {MdOutlineAssessment} from "react-icons/md"
import {FiLogIn} from "react-icons/fi"
// import {MdOutlineHowToVote} from "react-icons/md";
import {MdOutlineLogout} from "react-icons/md";
import {useSelector, useDispatch} from "react-redux";
// import useAuth from "../../Hooks/useAuth.js";
import { signOut } from "../../Contexts/IdReducer";
import Swal from 'sweetalert2';
// import { AuthContext } from '../../Contexts/AuthProvider';



const Sidebar = () => {
  // const {saveUser, logOutFunc} = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.Id.Id);
  // const [user, setUser] = React.useState(JSON.parse((localStorage.getItem("SOTWUser"))))

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

  // console.log(profileImage)
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
        <img src={logo} alt="logo" className="logo" />
        {
          profile ? (<div className="user-info">
          {profile.image === ""? (<img className="profile-image" src={image} alt="img" />):(<img className="profile-image" src={profile.image} alt="img" />)}
          <div className="who">
            <p>{profile.name}</p>
            <span>{profile.stack}</span>
          </div>
        </div>): (<div className="user-info">
          <img className="profile-image" src={image} alt="img" />
          <div className="who">
            <p>Welcome</p>
            <span>Visitor</span>
          </div>
        </div> )
        }
      </div>
      <div className="navs">
        <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="/"><TbLayoutDashboard/> <span>Dashboard</span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="user"> <FiUser/> <span>User Profile</span></NavLink>
        {profile.role === "tutor"?<NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="assessment"><MdOutlineAssessment/> <span>Student Assessment</span></NavLink>: null}
        {
        profile.id !== "" ? <div className="Log-out" onClick={() => {
                dispatch(signOut());
                Toast.fire({
                    icon: 'success',
                    title: 'Logged out successfully'
                })
                navigate("/login")
							}}
      ><MdOutlineLogout/> Logout</div>: <div className="Log-out" style={{color: "black"}} onClick={() =>{navigate("/login")}}
      ><FiLogIn color="black"/> Login</div>
      }
        {/* <NavLink className={({ isActive }) => (isActive ? "nav-active" : "navigation")}to="voting" ><MdOutlineHowToVote/> <span>Vote</span></NavLink> */}
      </div>
      
    </div>
  )
}

export default Sidebar