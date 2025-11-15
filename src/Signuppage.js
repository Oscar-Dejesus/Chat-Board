
import { useState } from 'react';
import { GoogleLogin,googleLogout } from "@react-oauth/google"
import { useNavigate } from 'react-router-dom';
const backend =process.env.REACT_APP_BACKEND_URL
function Signuppage(){
    const navigate = useNavigate();
    const [name,setname]= useState("");
    const [Alert,setAlert]= useState("Enter a username");
    return(<>
    
     <div className="login-page-wrap">
            <div className="login-page">
                <h1 style={{color:'white'}}>{Alert}</h1>
                <input style={{marginBottom:"10px"}} type="text" placeholder='Enter Your name' onChange={(e) => setname(e.target.value)}></input>

                
                <GoogleLogin
                    onSuccess={ async (credentialResponse)=>{
                        if(!name){
                            setAlert("Please input a name")
                            return
                        }
                        try{
                        const res =await fetch((`${backend}/api/signup`),{ 
                            method: 'POST', 
                            headers: {
                            'Content-Type': 'application/json', 
                            },
                            body: JSON.stringify({
                                Token:credentialResponse.credential,
                                name: name  
                            })
                        })
                        if (!res.ok) {
                            const errorData = await res.json(); // get error info from backend
                            setAlert(errorData.error)
                            return;
                        }
                        const data = await res.json()
                        navigate("/login", { replace: true });
                        }catch(error){
                            console.log(error)
                        }
                        
                        
                        
                    }} 
                    onError={()=>{console.log("error")}}
                    auto_select={true}/>
                    <a className="Links-text" style = {{
                    marginTop:'40px',
                    fontSize:'20px',
                    cursor:'pointer',
                    color: 'rgba(255, 255, 255, 1)', 
                    textDecoration:'underline'}} onClick={()=>{navigate('/login')}}>Login</a>
            </div>
        </div>
    </>);
}

export default Signuppage;