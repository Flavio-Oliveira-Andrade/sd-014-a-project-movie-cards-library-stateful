import React from 'react';
import PropTypes from 'prop-types';

class SendInput extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        onClick={ onClick }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

SendInput.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SendInput;
