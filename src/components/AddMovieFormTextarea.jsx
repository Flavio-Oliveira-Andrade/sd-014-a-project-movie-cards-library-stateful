import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormTextarea extends React.Component {
  render() {
    const { options, value, callback } = this.props;
    const { type, name, id, content } = options;

    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ `${id}-input` }
      >
        { content }
        <textarea
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

AddMovieFormTextarea.defaultProps = {
  options: {
    type: '',
    name: '',
    id: '',
    content: '',
  },
  value: '',
  callback: () => (undefined),
};

AddMovieFormTextarea.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  value: PropTypes.string,
  callback: PropTypes.func,
};

export default AddMovieFormTextarea;
