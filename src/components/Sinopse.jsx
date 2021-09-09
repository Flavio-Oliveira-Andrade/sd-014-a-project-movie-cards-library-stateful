import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, update } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          type="text"
          value={ storyline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ update }
        />
      </label>
    );
  }
}
Sinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default Sinopse;
