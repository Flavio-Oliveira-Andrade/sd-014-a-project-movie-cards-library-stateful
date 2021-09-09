import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="handle-change-title" data-testid="title-input-label">
          Título
          <input
            value={ value }
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Title;
