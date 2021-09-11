import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

Title.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Title;
