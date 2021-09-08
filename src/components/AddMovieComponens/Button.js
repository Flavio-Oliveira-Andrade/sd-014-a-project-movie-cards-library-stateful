import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { funcOnClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ funcOnClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  funcOnClick: PropTypes.func.isRequired,
};
