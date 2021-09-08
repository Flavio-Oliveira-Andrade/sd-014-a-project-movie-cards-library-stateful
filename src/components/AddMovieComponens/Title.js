import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, titleChange } = this.props;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ titleChange }
        />
      </label>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleChange: PropTypes.func.isRequired,
};
