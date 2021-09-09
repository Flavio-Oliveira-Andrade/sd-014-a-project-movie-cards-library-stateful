import React from 'react';
import PropTypes from 'prop-types';

class Botao extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

Botao.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Botao;
