import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onClick } = this.props;
    return (
      <label htmlFor="subtitle">
        Subtitle
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ onClick }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Subtitle;
