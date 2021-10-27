import React, { Component } from "react"
import "./note-create-form.css"

class NoteCreateForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.note = "";
  }

  _handleTitleChanging(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }

  _handleNoteChanging(e) {
    e.stopPropagation();
    this.note = e.target.value;
  }

  _createNote(e) {
    e.preventDefault();
    e.stopPropagation();
    const note = {title: this.title, note: this.note};
    this.props.createNote(note);
  }

  render() {
    return (
      <form className="note_create_form" onSubmit={this._createNote.bind(this)}>
        <input type="text" placeholder="Title" className="input_style" onChange={this._handleTitleChanging.bind(this)}/>
        <textarea rows="15" type="text" placeholder="Write your note..." className="input_style" onChange={this._handleNoteChanging.bind(this)}></textarea>
        <button className="note_create_button">Create note</button>
      </form>
    );
  }
}

export default NoteCreateForm;
