import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  render() {
    const {
      dataTestId,
      renderText,
      type,
      value,
      onChange,
    } = this.props;
    return (
      <div className="d-flex">
        <label htmlFor={ dataTestId } data-testid={ dataTestId }>
          { renderText }
          <input
            id={ dataTestId }
            type={ type }
            value={ value }
            onChange={ onChange }
            data-testid={ dataTestId }
          />
        </label>
      </div>
    );
  }
}
InputComponent.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  renderText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputComponent;

// <form data-testid="search-bar-form">
{ /* <InputComponent
data-testid="text-input-label"
renderText="Inclui o texto"
type="text"
value={ searchText }
onChange={ onSearchTextChange }
/>
<InputCheckboxComponent
data-testid="checkbox-input-label"
renderText="Mostrar somente favoritos"
type="checkbox"
checkbox={ bookmarkedOnly }
onChange={ onBookmarkedChange }
/>

</form> */ }
