import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { state, onClick } = this.props;
    return (
      <button value={ state } type="submit" data-testid="send-button" onClick={ onClick }>
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
}.isRiquered;

export default Button;
