import React from 'react';
import PropTypes from 'prop-types';

class AddForm extends React.Component {
  render() {
    let label = '';
    const { name, handleChange, value } = this.props;
    switch (name) {
    case 'title':
      label = 'Título';
      break;
    case 'subtitle':
      label = 'Subtítulo';
      break;
    default:
      label = 'Imagem';
      break;
    }
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { label }
        <input
          type={ name === 'rating' ? 'number' : 'text' }
          name={ name }
          onChange={ handleChange }
          data-testid={ `${name}-input` }
          value={ value }
        />
      </label>
    );
  }
}

AddForm.defaultProps = {
  name: '',
  handleChange: null,
  value: '',
};

AddForm.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export default AddForm;
