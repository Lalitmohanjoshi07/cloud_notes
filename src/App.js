import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import { useState } from "react";
import Signup from "./components/Signup";

function App() {
  const [logedin, setLogedin] = useState(true);
  return (
    <>
      <NoteState>
        <Router>
          {logedin && <Navbar sett={setLogedin}/>}

          <Routes>
            <Route path="/" element={<Login sett={setLogedin} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup sett={setLogedin} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
