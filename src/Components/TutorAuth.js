// import { useContext} from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import {AuthContext} from "../Contexts/AuthProvider";
import { useSelector } from "react-redux";

const TutorAuth = () => {
    // const { saveUser } = useContext(AuthContext);
    const location = useLocation();
    const Id = useSelector((e)=> e.Id)
    
  return (
    Id?.Id?.role === "tutor"? <Outlet />: <Navigate to="/user" state={{ from : location }} replace />
  )
}

export default TutorAuth