import React, { useContext, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const Login = (props) => {

  useEffect(()=>{
    props.sett(false);
    document.title='CLOUDnotes-login'
    // eslint-disable-next-line
  },[])
  
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
      props.salert({type:'success', msg:'login success'})
    }else{
      props.salert({type:'danger', msg: x});
    }
  }

  const form={backgroundColor:'#fffcadb8',maxWidth:"50%", position: "fixed", top: "25%", left: "25%", border:"solid black 2px",borderRadius: '10px'};
  return (
    <>
        <img src="blurr.png"style={{ filter: "blur(3px)" }} alt="hii" />
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
          <button type="reset" className="btn btn-warning"onClick={()=>{history('/signup')}}>signup</button>
        </form>
        
      </>
  );
};

export default Login;
