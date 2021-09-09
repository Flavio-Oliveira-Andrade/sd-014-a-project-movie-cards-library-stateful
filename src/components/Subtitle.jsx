import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          value={ value }
          type="text"
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          onChange={ onClick }
        />
      </label>
    );
  }
}

Subtitle.propTypes = ({
  value: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default Subtitle;
