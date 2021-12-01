import React from "react";
import { getHumanDate } from "./NoteLayout";

import "./Sidebar.css";

const SelectedNote = ({ selectedNote, onDelete, onEdit }) => {
  if (!selectedNote) return <p>You don't have any notes. Create a new one?</p>;

  const { timestamp, title, body } = selectedNote;

  return (
    <main>
      <header>
        <div className="button-group">
          <button
            type="button"
            className="button primary header-text"
            onClick={onEdit}
          >
            Edit Note
          </button>
          <button
            type="button"
            className="button secondary header-text"
            onClick={onDelete}
          >
            Delete Note
          </button>
        </div>
      </header>

      <article>
        <h1 className="header-text">{title}</h1>
        <p className="body-text no-margin muted">
          {getHumanDate(timestamp)}
        </p>
        <p className="body-text">{body}</p>
      </article>
    </main>
  );
};

export default SelectedNote;
