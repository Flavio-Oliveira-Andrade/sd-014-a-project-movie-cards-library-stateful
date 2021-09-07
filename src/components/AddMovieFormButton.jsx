import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormButton extends React.Component {
  render() {
    const { options, eventListeners } = this.props;
    const { type, form, id, content } = options;

    return (
      <button
        id={ `${id}-${type}` }
        form={ form }
        type="button"
        data-testid={ `${id}-${type}` }
        onClick={ eventListeners }
      >
        { content }
      </button>
    );
  }
}

AddMovieFormButton.defaultProps = {
  options: '',
  eventListeners: '',
};

AddMovieFormButton.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    form: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  eventListeners: PropTypes.func,
};

export default AddMovieFormButton;
