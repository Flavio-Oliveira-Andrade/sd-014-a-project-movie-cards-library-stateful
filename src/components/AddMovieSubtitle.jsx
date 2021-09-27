import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { subtitle, handleChanceSubtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChanceSubtitle }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string,
  handleChanceSubtitle: PropTypes.func,
}.isRequired;

export default AddMovieSubtitle;
