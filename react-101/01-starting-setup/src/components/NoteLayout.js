import React, { useState } from "react";

import Sidebar from "./Sidebar";
import SelectedNote from "./SelectedNote";
import Form from "./Form";

import "./NoteLayout.css";

export const getHumanDate = iso => {
  const date = new Date(iso);

  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
}

const NoteLayout = () => {
  const [notes, setNotes] = useState([
    {
      id: "7b06-31d2-d55c-8c45",
      timestamp: "2021-11-30T23:19:12.857Z",
      title: "My Special Note 1",
      body: "1 might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine.",
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeNoteIndex, setActiveNoteIndex] = useState(0);

  const toggleFormOpen = options => {
    if (options?.edit === true) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
    setIsFormOpen(!isFormOpen);
  };

  const createNote = data => {
    setNotes(prevState => [...prevState, data]);
    setIsFormOpen(false);
    setActiveNoteIndex(notes.length)
  };
  /**
   * TODO: Look for best practice react update pattern.
   */
  const updateNote = data => {
    const notesNotToUpdate = notes.filter(note => note.id !== data.id);
    setNotes([...notesNotToUpdate, data])
    setIsFormOpen(false);
  };
  const deleteNote = () => {
    const newNotes = notes.filter(
      note => note.title !== notes[activeNoteIndex].title
    );
    setNotes(newNotes);
  };

  const handleSave = formData => {
    if (isEditing) {
      updateNote(formData);
    } else {
      createNote(formData);
    }
  };

  return (
    <section className="layout">
      <Sidebar
        activeNoteIndex={activeNoteIndex}
        notes={notes}
        onNoteSelect={i => setActiveNoteIndex(i)}
        onCreateBtn={toggleFormOpen}
        isFormOpen={isFormOpen}
      />
      
      {isFormOpen ? (
        <Form
          onSave={handleSave}
          selectedNote={notes[activeNoteIndex]}
          isEditing={isEditing}
        />
      ) : (
        <SelectedNote
          selectedNote={notes[activeNoteIndex]}
          onDelete={deleteNote}
          onEdit={() => toggleFormOpen({ edit: true })}
        />
      )}
    </section>
  );
};

export default NoteLayout;
