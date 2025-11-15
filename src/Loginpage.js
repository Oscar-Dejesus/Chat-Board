
import { GoogleLogin,googleLogout } from "@react-oauth/google"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const backend =process.env.REACT_APP_BACKEND_URL;
export function Loginpage(){
    const [Alert,setAlert]= useState("Login Through email");
    const navigate = useNavigate();
    useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "false") {
        navigate("/chat", { replace: true });
    }
    
    }, []);

    return(
        <>
        <div className="login-page-wrap">
            <div className="login-page">
                <h1 style={{color:'white'}}>{Alert}</h1>

                <GoogleLogin 
                onSuccess={(credentialResponse)=>{
                    fetch((`${backend}/api/login`),{
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json', 
                        },
                        body: JSON.stringify({
                            Token:credentialResponse.credential
                        })
                    })
                    .then((res)=>res.json())
                    .then(data => {
                    if(data.error){
                        setAlert(data.error)
                        return
                        
                    }
                    
                    console.log('Server response:', data);
                    localStorage.setItem("token",data.Token);
                    navigate("/chat", { replace: true });
                    })

                    
                    
                }} 
                onError={()=>{console.log("error")}}
                auto_select={true}/>
                <a className="Links-text" style = {{
                    marginTop:'40px',
                    fontSize:'20px',
                    cursor:'pointer',
                    color: 'rgba(255, 255, 255, 1)', 
                    textDecoration:'underline'}} onClick={()=>{navigate('/signup')}}>Signup</a>
            </div>
        </div>
        
        </>
    )
}