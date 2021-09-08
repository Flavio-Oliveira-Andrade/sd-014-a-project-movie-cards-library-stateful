import React from 'react';
import PropTypes from 'prop-types';

class Botao extends React.Component {
  render() {
    const { handleOnClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ handleOnClick }
      >
        Adicionar filme
      </button>
    );
  }
}

Botao.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};
export default Botao;
