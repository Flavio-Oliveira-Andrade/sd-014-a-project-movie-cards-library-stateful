import React from 'react';
import PropTypes from 'prop-types';

class SubmitButton extends React.Component {
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

SubmitButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SubmitButton;
