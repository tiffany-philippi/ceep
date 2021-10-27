import React, { Component } from "react"
import NoteCard from "../NoteCard";
import "./notes-list.css"

class NotesList extends Component {
  render(){ 
    return (
      <ul className="notes_list">
        {Array.of("Example").map((category, index) => {
          return (
            <li className="notes_list_item" key={index}>
              <div>{category}</div>
              <NoteCard/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
