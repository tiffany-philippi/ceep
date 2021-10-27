import { Component } from "react";
import NoteCreateForm from "./components/NoteCreateForm";
import NotesList from "./components/NotesList";
import "./app.css"
import { ReactComponent as LightbulbSVG } from "./assets/images/lightbulb.svg"
import CategoryList from "./components/CategoryList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [], 
      categories: ['Reminder', 'Grocery Store']
    }
    
  }

  createNoteSubmit(note) {
    this.setState({
      notes: [
        ...this.state.notes,
        note
      ]
    });
  }
  deleteNote(index) {
    let noteState = this.state.notes;
    noteState.splice(index, 1);
    this.setState({notes: noteState});
  }

  newCategory(category) {
    this.setState({
      categories: [
        ...this.state.categories,
        category
      ]
    })
  }

  render() {
    return (
      <div>
        <header className="header_content">
          <LightbulbSVG/>
          <h1>My notes</h1>
        </header>
        <div className="content">
          <NoteCreateForm 
          categories={this.state.categories} 
          createNote={this.createNoteSubmit.bind(this)}/>

          <main className="main_content">
            <CategoryList 
              newCategory={this.newCategory.bind(this)} 
              categories={this.state.categories}/>

            <NotesList 
              deleteNote={this.deleteNote.bind(this)} 
              notes={this.state.notes}/>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
