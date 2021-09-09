import React from 'react';
import PropTypes from 'prop-types';

// TODO: refatorar para aproveitar código do CustomInput
class CustomSelect extends React.Component {
  render() {
    const { name, value, onChange, labelText, options } = this.props;
    const id = `${name}-input`;
    const labelId = `${id}-label`;
    return (
      <label data-testid={ labelId } htmlFor={ id }>
        { labelText }
        <select
          id={ id }
          data-testid={ id }
          value={ value }
          onChange={ onChange }
        >
          {Object.entries(options).map(
            ([optionName, optionValue]) => (
              <option
                key={ optionValue }
                value={ optionValue }
                data-testid="select-option"
              >
                { optionName }
              </option>
            ),
          )}
        </select>
      </label>
    );
  }
}

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default CustomSelect;
