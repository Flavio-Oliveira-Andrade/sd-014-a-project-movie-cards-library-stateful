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
          name="title"
          id="title"
          data-testid="title-input"
          value={ title }
          onChange={ titleChange }
        />
      </label>
    );
  }
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleChange: PropTypes.string.isRequired,
};
export default Title;
