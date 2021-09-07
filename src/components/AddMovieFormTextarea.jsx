import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormTextarea extends React.Component {
  render() {
    const { options, value, eventListener } = this.props;
    const { type, name, id, content } = options;

    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ `${id}-text-input` }
      >
        { content }
        <textarea
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

AddMovieFormTextarea.defaultProps = {
  options: '',
  value: '',
  eventListener: '',
};

AddMovieFormTextarea.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  value: PropTypes.string,
  eventListener: PropTypes.func,
};

export default AddMovieFormTextarea;
