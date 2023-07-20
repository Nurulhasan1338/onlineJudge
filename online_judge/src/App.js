
import './App.css';
// import Login from "./component/login.js"
import Signup from './component/Signup';
import Main from './component/Main';
import Mysignin from "./component/Mysignin"
import QuesList from './component/quesList';
import Probstate from './component/context/probstate';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Probstate>
    <div className="App">
    <Router>
    <Routes>
    {/* <Route path='/' element={<Mysignin key="login"/>} /> */}
    <Route path='/' element={<QuesList key="table"/>} />
    <Route path="/main" element={<Main key="main"/>} /> 
    <Route path="/signup" element={<Signup key="signup"/>} /> 
  
    </Routes>
  </Router>
    </div>
    </Probstate>
  );
}

export default App;
