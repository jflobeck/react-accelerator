import React, { useState } from "react";

import "./NoteLayout.css";
import Sidebar from "./Sidebar";
import SelectedNote from "./SelectedNote";
import Form from "./Form";

const NoteLayout = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // const toggleEditing = () => {
  //   setIsEditing(!isEditing);
  //   setIsFormOpen(!isFormOpen);
  //   console.log("editing is set to: ", isEditing);
  // };
  const [isFormOpen, setIsFormOpen] = useState(false);
  //handleformopen
  const toggleFormOpen = (options) => {
    if (options?.edit === true) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
    setIsFormOpen(!isFormOpen);
  };

  const [notes, setNotes] = useState([
    {
      header: "My Special Note 1",
      timestamp: "Last Updated: 1:37PM 7/26/19",
      body: "1 might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine.",
    },
    {
      header: "My Special Note 2",
      timestamp: "Last Updated: 1:37PM 7/26/20",
      body: "2 might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine.",
    },
    {
      header: "My Special Note 3",
      timestamp: "Last Updated: 1:37PM 7/26/20",
      body: "3 might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine.",
    },
  ]);
  //active note state and handler to display the click on note in main pane
  const [activeNoteIndex, setActiveNoteIndex] = useState(0);

  const handleNotesSelect = (i) => {
    setActiveNoteIndex(i);
  };
  //this handler filters out the currently displayed note once on click fires on delete btn
  const handleDeletedNote = () => {
    const newNotes = notes.filter(
      (note) => note.header !== notes[activeNoteIndex].header
    );
    setNotes(newNotes);
  };

  //Delete & edit functions and pass as prop to selected note
  const handleNewNote = (enteredNoteData) => {
    // console.log(enteredNoteData);
    const addNewNote = [...notes];
    addNewNote.push(enteredNoteData);
    setNotes(addNewNote);
    setIsFormOpen(!isFormOpen);
  };

  const updateNote = (data) => {
    const prevState = notes;
    //get active note from prevState
    //update note with edited values
    prevState[activeNoteIndex] = data;
    //replace notes state with ammended prevState
    setNotes(prevState);
    setIsFormOpen(!isFormOpen);
  };
  const handleSave = (formData) => {
    if (isEditing) {
      updateNote(formData);
    } else {
      handleNewNote(formData);
    }
  };

  return (
    <section className="layout">
      <Sidebar
        notes={notes}
        onNoteSelect={handleNotesSelect}
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
          onNoteDelete={handleDeletedNote}
          onEditBtnClick={() => toggleFormOpen({ edit: true })}
        />
      )}
    </section>
  );
};

export default NoteLayout;
