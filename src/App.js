import { Component } from "react";
import NoteCreateForm from "./components/NoteCreateForm";
import NotesList from "./components/NotesList";
import "./app.css"
import { ReactComponent as LightbulbSVG } from "./assets/images/lightbulb.svg"

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
  deleteNote(index) {
    let noteState = this.state.notes;
    noteState.splice(index, 1);
    console.log(noteState);
    this.setState({notes: noteState});
  }
  render() {
    return (
      <div>
        <header className="header_content">
          <LightbulbSVG/>
          <h1>My notes</h1>
        </header>
        <div className="content">
          <NoteCreateForm createNote={this.createNoteSubmit.bind(this)}/>
          <NotesList deleteNote={this.deleteNote.bind(this)} notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}

export default App;
