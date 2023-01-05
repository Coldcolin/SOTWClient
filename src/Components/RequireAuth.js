import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = () =>{
    const { saveUser } = useAuth();
    const location = useLocation();

    return (
        saveUser?.name? <Outlet />: <Navigate to="/login" state={{ from : location }} replace />
    )
};

export default RequireAuth;