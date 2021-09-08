import React from 'react';
import PropTypes from 'prop-types';

class Botao extends React.Component {
  render() {
    const { OnClickFunc } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ OnClickFunc }
      >
        Adicionar filme
      </button>
    );
  }
}

Botao.propTypes = {
  OnClickFunc: PropTypes.func.isRequired,
};
export default Botao;
