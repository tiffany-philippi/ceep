import React, { Component } from "react"
import "./note-create-form.css"

class NoteCreateForm extends Component {
  render() {
    return (
      <form className="note_create_form">
        <input type="text" placeholder="Title" className="input_style" />
        <textarea rows="15" type="text" placeholder="Write your note..." className="input_style"></textarea>
        <button className="note_create_button">Create note</button>
      </form>
    );
  }
}

export default NoteCreateForm;
