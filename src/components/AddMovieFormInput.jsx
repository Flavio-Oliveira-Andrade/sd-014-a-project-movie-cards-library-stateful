import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormInput extends React.Component {
  render() {
    const { options, value, eventListener } = this.props;
    const { type, name, id, content } = options;

    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ `${id}-text-input` }
      >
        { content }
        <input
          id={ `${id}-text-input` }
          type={ type }
          data-testid={ `${id}-input` }
          name={ name }
          value={ value }
          onChange={ eventListener }
        />
      </label>
    );
  }
}

AddMovieFormInput.defaultProps = {
  options: '',
  value: '',
  eventListener: '',
};

AddMovieFormInput.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  value: PropTypes.string,
  eventListener: PropTypes.func,
};

export default AddMovieFormInput;
