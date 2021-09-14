import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onClick } = this.props;
    return (
      <label htmlFor="title">
        Subtitle
        <input
          id="title"
          name="title"
          type="text"
          value={ title }
          onChange={ onClick }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Title;
