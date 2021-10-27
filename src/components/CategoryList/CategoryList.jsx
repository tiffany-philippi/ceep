import React, { Component } from "react";
import './category-list.css'

class CategoryList extends Component {
  _handleInputEvent(e) {
    if (e.key === 'Enter') {
      let category = e.target.value;
      this.props.newCategory(category);
      console.log(category);
    }
  }
  render() {
    return (
      <div className="categories_content">
        <ul className="category_list">
          {this.props.categories.map((c, i) => {
            return <li key={i} className="category_item">{c}</li>
          })}
          {/* <li className="category_item">Grocery Store</li>
          <li className="category_item">Reminder</li>
          <li className="category_item">Event</li> */}
        </ul>
        <input type="text" className="category_create" placeholder="Add category" onKeyUp={this._handleInputEvent.bind(this)}/>
      </div>
    );
  }
}

export default CategoryList;
