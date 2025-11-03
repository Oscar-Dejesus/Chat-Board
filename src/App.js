import './App.css';

import Chat from './Chat'
import Admin from './Admin'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute';
import UI from './UI';
import { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Googlelogin } from './Googlogin';
import { Googlogin } from './Googlogin';
function App() {


  useEffect(() => {
    // Initialize window.user to false if it hasn't been set already
  if (window.user === undefined) {
      window.user = false;
    }
  }, []);



const CLIENT_ID = "158152294175-mbsdbcmafoojpo5pu502kogda88iha4c.apps.googleusercontent.com"

  return (
    
    <>
    <UI/>
    <GoogleOAuthProvider clientId={CLIENT_ID}>

      <Googlogin/>
    </GoogleOAuthProvider>

    <HashRouter >
  <Routes>
    <Route index element={<Chat />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/admin" element={<Admin />} />
    </Route>
    <Route path="/login" element={<Login />} />
  </Routes>
</HashRouter>
    
    
    </>
  );
}

export default App;
