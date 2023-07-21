import React, { useState, useContext} from "react";
import NoteContext from "../context/notes/NoteContext";

const UpdateModal = (props) => {

    //importing updateNote function from context
    const context = useContext(NoteContext);
    const{updateNote}=context;

    const{id, noteId, title, description, tag}=props.note;
    const [state, setState] = useState({etitle:'title', edescription: 'description', etag: 'tag'});

    const update=()=>{
         setState({ etitle: title, edescription: description, etag: tag });
        //  console.log(state)
    };

    const change = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
    };

  return (
    <>
      {/* update button to launch update modal  */}
      <img
        height={"15px"}
        className="mx-1"
        src="edit.png"
        title="update note"
        alt="update"
        style={{ cursor: "pointer" }}
        data-bs-toggle="modal"
        data-bs-target={`#UpdateModal${id}`}
        onClick={update}
      />

      <div
        className="modal fade"
        id={`UpdateModal${id}`}
        tabIndex="-1"
        aria-labelledby="UpdateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="UpdateModalLabel">
                Update Note
              </h5>
              {/* cross button  */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            
            {/* modal body  */}
            <div className="modal-body container">
              .{/* title updated  */}
              <div className="row mb-3">
                <label htmlFor={`etitle${id}`} className="col-sm-3 col-form-label">
                  Title:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="etitle"
                    className="form-control"
                    id={`etitle${id}`} 
                    value={state.etitle}
                    onChange={change}
                  />
                </div>
              </div>
              {/* description updated  */}
              <div className="row mb-3">
                <label htmlFor={`edescription${id}`} className="col-sm-3 col-form-label">
                    Description:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="edescription"
                    className="form-control"
                    id={`edescription${id}`}
                    value={state.edescription}
                    onChange={change}
                  />
                </div>
              </div>
              {/* tag updated  */}
              <div className="row mb-3">
                <label htmlFor={`etag${id}`} className="col-sm-3 col-form-label">
                    Tag:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="etag"
                    className="form-control"
                    id={`etag${id}`}
                    value={state.etag}
                    onChange={change}
                  />
                </div>
              </div>
            </div>

            {/* modal footer  */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={()=>{updateNote(noteId, state.etitle, state.edescription, state.etag)}}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
