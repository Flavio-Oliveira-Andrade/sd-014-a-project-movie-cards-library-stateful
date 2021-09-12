import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle-input"
          name="subtitle"
          onChange={ handleChange }
          type="text"
          value={ subtitle }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieSubtitle;
