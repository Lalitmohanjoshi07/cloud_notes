import React from "react";
import { Link, useLocation} from "react-router-dom";

function Navbar(props) {
  const loc=useLocation().pathname;
  // const na= useNavigation();
  const logout = ()=>{
    localStorage.removeItem('token');
    props.sett(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <span className="navbar-brand">CLOUDnotes</span>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className= {`nav-link ${(loc==='/home')? 'active':''}`}  aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className= {`nav-link ${(loc==='/about')? 'active':''}`}  to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link className="btn btn-sm btn-warning" to="/" onClick={logout}>logout</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
