import React from 'react';
import PropTypes from 'prop-types';

class SelectC extends React.Component {
  render() {
    const { id, callback, value, titulo } = this.props;
    return (
      <label data-testid={ `${id}-input-label` } htmlFor={ id }>
        { titulo }
        <select
          id={ id }
          value={ value }
          onChange={ callback }
          data-testid={ `${id}-input` }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>

        </select>
      </label>
    );
  }
}
SelectC.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default SelectC;
