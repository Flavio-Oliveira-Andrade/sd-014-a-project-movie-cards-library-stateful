import React from 'react';

class Button extends React.Component {
  render(){
    return(
      <button
      type="submit" 
      onClick data-testid="send-button">
      Adicionar filme
      
      </button>
    )
  }
}

export default Button;