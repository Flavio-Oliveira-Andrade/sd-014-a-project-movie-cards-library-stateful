import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        type="reset"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
