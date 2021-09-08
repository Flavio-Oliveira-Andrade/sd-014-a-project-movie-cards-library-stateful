import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, storylineChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ storylineChange }
        />
      </label>
    );
  }
}
Storyline.propTypes = {
  storylineChange: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
};
export default Storyline;
