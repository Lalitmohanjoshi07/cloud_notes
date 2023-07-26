import React, { useState } from "react";
import NoteContext from "./NoteContext";
import AuthContext from "../auth/AuthContext";


const NoteState = (props) => {
  const url = "http://localhost:5000/api";
  const [note, setNote] = useState([]);

  //fetch notes
  const fetchNote = async () => {

    //token
    const token=localStorage.getItem('token');

    //API calls
    const response = await fetch(`${url}/notes/read`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'token':token,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    let data= await response.json();
    let fnotes = await data.notes;
    // console.log(fnotes)
    setNote(fnotes);
    if(fnotes){
      return true;
    }
    return false;
  };

  //add note
  const addNote = async (title, description, tag) => {

    //token
    const token=localStorage.getItem('token');

    // api calls
    let data = {title, description};
    if(tag){
      data.tag=tag;
    }
    const e= await fetch(url+'/notes/create', {
      method: "PUT",// include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "token":token
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    //client side rendering
    const res=await e.json();
    let newNote=[];
    note.forEach(element => {
      newNote.push(element);
    });
    newNote.push(res);
    setNote(newNote);
  };

  // detete a note
  const deleteNote = (id) => {

    //token
    const token=localStorage.getItem('token');

    // api calls
    fetch(url+'/notes/delete'+id, {
      method: "DELETE",// include, *same-origin, omit
      headers: {
        // "Content-Type": "application/json",
        "token":token
      }
    });

    //client side loading
    let newNote = [];
    note.forEach((element) => {
      if (element._id !== id) {
        newNote.push(element);
      }
    });
    setNote(newNote);
  };

  //update note
  const updateNote =async (id, title, description, tag) => {

    //token
    const token=localStorage.getItem('token');

    //api calls
    let data = {};
    if(title){
      data.title=title;
    }
    if(description){
      data.description=description;
    }
    if(tag){
      data.tag=tag;
    }
    await fetch(url+'/notes/update'+id, {
      method: "PUT",// include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "token":token
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    // client side code
    let newNote=[];
    note.forEach((element)=>{
      if(element._id===id){
        element.title=title;
        element.description= description;
        element.tag= tag;
      }
      newNote.push(element);
    });
    setNote(newNote);
  };


//function to login 
  const userLogin = async(email,password) =>{

    let data={email:email,password:password};

    // making api call 
    let response = await fetch(url+'/auth/login',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    let res= await response.json();

    //checking for user credentials
    if(res.success){
      localStorage.setItem('token',res.token)
      return 1;
    }else{
      // alert(res.msg);
      return (res.msg);
    }
  }

//function for signup
  const userSignup= async(name,email,password)=>{

    let data={name:name, email:email, password:password};
    // making api call 
    let response = await fetch(url+'/auth/signup',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    let res= await response.json();

    //checking for user credentials
    if(res.success){
      localStorage.setItem('token',res.token)
      return 1;
    }else{
      return (res.msg);
    }
  }

  return (
    <NoteContext.Provider value={{note, updateNote, addNote, deleteNote, fetchNote}}>
      <AuthContext.Provider value={{userSignup,userLogin}}>
        {props.children}
      </AuthContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteState;
