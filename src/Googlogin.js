
import { GoogleLogin } from "@react-oauth/google"
import {jwtDecode} from "jwt-decode"
export function Googlogin(){
    return(
        <>
        <GoogleLogin 
        onSuccess={(credentialResponse)=>{
            console.log(credentialResponse)
            console.log(jwtDecode(credentialResponse.credential))
            
        }} 
        onError={()=>{console.log("error")}}/>
        
        </>
    )
}