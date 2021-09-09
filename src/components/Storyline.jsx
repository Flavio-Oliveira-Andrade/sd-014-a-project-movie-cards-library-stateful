import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <label htmlFor="handle-change-storyline" data-testid="storyline-input-label">
          Sinopse
          <input
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
};

export default Storyline;
