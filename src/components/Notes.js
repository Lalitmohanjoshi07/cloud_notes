import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Noteitem from './Noteitem';

// function to display existing notes 
const Notes = () => {
    const context = useContext(NoteContext);
    const { note}= context;
  return (
    <div className="container row my-4">
        <h1>Your notes!</h1>
        {/* creating notes element  */}
        {note.map((element)=>{
            return (
                <div className="col-md-4 my-3" key={element._id}>
                <Noteitem title={element.title} description={element.description} tag={element.tag} />
                </div>
            );
        })
        }

    </div>
  )
}

export default Notes;
