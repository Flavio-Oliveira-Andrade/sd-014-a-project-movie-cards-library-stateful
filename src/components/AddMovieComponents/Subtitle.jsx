import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, subtitleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ subtitleChange }
        />
      </label>
    );
  }
}
Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  subtitleChange: PropTypes.string.isRequired,
};
export default Subtitle;
