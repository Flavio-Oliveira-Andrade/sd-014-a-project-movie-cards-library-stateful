import React, { Component } from 'react';
import './style/components.css';

export default class SearchBar extends Component {
  render({ searchText }) {
    const { id } = this;

    // const handleChange = (event) => {

    // }

    return (
      <form data-testid="search-bar-form">
        <label htmlFor={ id } data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ handleChange }
            id={ id }
            placeholder="Buscar"
          />
        </label>
        <label htmlFor={ id }>
          <input id={ id } type="checkbox" value="" />
          Mostrar favoritos
        </label>
      </form>
    );
  }
}
