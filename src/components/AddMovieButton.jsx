import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ handleClick }
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddMovieButton;
