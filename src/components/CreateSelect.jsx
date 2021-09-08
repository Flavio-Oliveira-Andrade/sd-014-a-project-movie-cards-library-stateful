import React from 'react';
import PropTypes from 'prop-types';

class CreateSelect extends React.Component {
  render() {
    const { name, value, handleForm, text } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { text }
        <select
          name={ name }
          value={ value }
          onChange={ handleForm }
          data-testid={ `${name}-input` }
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

CreateSelect.propTypes = ({
  name: PropTypes.string,
  value: PropTypes.string,
  handleForm: PropTypes.func,
  text: PropTypes.string,
}).isRequired;

export default CreateSelect;
