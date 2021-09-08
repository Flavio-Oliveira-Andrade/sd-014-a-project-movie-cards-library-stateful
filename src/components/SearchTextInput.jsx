import React from 'react';
import PropTypes from 'prop-types';

import { searchTextTestIds } from '../data';

const { labelId, inputId } = searchTextTestIds;

class SearchTextInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="searchText" data-testid={ labelId }>
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ value }
          data-testid={ inputId }
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
