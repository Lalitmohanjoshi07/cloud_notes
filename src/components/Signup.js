import React, { useContext, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const Signup = (props)=>{
  useEffect(()=>{
    props.sett(false);
    document.title='CLOUDnotes-signup'
    // eslint-disable-next-line
    },[])
    
    const history=useNavigate();
    const context = useContext(AuthContext)
    // console.log(context.ltoken); 
    const submit= async(e)=> {
      e.preventDefault();
      let email=document.getElementById('inputEmail').value;
      let name=document.getElementById('name').value;
      let password=document.getElementById('inputPassword').value
      let x=await context.userSignup(name,email,password);
      if(x===1){
        history('/home');
        props.sett(true);
        props.salert({type:'success', msg:'signup success'})
      }else{
        props.salert({type:'danger', msg: x});
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
            <h4 className="my-3">Signup to continue</h4>

            {/* name  */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                name
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" placeholder="your name"  required/>
              </div>
            </div>
            {/* email  */}
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail" placeholder="email" autoComplete='username' required/>
              </div>
            </div>

            {/* password  */}
            <div className="row mb-3">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" placeholder="password" autoComplete='current-password' required/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary"style={{margin:'5px'}}>
              signup
            </button>
            <button className="btn btn-warning" type="reset" onClick={()=>{history('/')}}>login</button>
          </form>

        </div>
       )
}

export default Signup