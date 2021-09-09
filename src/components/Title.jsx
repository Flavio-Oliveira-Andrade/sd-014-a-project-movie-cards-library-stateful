import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label htmlFor="handle-change-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            onChange={ onChange }
            id="handle-change-title"
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  onChange: PropTypes.string.isRequired,
};

export default Title;
