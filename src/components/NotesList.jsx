import React, { Component } from "react"

export default class NotesList extends Component {
 render(){ 
   return (
    <ul>
        <li>
          <section>
            <header>
              <h1>Title</h1>
              <p>Write your note.</p>
            </header>
          </section>
        </li>
      </ul>
      );
   }
}
