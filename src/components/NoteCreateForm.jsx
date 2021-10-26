import { render } from "@testing-library/react"
import React, { Component } from "react"

export default class NoteCreateForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Title" />
        <textarea type="text" placeholder="Write your note..."></textarea>
        <button>Create note</button>
      </form>
    );
  }
}
