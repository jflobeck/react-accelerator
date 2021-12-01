import React, { useEffect, useState } from "react";

const Form = ({ onSave, selectedNote, isEditing }) => {
  const [formState, setFormState] = useState({
    title: "",
    body: "",
  });

  const handleFormChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    const getID = () => {
      let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      return `${s4()}-${s4()}-${s4()}-${s4()}`
    }

    onSave({
      ...formState,
      id: isEditing ? formState.id : getID(),
      timestamp: new Date().toISOString(),
    });
  }

  useEffect(() => {
    if (isEditing) {
      setFormState(selectedNote);
    }
  }, [isEditing, selectedNote]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Note Title</label>
        <input
          type="text"
          value={formState.title}
          name="title"
          onChange={e => handleFormChange(e)}
          required
        />
      </div>
      <div>
        <label>Note Body</label>
        <textarea
          type="text"
          rows={10}
          name="body"
          value={formState.body}
          onChange={e => handleFormChange(e)}
          required
        />
      </div>
      
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
