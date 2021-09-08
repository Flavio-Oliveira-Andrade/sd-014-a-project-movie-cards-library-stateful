import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { name, value, cb, opt, lblName } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ name }>
        { lblName }
        <select
          id={ name }
          name={ name }
          data-testid={ `${name}-input` }
          type="number"
          value={ value }
          onChange={ cb }
        >
          {opt.map((e) => (
            <option
              key={ `${e[0]}-key` }
              value={ e[0] }
              data-testid={ `${name}-option` }
            >
              { e[1] }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  lblName: PropTypes.string.isRequired,
  opt: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default SelectInput;
