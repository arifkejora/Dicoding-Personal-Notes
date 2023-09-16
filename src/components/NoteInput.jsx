// src/components/NoteInput.jsx
import React, { useState } from 'react';

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddNote = () => {
    if (title.trim() === '' || body.trim() === '') {
      return;
    }

    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);

    // Reset input fields
    setTitle('');
    setBody('');
  };

  return (
    <div className="note-input">
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-input__title"
      />
      <span className="note-input__title__char-limit">
        {title.length} / 50 karakter
      </span>
      <textarea
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="note-input__body"
      ></textarea>
      <button onClick={handleAddNote}>Tambah Catatan</button>
    </div>
  );
}

export default NoteInput;
