import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button
          data-testid="send-button"
          type="button"
          onClick={ handleClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
