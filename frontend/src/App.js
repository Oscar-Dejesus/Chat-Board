import './App.css';

import Chat from './Chat'
import Admin from './Admin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
    
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route index element= {<Chat/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
