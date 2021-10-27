import { Component } from "react";
import NoteCreateForm from "./components/NoteCreateForm";
import NotesList from "./components/NotesList";
import "./app.css"

class App extends Component {
  constructor() {
    super();
    this.notesList = [];
    this.state = {notes: this.notesList}
    
  }
  createNoteSubmit(note) {
    this.setState({
      notes: [
        ...this.state.notes,
        note
      ]
    })
  }
  render() {
    return (
      <div className="content">
        <NoteCreateForm createNote={this.createNoteSubmit.bind(this)}/>
        <NotesList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
