import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormButton extends React.Component {
  render() {
    const { options, callback } = this.props;
    const { type, form, id, content } = options;

    return (
      <button
        id={ `${id}-${type}` }
        form={ form }
        type="submit"
        data-testid={ `${id}-${type}` }
        onClick={ callback }
      >
        { content }
      </button>
    );
  }
}

AddMovieFormButton.defaultProps = {
  options: {
    type: '',
    form: '',
    id: '',
    content: '',
  },
  callback: () => (undefined),
};

AddMovieFormButton.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
    form: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  callback: PropTypes.func,
};

export default AddMovieFormButton;
