import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Sinopse;
