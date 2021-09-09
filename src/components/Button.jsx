import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleOnClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ handleOnClick }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;
