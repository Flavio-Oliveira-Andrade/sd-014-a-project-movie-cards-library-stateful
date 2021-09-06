import React from 'react';
import PropTypes from 'prop-types';

class SearchFormInputCheckbox extends React.Component {
  render() {
    const { value, eventListener } = this.props;
    return (
      <label
        id="checkbox-input-label"
        data-testid="checkbox-input-label"
        htmlFor="checkbox-input"
      >
        <input
          id="checkbox-input"
          type="checkbox"
          data-testid="checkbox-input"
          checked={ value }
          onChange={ eventListener }
        />
        Mostrar somente favoritos
      </label>
    );
  }
}

SearchFormInputCheckbox.defaultProps = {
  value: '',
  eventListener: '',
};

SearchFormInputCheckbox.propTypes = {
  value: PropTypes.string,
  eventListener: PropTypes.func,
};

export default SearchFormInputCheckbox;
