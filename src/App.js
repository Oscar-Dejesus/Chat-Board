import './App.css';
import Chatpage from './Chatpage'
import Signup from './Signuppage'
import LoginCheck from './LoginCheck'
import UI from './UI';
import {HashRouter,Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Loginpage } from './Loginpage';
import { Navigate } from "react-router-dom";

function App() {

  useEffect(() => {
    // Initialize window.user to false if it hasn't been set already
  if (window.admin === undefined) {
      window.admin = false;
    }
   
  }, []);


const CLIENT_ID = "158152294175-mbsdbcmafoojpo5pu502kogda88iha4c.apps.googleusercontent.com"

  return (
    
    <>
    <UI/>
    

<HashRouter >
  <Routes>
    <Route index element={<Navigate to='/chat' replace/>}/>
    <Route path="/login" element={
      <GoogleOAuthProvider clientId={CLIENT_ID}>

      <Loginpage/>
    </GoogleOAuthProvider>
     } />
    <Route element={<LoginCheck/>}>
        <Route path="/chat" element={<Chatpage />}/>
    </Route>

    <Route path="/signup" element={
      <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Signup/>
      </GoogleOAuthProvider>
      }/>


  </Routes>
</HashRouter>
    
    
    </>
  );
}

export default App;
/*
ADMIN PAGE 
<Route element={<ProtectedRoute />}>
      <Route path="/admin" element={<Adminpage />} />
    </Route>
    

<Route path="/login" element={<Login />} />

*/