import React from 'react';
import PropTypes from 'prop-types';
// como descrito no CustomText Input este é um fragmento de elementos do Code review do Fernando OLiveira
// referencia foi https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/19/files
// no componente TextAreaInput
class CustomTextAreaInput extends React.Component {
  render() {
    const { value, onChange, dataID, name, title } = this.props;
    return (
      <label htmlFor={ `${dataID}` } data-testid={ `${dataID}-label` }>
        { `${title}` }
        <textarea
          data-testid={ `${dataID}` }
          id={ `${dataID}` }
          name={ `${name}` }
          type="text"
          value={ value }
          onChange={ onChange }

        />
      </label>
    );
  }
}
CustomTextAreaInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataId: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}.isRequired;
export default CustomTextAreaInput;
