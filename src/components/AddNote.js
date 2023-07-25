import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
// component to add new notes
const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [state, setState] = useState({ title: "", description: "", tag: "" });

  const change = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const add = () => {
    addNote(state.title, state.description, state.tag);
    setState({ title: "", description: "", tag: "" });
    document.getElementById('title').value="";
    document.getElementById('description').value="";
    document.getElementById('tag').value="";
  };

  return (
    <div className="container my-4">
      {/* heading */}
      <h1>Add a Note</h1>
      <form className="my-3" onSubmit={(event) => { event.preventDefault(); add(); }} >
        {/* title of the note */}
        <div className="row mb-3 container">
        <label htmlFor="title" className="col-sm-2 col-form-label">
            <u><h6>Title :</h6></u>
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Add Title"
              onChange={change}
            />
          </div>
          <label htmlFor="tag" className="col-sm-1 col-form-label">
          <u><h6>Tag :</h6></u>
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              name="tag"
              className="form-control"
              id="tag"
              placeholder="Add Tag"
              onChange={change}
            />
          </div>
        </div>

        {/* description of the Note */}
        <div className="row mb-3">
          <label htmlFor="description" className="col-md-2 col-form-label">
          <u><h6>Description :</h6></u>
          </label>
          <div className="col-md-8">
            <textarea
              name="description"
              className="form-control"
              id="description"
              placeholder="add some description"
              style={{ minHeight: "110px" }}
              onChange={change}
            />
          </div>
        </div>

        <div className="my-4">
          {/* add button */}
          <button type="submit" disabled={( (state.title.length < 5) || (state.description.length < 10) )} className="btn btn-primary mx-4">
            Add
          </button>
          {/* reset button  */}
          <button type="reset" disabled={!(state.title || state.description)} className="btn btn-warning mx-4">
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
