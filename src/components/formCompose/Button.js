import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ handleClick }
        name="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
