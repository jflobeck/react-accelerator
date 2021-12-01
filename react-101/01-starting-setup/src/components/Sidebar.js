import React from "react";
import { getHumanDate } from "./NoteLayout";

import "./Sidebar.css";

const Sidebar = ({ activeNoteIndex, notes, onNoteSelect, onCreateBtn, isFormOpen }) => {
  return (
    <aside className="sidebar">
      <button
        type="button"
        onClick={onCreateBtn}
        className={`button block header-text ${
          isFormOpen ? "secondary" : "tertiary"
        }`}
      >
        {isFormOpen ? "Close" : "Create Note"}
      </button>

      <ul>
        {notes.map((note, i) => {
          const { title, timestamp } = note;
          return (
            <li
              className={i === activeNoteIndex ? "active" : ""}
              key={timestamp}
              onClick={() => onNoteSelect(i)}
            >
              <h3 className="header-text no-margin">{title}</h3>
              <p className="body-text no-margin muted">{getHumanDate(timestamp)}</p>
            </li>
          )}
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
