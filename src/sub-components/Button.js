import React, { Component } from 'react';

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

export default Button;
