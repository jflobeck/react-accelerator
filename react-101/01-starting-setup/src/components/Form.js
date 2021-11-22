//build form separately but use to both create and edit notes

//start with addition and push to existing state

import React, { useState } from "react";

const Form = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const dateChangeHandler = () => {
    setEnteredDate(new Date());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNoteData = {
      header: enteredTitle,
      body: enteredBody,
      timestamp: "Last Updated: " + enteredDate,
    };
    console.log(enteredNoteData);
  };
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
      <button type="submit" onClick={dateChangeHandler}>
        Save
      </button>
    </form>
  );
};

export default Form;
