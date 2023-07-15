import React from "react";

// component to add new notes
const AddNote = () => {
  return (
    <div className="container my-4">
      {/* heading */}
      <h1>Add a Note</h1>
      <form className="my-3">

        {/* title of the note */}
        <div className="row mb-3">
          <label htmlFor="inputTitle" className="col-sm-2 col-form-label">
            Title:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              placeholder="Add Title"
            />
          </div>
        </div>

        {/* description of the Note */}
        <div className="container" style={{height:'200%'}}>
        <div className="row mb-3">
          <label htmlFor="inputDesc" className="col-md-2 col-form-label">
            Description:
          </label>
          <div className="col-md-8">
            <textarea
              className="form-control"
              id="inputDesc"
              placeholder="add some description"
              style={{height:'110px'}}
            />
          </div>
        </div>
        </div>
<div className="my-4">
        {/* add button */}
        <button type="submit" className="btn btn-primary mx-4">
          Add
        </button>
        {/* reset button  */}
        <button type="reset" className="btn btn-warning mx-4">
          reset
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
