import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Alert from "./components/Alert";
import { useState } from "react";
import Signup from "./components/Signup";

function App() {
  
  const [alert, setAlert] = useState({type:'',msg:''});
  const [logedin, setLogedin] = useState(true);
  if(alert.type.length>0){
    setTimeout(() => {
      setAlert({type:'',msg:''});
    }, 1000);
  }
  return (
    <>
      <NoteState>
        <Router>
          {logedin && <Navbar sett={setLogedin} salert={setAlert}/>}
          <Routes>
            <Route path="/" element={<Login sett={setLogedin} salert={setAlert} />} />
            <Route path="/home" element={<Home salert={setAlert}/>} />
            <Route path="/signup" element={<Signup sett={setLogedin} salert={setAlert}/>} />
            <Route path="/about" element={<About salert={setAlert}/>} />
          </Routes>
          <div style={{position:"absolute",top: '0',left:' 0'}}>
            <Alert type={alert.type} msg={alert.msg}/>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
