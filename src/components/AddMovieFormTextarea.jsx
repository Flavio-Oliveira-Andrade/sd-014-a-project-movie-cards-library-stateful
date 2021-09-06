import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormTextarea extends React.Component {
  render() {
    const { name, value, string, eventListener } = this.props;
    return (
      <label
        data-testid={ ` ${name}-input-label` }
        htmlFor={ `${name}-text-input` }
      >
        { string }
        <textarea
          id={ `${name}-text-input` }
          type="text"
          data-testid={ `${name}-input` }
          name={ name }
          value={ value }
          onChange={ eventListener }
        />
      </label>
    );
  }
}

AddMovieFormTextarea.defaultProps = {
  name: '',
  value: '',
  string: '',
  eventListener: '',
};

AddMovieFormTextarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  string: PropTypes.string,
  eventListener: PropTypes.func,
};

export default AddMovieFormTextarea;
