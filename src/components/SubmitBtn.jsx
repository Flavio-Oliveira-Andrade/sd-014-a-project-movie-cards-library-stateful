import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

SubmitBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SubmitBtn;
