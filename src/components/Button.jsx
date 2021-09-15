import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inicialState = {
  subtitle: '',
  title: '',
  image: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class Button extends Component {
  handleClick = (event, onClick) => {
    event.preventDefault();
    onClick(this.state);
    this.setState(inicialState);
  }

  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ (event) => this.handleClick(event, onClick) }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
