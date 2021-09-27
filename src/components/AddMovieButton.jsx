import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    const { onClick, handleClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ (event) => {
          handleClick();
          return onClick(event);
        } }
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  handleClick: PropTypes.func,
  onClick: PropTypes.func,
}.isRequired;

export default AddMovieButton;
