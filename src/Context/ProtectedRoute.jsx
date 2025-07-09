import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({children}) =>{
    const {isLoggedIn} = useAuth();
    console.log('ProtectedRoute', isLoggedIn);
    
    return isLoggedIn ? children : <Navigate to='/login' />
}