import React, { useContext, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const Login = (props) => {

   // eslint-disable-next-line
  useEffect(()=>{props.sett(false);},[])
  
  const history=useNavigate();
  const context = useContext(AuthContext)
  // console.log(context.ltoken);

  const submit= async(e)=> {
    e.preventDefault();
    let email=document.getElementById('inputEmail').value;
    let password=document.getElementById('inputPassword').value
    let x=await context.userLogin(email,password);
    if(x===1){
      history('/home');
      props.sett(true);
    }
  }

  const form={backgroundColor:'#fffcadb8',maxWidth:"50%", position: "fixed", top: "25%", left: "25%", border:"solid black 2px",borderRadius: '10px'};
  return (
    <div>
      <div style={{ filter: "blur(3px)", position: "fixed" }}>
        {" "}
        <img src="blurr.png" alt="hii" />{" "}
      </div>
        <form onSubmit={submit} className="container p-3" style={form}>
          <center><h2>CLOUDnotes</h2></center>
          <h4 className="my-3">Login to continue</h4>
          <div className="row mb-3">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" placeholder="email" autoComplete='username' required/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" placeholder="password" autoComplete='current-password' required/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary"style={{margin:'5px'}}>
            login
          </button>
          <button className="btn btn-warning"onClick={()=>{history('/signup')}}>signup</button>
        </form>
        
      </div>
  );
};

export default Login;
