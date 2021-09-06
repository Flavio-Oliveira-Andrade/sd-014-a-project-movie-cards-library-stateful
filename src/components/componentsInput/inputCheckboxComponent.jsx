import React from 'react';
import PropTypes from 'prop-types';

class InputCheckboxComponent extends React.Component {
  render() {
    const {
      dataTestId,
      renderText,
      type,
      checkbox,
      onChange,
    } = this.props;
    return (
      <div className="d-flex">
        <label htmlFor={ dataTestId } data-testid={ dataTestId }>
          { renderText }
          <input
            id={ dataTestId }
            type={ type }
            checked={ checkbox }
            onChange={ onChange }
            data-testid={ dataTestId }
          />
        </label>
      </div>
    );
  }
}
InputCheckboxComponent.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  renderText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checkbox: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputCheckboxComponent;
