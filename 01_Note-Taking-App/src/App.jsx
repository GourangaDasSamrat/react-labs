import { useState } from "react";
import "./App.css";

const App = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const changeTitle = (e) => setNoteTitle(e.target.value);
  const addNote = (e) => {
    e.preventDefault();
    if (noteTitle.trim === "") {
      return alert("Write something on note field");
    }

    editMode ? updateNote() : createNote();
  };
  const createNote = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };

    setNotes([newNote, ...notes]);
    setNoteTitle("");
  };
  const deleteNote = (noteId) =>
    setNotes(notes.filter((item) => item.id !== noteId));
  const editNote = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };
  const updateNote = () => {
    const updatedNote = notes.map((item) => {
      if (item.id === editableNote.id) {
        return {
          ...item,
          title: noteTitle,
        };
      }
      return item;
    });

    setNotes(updatedNote);
    setEditMode(false);
    setNoteTitle("");
  };

  return (
    <>
      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Write your notes here"
          value={noteTitle}
          onChange={changeTitle}
        />
        <button type="submit" className="add-btn">
          {editMode ? "Update note" : "Add note"}
        </button>
      </form>
      <div className="note-container">
        <h2>Your Notes</h2>
        <ul>
          {notes.map((note) => (
            <>
              <li key={note.id}>
                <span>{note.title}</span>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editNote(note)}
                >
                  Edit note
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete note
                </button>
              </li>
              <br />
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
