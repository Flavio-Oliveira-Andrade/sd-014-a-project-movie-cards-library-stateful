import React, { Component } from 'react';

class SubmitBtn extends Component {
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

export default SubmitBtn;
