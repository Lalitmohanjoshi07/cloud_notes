import React, { useState } from "react";
import NoteContext from "./NoteContext";

const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTk5YzYzOWI3MDVmMzhjZjM3OTQ4ZCIsImlhdCI6MTY4ODk1MDI0NH0.W1ZoxotwEm_C_kJ4nZjzd8ZMPrmVO8CGwCpN11eiRK0";
const NoteState = (props) => {
  const url = "http://localhost:5000/api";
  const [note, setNote] = useState([]);

  //fetch notes
  const fetchNote = async () => {
    const response = await fetch(`${url}/notes/read`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'token':token,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    let fnotes= await response.json();
    // console.log(fnotes)
    setNote(fnotes);
  };

  //add note
  const addNote = async (title, description, tag) => {
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


  return (
    <NoteContext.Provider value={{ note, updateNote, addNote, deleteNote, fetchNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
