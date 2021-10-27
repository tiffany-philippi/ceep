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
      <div className="note_create_content">
        <h2>Create a new note</h2>
        <form className="note_create_form" onSubmit={this._createNote.bind(this)}>
          <select className="input_style">
          <option value='INITIAL'>Select a category</option>
            {this.props.categories.map((category, i) => {
              return <option key={i} value={category}>{category}</option>
            })}
          </select>
          <input type="text" placeholder="Title" className="input_style" onChange={this._handleTitleChanging.bind(this)}/>
          <textarea rows="15" type="text" placeholder="Write your note..." className="input_style" onChange={this._handleNoteChanging.bind(this)}></textarea>
          <button className="note_create_button">Create note</button>
        </form>
      </div>
    );
  }
}

export default NoteCreateForm;
