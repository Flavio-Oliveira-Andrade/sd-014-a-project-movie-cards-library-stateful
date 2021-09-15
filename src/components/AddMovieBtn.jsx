import React from 'react';
import propTypes from 'prop-types';

class AddMovieBtn extends React.Component {
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

AddMovieBtn.propTypes = {
  handleClick: propTypes.func,
}.isRequired;

export default AddMovieBtn;
