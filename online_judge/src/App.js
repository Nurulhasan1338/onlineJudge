
import './App.css';
import React, { useState } from 'react'
import Signup from './component/Signup';
import Main from './component/Main';
import Mysignin from "./component/Mysignin"
import QuesList from './component/quesList';
import Probstate from './component/context/probstate';
import Alert from '@mui/joy/Alert';
import { CssVarsProvider } from '@mui/joy/styles';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  const [alert, setalert] = useState(null);
  const showAlert=(message)=>{
    setalert(message)
    setTimeout(() => {
      setalert(null);
    }, 1400);
  }

  return (
    <Probstate>
      
    <div className="App">
    <div className="positon-fixed top-0">
    <CssVarsProvider defaultMode="system"> 
    {alert && <Alert className="position-fixed top-0 w-100" color={alert.type} variant="solid">{alert.msg}</Alert>}
    </CssVarsProvider>
    </div>
    <Router>
    <Routes>
    <Route path='/' element={<Mysignin key="login" showAlert = {showAlert}/>} />
    <Route path='/list' element={<QuesList key="list"/>} />
    <Route path="/main" element={<Main key="main" showAlert = {showAlert}/>} /> 
    <Route path="/signup" element={<Signup key="signup" showAlert = {showAlert}/>} /> 
  
    </Routes>
  </Router>
    </div>
    </Probstate>
  );
}

export default App;
