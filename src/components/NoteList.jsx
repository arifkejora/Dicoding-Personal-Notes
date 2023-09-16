// src/components/NoteList.jsx
import React from 'react';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div className="note-item" key={note.id}>
          <div className="note-item__content">
            <h2 className="note-item__title">{note.title}</h2>
            <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
            <p className="note-item__body">{note.body}</p>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(note.id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => onArchive(note.id)}>Archive</button>
          </div>
        </div>
      ))}
      {notes.length === 0 && <p className="notes-list__empty-message">Tidak ada catatan</p>}
    </div>
  );
}

export default NoteList;
