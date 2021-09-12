import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          data-testid="storyline-input"
          id="sinopse"
          type="textarea"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Sinopse;
