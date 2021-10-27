import { Component } from "react";
import NoteCreateForm from "./components/NoteCreateForm";
import NotesList from "./components/NotesList";
import "./app.css"

class App extends Component {
  render() {
    return (
      <div className="content">
        <NoteCreateForm />
        <NotesList />
      </div>
    );
  }
}

export default App;
