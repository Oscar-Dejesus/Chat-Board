import { Outlet,Navigate } from "react-router-dom";

const LoginCheck = () => {



    
    if (localStorage.getItem("token")){
        return <Outlet/>
        
        
    }else{
        return <Navigate to='/login' replace/>

    }
 
};

export default LoginCheck;