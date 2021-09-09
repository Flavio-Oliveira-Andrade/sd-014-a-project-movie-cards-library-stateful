import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título:
        <input
          value={ value }
          type="text"
          name="title"
          id="title"
          data-testid="title-input"
          onChange={ onClick }
        />
      </label>
    );
  }
}

Title.propTypes = ({
  value: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default Title;
