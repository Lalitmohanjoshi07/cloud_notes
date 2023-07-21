import React from "react";
import UpdateModal from "./UpdateModal";

const Noteitem = (props) => {
  let {noteId, id, title, tag, description, deleteNote} = props;
  let data={noteId, id, title, description, tag};
  // console.log(data)
    return (
      <div
      className="card shadow-sm"
      id={id}
      onMouseOver={() => {
        document.getElementById(id).className = "card shadow";
      }}
      onMouseOut={() => {
        document.getElementById(id).className = "card shadow-sm";
      }}
      >
      <div className="card-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className="card-title">{title}</h5>
          <div>
            <img height={"15px"} className="mx-1" src="delete.png" title="delete note" alt="delete" style={{cursor: "pointer"}} onClick={()=>{deleteNote(noteId)}}/>
            <UpdateModal note={data}/>
          </div>
        </div>
        <span className="card-subtitle mb-2 badge rounded-pill bg-secondary">
          {tag}
        </span>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Noteitem;
