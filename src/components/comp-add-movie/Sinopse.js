import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, handleOnChange } = this.props;
    return (
      <label htmlFor="input-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="input-sinopse"
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Sinopse;
