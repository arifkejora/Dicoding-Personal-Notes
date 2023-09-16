import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from '../utils';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [newNote, setNewNote] = useState({ title: '', body: '' });

  const handleTitleChange = (e) => {
    setNewNote({ ...newNote, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setNewNote({ ...newNote, body: e.target.value });
  };

  const handleAddNote = () => {
    if (newNote.title.trim() === '' || newNote.body.trim() === '') {
      return;
    }
    const newNoteWithId = {
      ...newNote,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, newNoteWithId]);
    setNewNote({ title: '', body: '' });
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>Personal Notes</h1>
      </div>
      <div className="note-app__body">
        <div className="note-input">
          <input
            type="text"
            placeholder="Title"
            value={newNote.title}
            onChange={handleTitleChange}
          />
          <textarea
            placeholder="Note"
            value={newNote.body}
            onChange={handleBodyChange}
          />
          <button onClick={handleAddNote}>Add Note</button>
        </div>
        <div className="notes-list">
          {notes.length === 0 ? (
            <p className="notes-list__empty-message">No notes to display.</p>
          ) : (
            notes.map((note) => (
              <div className="note-item" key={note.id}>
                <div className="note-item__content">
                  <div className="note-item__title">{note.title}</div>
                  <div className="note-item__date">
                    {showFormattedDate(note.createdAt)}
                  </div>
                  <div className="note-item__body">{note.body}</div>
                </div>
                <div className="note-item__action">
                  <button
                    className="note-item__delete-button"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
