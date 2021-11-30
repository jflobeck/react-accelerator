//build form separately but use to both create and edit notes

//start with addition and push to existing state

import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNoteData = {
      header: enteredTitle,
      body: enteredBody,
      timestamp: "Last Updated: " + new Date().toUTCString(),
    };
    // console.log(enteredNoteData);
    props.onSave(enteredNoteData);
  };

  const populateEditForm = () => {
    setEnteredTitle(props.selectedNote.header);
    setEnteredBody(props.selectedNote.body);
    setEnteredDate(props.selectedNote.timestamp);
    console.log(enteredTitle, enteredBody, enteredDate);
  };

  useEffect(() => {
    if (props.isEditing) {
      populateEditForm();
    }
  }, [props.isEditing]);

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Note Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Note Body</label>
        <input type="text" value={enteredBody} onChange={bodyChangeHandler} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
