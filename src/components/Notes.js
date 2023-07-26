import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

// function to display existing notes
const Notes = (props) => {
  let id = 0;
  const context = useContext(NoteContext);
  const { note, deleteNote } = context;

  return (
    <div className="container row my-4">
      <h1>Your notes!</h1>
      {/* creating notes element  */}
      {note.length>0 ? note.map((element) => {
        return (
          <div className="col-md-4 my-3" key={element._id}>
            <Noteitem id={id++} salert={props.salert} noteId={element._id} title={element.title} description={element.description} tag={element.tag} deleteNote={deleteNote}/>
          </div>
        );
      }) : <h6>No notes to display</h6> }
    </div>
  );
};

export default Notes;
