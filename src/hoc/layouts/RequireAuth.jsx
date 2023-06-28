import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

export const RequireAuth = () => {
    const location = useLocation();
    const user = useAuth();

    if (!user) {
        return <Navigate to='/auth/sign-in' state={{ from: location }} replace={true} />
    }

    return <Outlet/>
}