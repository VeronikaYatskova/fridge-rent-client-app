import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks"

export const RenterRoleAuth = () => {
    const user = useAuth();

    if (user.isOwner) {
        return <Navigate to='/not-found'/>
    }

    return <Outlet />
}