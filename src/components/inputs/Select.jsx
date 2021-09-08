import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, value, titulo, handleChange } = this.props;
    return (
      <div className="mb-3">
        <label className="form-label" htmlFor={ id } data-testid={ `${id}-input-label` }>
          { titulo }
        </label>
        <select
          className="form-control"
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
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
