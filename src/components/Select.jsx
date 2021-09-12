import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, handleChange,
      value, labelText } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${name}-input-label` }
      >
        { labelText }
        <select
          name={ name }
          value={ value }
          data-testid={ `${name}-input` }
          onChange={ handleChange }
        >
          <option
            value="action"
            data-testid={ `${name}-option` }
            selected={ value === 'action' }
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid={ `${name}-option` }
            selected={ value === 'comedy' }
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid={ `${name}-option` }
            selected={ value === 'thriller' }
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
