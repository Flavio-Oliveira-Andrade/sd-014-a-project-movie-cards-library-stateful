import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormInput extends React.Component {
  render() {
    const { options, value, callback } = this.props;
    const { type, name, id, content } = options;

    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ `${id}-input` }
      >
        { content }
        <input
          id={ `${id}-input` }
          type={ type }
          data-testid={ `${id}-input` }
          name={ name }
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

AddMovieFormInput.defaultProps = {
  options: {
    type: '',
    name: '',
    id: '',
    content: '',
  },
  value: '',
  callback: () => (undefined),
};

AddMovieFormInput.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  callback: PropTypes.func,
};

export default AddMovieFormInput;
