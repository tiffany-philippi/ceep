import React, { Component } from "react";
import "./note-card.css"

class NoteCard extends Component {
  render() {
    return (
      <section className="note_card_section">
        <header className="note_card_header">
          <h1 className="note_card_title">Title</h1>
        </header>
        <p className="note_card_text">Write your note.</p>
      </section>
    );
  }
}

export default NoteCard;
