import React from 'react';
import PropTypes from 'prop-types';

class FormButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
