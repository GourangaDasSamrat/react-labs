import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  // states
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  // api fetch
  const getNotes = () => {
    fetch("http://localhost:4000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    try {
      getNotes();
    } catch (error) {
      console.error(error);
    }
  }, []);

  // handler functions
  const handleChangeTitle = (e) => setNoteTitle(e.target.value);
  const handleAddNote = (e) => {
    e.preventDefault();
    if (noteTitle.trim === "") {
      return alert("Write something on note field");
    }

    editMode ? handleUpdateNote() : handleCreateNote();
  };
  const handleCreateNote = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };

    try {
      fetch("http://localhost:4000/notes", {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        getNotes().catch((error) => {
          console.error(error);
        });
      });
    } catch (error) {
      console.error(error);
    }

    setNoteTitle("");
  };
  const handleDeleteNote = (noteId) => {
    try {
      fetch(`http://localhost:4000/notes/${noteId}`, {
        method: "DELETE",
      }).then(() => {
        getNotes().catch((error) => {
          console.error(error);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleEditNote = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };
  const handleUpdateNote = () => {
    const { id, ...rest } = editableNote;
    const updatedNote = { ...rest, title: noteTitle };

    try {
      fetch(`http://localhost:4000/notes/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedNote),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        getNotes().catch((error) => {
          console.error(error);
        });
      });
    } catch (error) {
      console.error(error);
    }

    setEditMode(false);
    setNoteTitle("");
  };

  return (
    <>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="Write your notes here"
          value={noteTitle}
          onChange={handleChangeTitle}
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
                  onClick={() => handleEditNote(note)}
                >
                  Edit note
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDeleteNote(note.id)}
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
