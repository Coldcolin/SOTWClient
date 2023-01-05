import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const TutorAuth = () => {
    const { saveUser } = useAuth();
    const location = useLocation();
  return (
    saveUser?.stack === "Tutor"? <Outlet />: <Navigate to="/user" state={{ from : location }} replace />
  )
}

export default TutorAuth