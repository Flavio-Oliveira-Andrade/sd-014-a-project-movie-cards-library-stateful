import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { name, title, handler, testIds, value } = this.props;
    const { labelId, inputId } = testIds;
    return (
      <label htmlFor={ name } data-testid={ labelId } className="form-label">
        { title }
        <input
          type="text"
          name={ name }
          id={ name }
          value={ value }
          data-testid={ inputId }
          onChange={ handler }
          className="form-control"
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  handler: PropTypes.func,
  value: PropTypes.string,
  testIds: PropTypes.shape({
    labelId: PropTypes.string,
    inputId: PropTypes.string,
  }),
};

TextInput.defaultProps = {
  name: '',
  title: '',
  handler: () => undefined,
  value: '',
  testIds: {
    labelId: '',
    inputId: '',
  },
};

export default TextInput;
