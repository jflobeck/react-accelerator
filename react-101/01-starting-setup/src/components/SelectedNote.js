import React from "react";
import "./Sidebar.css";

const SelectedNote = (props) => {
  return (
    <main>
      <header>
        <p className="body-text no-margin muted">
          {props.selectedNote.timestamp}
        </p>
        <div className="button-group">
          <button
            type="button"
            className="button primary header-text"
            onClick={props.onEditBtnClick}
          >
            Edit Note
          </button>
          <button
            type="button"
            className="button secondary header-text"
            onClick={props.onNoteDelete}
          >
            Delete Note
          </button>
        </div>
      </header>
      <article>
        <h1 className="header-text">{props.selectedNote.header}</h1>
        <p className="body-text">{props.selectedNote.body}</p>
      </article>
    </main>
  );
};
//build form here

export default SelectedNote;
