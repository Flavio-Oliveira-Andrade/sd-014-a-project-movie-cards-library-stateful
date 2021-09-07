import React from 'react';
import PropTypes from 'prop-types';

class SearchFormInputCheckbox extends React.Component {
  render() {
    const { value, callback } = this.props;
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
          onChange={ callback }
        />
        Mostrar somente favoritos
      </label>
    );
  }
}

SearchFormInputCheckbox.defaultProps = {
  value: false,
  callback: () => (undefined),
};

SearchFormInputCheckbox.propTypes = {
  value: PropTypes.bool,
  callback: PropTypes.func,
};

export default SearchFormInputCheckbox;
