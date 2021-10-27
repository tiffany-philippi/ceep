import React, { Component } from "react";
import "./note-card.css"
import {ReactComponent as DeleteSVG} from "../../assets/images/delete.svg"

class NoteCard extends Component {
  deleteNote() {
    const i = this.props.index;
    this.props.deleteNote(i);
  }

  render() {
    return (
      <section className="note_card_section">
        <header className="note_card_header_content">
          <div className="note_card_header">
            <h1 className="note_card_title">{this.props.note.title}</h1>
            <DeleteSVG onClick={this.deleteNote.bind(this)}/>
          </div>
          <span className="note_card_category">{this.props.note.category}</span>
        </header>
        <p className="note_card_text">{this.props.note.note}</p>
      </section>
    );
  }
}

export default NoteCard;
