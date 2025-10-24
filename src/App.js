import './App.css';

import Chat from './Chat'
import Admin from './Admin'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute';
import UI from './UI';
import { useEffect } from 'react';
function App() {


  useEffect(() => {
    // Initialize window.user to false if it hasn't been set already
    if (window.user === undefined) {
      window.user = false;
    }
  }, []);





  return (
    
    <>
    <UI/>


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
