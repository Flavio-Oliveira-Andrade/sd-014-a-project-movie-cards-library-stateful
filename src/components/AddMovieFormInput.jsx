import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormInput extends React.Component {
  render() {
    const { name, value, string, eventListener } = this.props;
    const otherName = name === 'imagePath' ? 'image' : name;
    return (
      <label
        data-testid={ ` ${otherName}-input-label` }
        htmlFor={ `${otherName}-text-input` }
      >
        { string }
        <input
          id={ `${otherName}-text-input` }
          type="text"
          data-testid={ `${otherName}-input` }
          name={ name }
          value={ value }
          onChange={ eventListener }
        />
      </label>
    );
  }
}

AddMovieFormInput.defaultProps = {
  name: '',
  value: '',
  string: '',
  eventListener: '',
};

AddMovieFormInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  string: PropTypes.string,
  eventListener: PropTypes.func,
};

export default AddMovieFormInput;
