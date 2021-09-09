import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <div>
        <label htmlFor="handle-change-storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            value={ value }
            type="text"
            name="storyline"
            data-testid="storyline-input"
            onChange={ onChange }
            id="handle-change-storyline"
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Storyline;
