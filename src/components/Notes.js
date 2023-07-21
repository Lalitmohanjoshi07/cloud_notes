import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import { useEffect } from "react";

// function to display existing notes
const Notes = () => {
  let id = 0;
  const context = useContext(NoteContext);
  const { note, deleteNote, fetchNote } = context;
  useEffect(() => {
    fetchNote();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container row my-4">
      <h1>Your notes!</h1>
      {/* creating notes element  */}
      {note.map((element) => {
        return (
          <div className="col-md-4 my-3" key={element._id}>
            <Noteitem id={id++} noteId={element._id} title={element.title} description={element.description} tag={element.tag} deleteNote={deleteNote}/>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
