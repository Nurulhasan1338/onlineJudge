
import './App.css';
import Login from "./component/login.js"
import Signup from './component/Signup';
import Main from './component/Main';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/' element={<Login key="login"/>} /> 
    <Route path="/signup" element={<Signup key="signup"/>} /> 
    <Route path="/main" element={<Main key="mian"/>} /> 
    </Routes>
  </Router>
    </div>
  );
}

export default App;
