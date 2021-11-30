import React from "react";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <button
        type="button"
        className={`button block header-text ${
          props.isFormOpen ? "secondary" : "tertiary"
        }`}
        // className="button block tertiary header-text"
        onClick={props.onCreateBtn}
      >
        {props.isFormOpen ? "Close" : "Create Note"}
      </button>
      <ul>
        {props.notes.map((note, i) => (
          <li
            className="active"
            key={note.header}
            onClick={() => props.onNoteSelect(i)}
          >
            <h3 className="header-text no-margin">{note.header}</h3>
            <p className="body-text no-margin muted">{note.timestamp}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
