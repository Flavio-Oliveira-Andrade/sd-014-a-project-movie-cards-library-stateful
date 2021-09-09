import React from 'react';
import PropTypes from 'prop-types';

// TODO: considerar fazer isso com CustomInput (complexidade vs. repetição)
class CustomTextarea extends React.Component {
  render() {
    const { name, type, value, onChange } = this.props;
    const id = `${name}-input`;
    return (
      <textarea
        name={ name }
        type={ type }
        id={ id }
        data-testid={ id }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

CustomTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomTextarea;
