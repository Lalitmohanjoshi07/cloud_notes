import React from "react";

const Noteitem = (props) => {
    const{title,tag,description} = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-subtitle mb-2 badge rounded-pill bg-secondary">{tag}</span>
        <p className="card-text">{description}
        </p>
      </div>
    </div>
  );
};

export default Noteitem;
