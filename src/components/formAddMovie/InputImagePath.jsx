import React from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends React.Component {
  render() {
    const { inputImagePath, handleChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="inputImagePath">
          Imagem
          <input
            type="text"
            name="inputImagePath"
            id="inputImagePath"
            data-testid="image-input"
            value={ inputImagePath }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputImagePath.propTypes = {
  inputImagePath: PropTypes.string,
  handleChange: PropTypes.func,
};

InputImagePath.defaultProps = {
  inputImagePath: '',
  handleChange: () => {},
};

export default InputImagePath;
