import React from 'react';
import PropTypes from 'prop-types';

class SearchTextInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ value }
          data-testid="text-input"
          onChange={ handler }
          className="form-control"
        />
      </label>
    );
  }
}

SearchTextInput.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string,
};

SearchTextInput.defaultProps = {
  handler: () => undefined,
  value: '',
};

export default SearchTextInput;
