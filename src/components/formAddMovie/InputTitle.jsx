import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { inputTitle, handleChange } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          <input
            type="text"
            name="inputTitle"
            id="inputTitle"
            data-testid="title-input"
            value={ inputTitle }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputTitle.propTypes = {
  inputTitle: PropTypes.string,
  handleChange: PropTypes.func,
};

InputTitle.defaultProps = {
  inputTitle: '',
  handleChange: () => {},
};

export default InputTitle;
