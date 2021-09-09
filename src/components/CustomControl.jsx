import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

class CustomControl extends React.Component {
  renderControl(props) {
    switch (props.type) {
    case 'select':
      return <CustomSelect { ...props } />;
    // case 'textarea':
    //   return <CustomTextarea { ...props } />;
    default:
      return <CustomInput { ...props } />;
    }
  }

  render() {
    const { name, labelText } = this.props;
    const id = `${name}-input`;
    const labelId = `${id}-label`;
    return (
      <label data-testid={ labelId } htmlFor={ id }>
        { labelText }
        { this.renderControl(this.props) }
      </label>
    );
  }
}

CustomControl.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default CustomControl;
