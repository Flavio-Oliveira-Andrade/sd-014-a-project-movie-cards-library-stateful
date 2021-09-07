import React from 'react';

class Select extends React.Component {
  render() {
    const { id, value, titulo, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { titulo }
        <select
          onChange={ handleChange }
          id={ id }
          name={ id }
          value={ value }
          data-testid={ `${id}-input` }
        >
          <option data-testid={ `${id}-option` } value="action">Ação</option>
          <option data-testid={ `${id}-option` } value="comedy">Comédia</option>
          <option data-testid={ `${id}-option` } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;
