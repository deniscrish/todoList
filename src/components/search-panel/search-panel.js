import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value; // текущее значение нашего инпута
    this.setState({ term }); // обновление нашего собств. состояния
    this.props.onSearchChange(term); // вызов event Listener
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange} // делаем элемент контролируемым
      />
    );
  }
}
