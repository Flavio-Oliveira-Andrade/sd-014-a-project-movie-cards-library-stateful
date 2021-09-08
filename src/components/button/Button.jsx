import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { data, titulo, handleClick } = this.props;
    return (
      <button
        className="btn btn-outline-primary"
        type="submit"
        onClick={ handleClick }
        data-testid={ data }
        id="liveToastBtn"
      >
        {titulo}
      </button>
    );
  }
}

Button.propTypes = {
  data: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
