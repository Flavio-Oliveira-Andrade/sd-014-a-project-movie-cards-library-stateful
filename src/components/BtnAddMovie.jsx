import React from 'react';
import PropTypes from 'prop-types';

class BtnAddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

BtnAddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnAddMovie;
