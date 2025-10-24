
import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){

    const [password,setpassword] = useState("")
    const navigate = useNavigate(); 
    
    console.log(window.user)
    const check =() =>{
        
        if (password ==="123"){
            console.log("success")
            window.user=true;
            navigate('/admin')
        }else{
            console.log("fail")
        }
    }
return(
<>
<input onChange={ (e)=> setpassword(e.target.value)}/> 
<button onClick={(check)}>Login</button>
</>
);
}
export default Login;