import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ title }
          id="title"
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleInput;
