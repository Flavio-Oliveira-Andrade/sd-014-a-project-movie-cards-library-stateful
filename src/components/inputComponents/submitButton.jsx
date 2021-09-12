import React from 'react';
import PropTypes from 'prop-types';

class SubmitButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SubmitButton;
