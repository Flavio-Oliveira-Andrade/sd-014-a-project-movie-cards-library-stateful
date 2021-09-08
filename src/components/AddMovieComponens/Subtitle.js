import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, SubtitleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ SubtitleChange }
        />
      </label>
    );
  }
}

export default Subtitle;

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  SubtitleChange: PropTypes.func.isRequired,
};
