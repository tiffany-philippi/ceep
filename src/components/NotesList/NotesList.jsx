import React, { Component } from "react"
import NoteCard from "../NoteCard";
import "./notes-list.css"

class NotesList extends Component {
  render(){ 
    return (
      <div className="notes_list_content">
        <h2>Notes</h2>
        <ul className="notes_list">
          {this.props.notes.map((note, index) => {
            return (
              <li className="notes_list_item" key={index}>
                <NoteCard index={index} deleteNote={this.props.deleteNote} note={note}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NotesList;
