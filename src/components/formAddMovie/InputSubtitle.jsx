import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { inputSubtitle, handleChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
          Subtítulo
          <input
            type="text"
            name="inputSubtitle"
            id="inputSubtitle"
            data-testid="subtitle-input"
            value={ inputSubtitle }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputSubtitle.propTypes = {
  inputSubtitle: PropTypes.string,
  handleChange: PropTypes.func,
};

InputSubtitle.defaultProps = {
  inputSubtitle: '',
  handleChange: () => {},
};

export default InputSubtitle;
