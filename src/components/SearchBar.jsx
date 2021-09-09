import React, { Component } from 'react';
import './style/components.css';

export default class SearchBar extends Component {
  render() {
    const { id } = this;
    return (
      <form data-testid="search-bar-form">
        <input type="text" value="" placeholder="Buscar" />
        <label htmlFor={ id }>
          <input id={ id } type="checkbox" value="" />
          Mostrar favoritos
        </label>
      </form>
    );
  }
}
