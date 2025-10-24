import { Outlet,Navigate } from "react-router-dom";
import { useEffect } from 'react';
const ProtectedRoute = () => {



  
    if (window.user){
        return <Outlet/>
    }else{
        return <Navigate to='/login'/>
    }
 
};

export default ProtectedRoute;