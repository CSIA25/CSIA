import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./notes.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [tag, setTag] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Tag color mapping
  const tagColors = {
    Work: "#0077b6",
    Personal: "#f77f00",
    General: "#6a4c93",
    Default: "#9b9ea4",
  };

  const getTagColor = (tag) => tagColors[tag] || tagColors.Default;

  // Add a new note
  const handleAddNote = () => {
    if (newNote.trim() || tag.trim()) {
      const note = { text: newNote, tag: tag || "General" };
      setNotes([...notes, note]);
      setNewNote("");
      setTag("");
    }
  };

  // Edit a note
  const handleEditNote = (index) => {
    setEditIndex(index);
    setNewNote(notes[index].text);
    setTag(notes[index].tag);
  };

  // Save edited note
  const handleSaveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[editIndex] = { text: newNote, tag: tag || "General" };
    setNotes(updatedNotes);
    setEditIndex(null);
    setNewNote("");
    setTag("");
  };

  // Delete a note
  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Filter notes based on the search query
  const filteredNotes = notes.filter(
    (note) =>
      note.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="notes-app">
      {/* Back Button */}
      <Link to="/home" className="back-button">
        <i className="fas fa-arrow-left"></i>
      </Link>

      <h1>Notes App</h1>

      {/* Note input */}
      <div className="add-note">
        <textarea
          placeholder="Write your note here..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add a tag (e.g., Work, Personal)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={handleSaveEdit}>
            <i className="fas fa-save"></i> Save Note
          </button>
        ) : (
          <button onClick={handleAddNote}>
            <i className="fas fa-plus"></i> Add Note
          </button>
        )}
      </div>

      {/* Search notes */}
      <div className="search">
        <input
          type="text"
          placeholder="Search notes or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Notes list */}
      <div className="notes-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div className="note-card" key={index}>
              <p className="note-text">{note.text}</p>
              <span
                className="note-tag"
                style={{ backgroundColor: getTagColor(note.tag) }}
              >
                {note.tag}
              </span>
              <div className="note-actions">
                <button onClick={() => handleEditNote(index)}>
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button onClick={() => handleDeleteNote(index)}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
