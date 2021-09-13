import React from 'react';
import PropTypes from 'prop-types';

class PutInput extends React.Component {
  render() {
    const { data, type, name, value, onChange, label } = this.props;
    return (
      <>
        <label htmlFor={ name } data-testid={ `${data}-input-label` }>{label}</label>
        <input
          id={ name }
          name={ name }
          type={ type }
          data-testid={ `${data}-input` }
          value={ value }
          onChange={ onChange }
        />
      </>);
  }
}
PutInput.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
// PutInput.defaultProps = {
//   name: '',
//   data: '',
//   id: '',
//   type: '',
//   value: 0,
//   label: '',
// };
export default PutInput;
