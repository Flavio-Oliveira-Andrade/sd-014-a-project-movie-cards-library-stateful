import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          value={ value }
          type="text"
          name="storyline"
          id="storyline"
          data-testid="storyline-input"
          onChange={ onClick }
        />
      </label>
    );
  }
}

Storyline.propTypes = ({
  value: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default Storyline;
