import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <label htmlFor="handle-change-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ onChange }
            id="handle-change-subtitle"
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
