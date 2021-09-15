import React from 'react';
import propTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="subtitle-input"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: propTypes.string,
  handleChange: propTypes.func,
}.isRequired;

export default AddMovieSubtitle;
